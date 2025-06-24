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

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/generate-html', async (req, res) => {
  const { businessType, businessName, address, phone, hours, description } = req.body;

  const prompt = `
너는 웹 개발자야. 다음 정보를 기반으로 간단하고 깔끔한 HTML 웹사이트를 만들어줘:
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
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        { role: 'system', content: '너는 HTML/CSS 전문가야.' },
        { role: 'user', content: prompt }
      ],
    });

    const html = chatCompletion.choices[0]?.message?.content;
    res.json({ html });
  } catch (err) {
    console.error('Groq API 오류:', err.message);
    res.status(500).json({ error: 'Groq API 호출 실패' });
  }
});

app.listen(port, () => {
  console.log(`✅ 서버 실행됨: http://localhost:${port}`);
});
