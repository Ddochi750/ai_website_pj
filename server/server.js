import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Groq from 'groq-sdk';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Groq SDK 초기화
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * STEP 1: 웹사이트 초안 생성
 */
app.post('/generate-html', async (req, res) => {
  const { businessType, businessName, address, phone, hours, description } = req.body;

  const prompt = `
너는 웹 개발자야. 아래 정보를 기반으로 간단하고 깔끔한 HTML 웹사이트 코드를 만들어줘.
업종: ${businessType}
이름: ${businessName}
주소: ${address}
전화번호: ${phone}
운영시간: ${hours}
소개: ${description}
전체 HTML 코드만 출력해줘.
  `;

  try {
    const chatCompletion = await groq.chat.completions.create({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct', // 최신 모델로 변경
      messages: [
        { role: 'system', content: '너는 숙련된 HTML/CSS 개발자야.' },
        { role: 'user', content: prompt }
      ],
    });

    const html = chatCompletion.choices[0]?.message?.content || '';
    res.json({ html });
  } catch (err) {
    console.error('초안 생성 오류:', err.message);
    res.status(500).json({ error: '초안 생성 실패' });
  }
});

/**
 * STEP 2: 생성된 HTML에 대한 꾸미기 요청 처리
 */
app.post('/edit-html', async (req, res) => {
  const { html, instruction } = req.body;

  const prompt = `
너는 웹 퍼블리셔야. 아래 HTML 코드를 사용자가 요청한 대로 수정해줘.

[사용자 요청]
${instruction}

[기존 HTML 코드]
${html}

수정된 전체 HTML 코드만 출력해줘.
  `;

  try {
    const chatCompletion = await groq.chat.completions.create({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct', // 최신 모델로 변경
      messages: [
        { role: 'system', content: '너는 숙련된 HTML/CSS 웹 디자이너야.' },
        { role: 'user', content: prompt }
      ],
    });

    const updatedHTML = chatCompletion.choices[0]?.message?.content || '';
    res.json({ html: updatedHTML });
  } catch (err) {
    console.error('꾸미기 요청 실패:', err.message);
    res.status(500).json({ error: '꾸미기 실패' });
  }
});

app.listen(port, () => {
  console.log(`✅ 서버 실행됨: http://localhost:${port}`);
});
