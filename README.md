# 🧠 AI 웹사이트 자동 생성기

간단한 가게 정보를 입력하면, **AI가 자동으로 HTML 웹사이트를 생성해주는 프로젝트**입니다.  
누구나 쉽게 클릭 몇 번으로 내 가게 웹사이트를 만들 수 있어요!

---

## 🚀 주요 기능

- 업종, 가게 이름, 주소 등 정보 입력 시
- AI가 HTML 웹사이트 코드 자동 생성
- 생성된 HTML 코드 미리보기 + 복사 기능
- ZIP 파일로 다운로드 가능 (추가 기능)

---

## 🛠️ 사용 기술 스택

- **Frontend**: HTML, CSS, Bootstrap, JavaScript
- **Backend**: Node.js, Express
- **AI API**: [Groq LLM API](https://console.groq.com/)
- **패키지**: `groq-sdk`, `dotenv`, `cors`, `body-parser`

---

## ⚙️ 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/Ddochi750/ai_website_pj.git
cd ai_website_pj

2. 서버 실행
bash
cd server
npm install
node server.js
.env 파일에 다음과 같이 API 키를 추가해야 합니다:

ini
GROQ_API_KEY=여기에_당신의_API_키_입력
3. 클라이언트 실행
client/index.html 파일을 브라우저에서 열면 됩니다.

📂 폴더 구조
pgsql
ai_website_pj/
├── client/               # 클라이언트 HTML + JS
│   └── index.html
├── server/               # 서버 Node.js + Groq API
│   ├── server.js
│   └── .env
├── package.json
├── README.md

💡 향후 개선 아이디어
다양한 템플릿 선택 기능

사용자 계정 & 저장 기능

다국어 지원 (영어/한국어)

Vercel, Netlify로 배포 연동

유료버전

👩‍💻 제작자
뚜치(Ddochi)😎

개발후기

AI 웹사이트 생성기를 만들어보고 싶어서 시작한 첫 프로젝트입니다.
API 사용법부터 프론트엔드 연결까지, 2주 동안 밤새 삽질하며 배웠네요 😅

아직 부족한 점이 많지만 나름 뿌듯한 결과물이에요!
앞으로 더 다양한 기능들을 추가해볼 예정입니다.
감사합니다.🚀

GitHub: https://github.com/Ddochi750

