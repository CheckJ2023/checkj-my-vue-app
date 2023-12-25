<template>
  <div class="ai-library">
    <h1>{{ projectName }}</h1>
    
    <div class="tech-stack">
      <h2>技術堆疊</h2>
      <div class="frontend">
        <h3>前端</h3>
        <ul>
          <li>Vue.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      
      <div class="backend">
        <h3>後端</h3>
        <ul>
          <li>Spring Boot (Java框架)</li>
          <li>Java</li>
          <li>MySQL（資料庫）</li>
        </ul>
      </div>
    </div>

    <div class="project-description">
      <h2>專案描述</h2>
      <p>{{ projectDescription }}</p>
    </div>

    <div class="features">
      <h2>主要功能</h2>
      <ul>
        <li>{{ features[0] }}</li>
        <li>{{ features[1] }}</li>
        <li>{{ features[2] }}</li>
      </ul>
    </div>

    <div class="highlights">
      <h2>技術亮點</h2>
      <ul>
        <li>{{ highlights[0] }}</li>
        <li>{{ highlights[1] }}</li>
        <li>{{ highlights[2] }}</li>
      </ul>
    </div>

    <div class="project-link">
      <h2>專案連結</h2>
      <!-- 填入你的專案連結 -->
      <a href="http://34.30.165.251" target="_blank">http://34.30.165.251</a>
    </div>

    <div class="conclusion">
      <h2>結語</h2>
      <p>{{ conclusion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: 'AI線上圖書館網站',
      projectDescription: 'AI線上圖書館網站旨在利用ChatGPT提供更智能、便捷的圖書管理和閱讀體驗。系統結合前後端分離架構，以及豐富的AI功能，提供用戶一個多元且高效的線上閱讀平台。',
      features: [
        '智能搜尋與推薦： 利用ChatGPT實現智能搜尋和書籍推薦功能，提高用戶發現新書的機會。',
        '用戶管理系統： 提供註冊、登入、個人書櫃等功能，以個性化用戶體驗。',
        'ChatGPT說書功能： 未來將整合ChatGPT，使用戶能夠透過對話的形式獲得書籍推薦和解讀，提升閱讀互動性。'
      ],
      highlights: [
        'AI整合： 利用機器學習和自然語言處理，使系統更好地理解用戶需求和提供個性化服務。',
        '前後端分離： 提高開發效率，實現更好的代碼結構和模組化管理。',
        '資料庫管理： 使用MySQL有效地管理書籍、用戶和相關統計信息。'
      ],
      conclusion: 'AI線上圖書館網站是一個結合了先進技術和豐富功能的專案，未來將進一步整合ChatGPT說書功能，提供更加豐富的閱讀體驗。這也展現了我在Vue.js、Spring Boot、Java和MySQL方面的技能和經驗。期待未來進一步優化和擴展，提供更多價值給使用者。'
    };
  }
};
</script>

<style scoped>
/* 清爽工業風格的CSS樣式 */
.ai-library {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  color: #333;
  padding: 1.25em; /* 20px / 16px = 1.25em */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto; /* Center the element horizontally */
}

h1 {
  color: #007bff;
  font-size: 2em; /* 32px / 16px = 2em */
}

.tech-stack {
  margin-top: 1.25em;
}

h2 {
  color: #007bff;
  margin-bottom: 0.625em; /* 10px / 16px = 0.625em */
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5em; /* 8px / 16px = 0.5em */
}

.project-description, .features, .highlights, .conclusion {
  margin-top: 1.25em;
}

.features, .highlights {
  margin-bottom: 1.25em;
}

.project-link {
  margin-top: 1.25em;
}

.project-link h2 {
  color: #007bff;
  margin-bottom: 0.625em; /* 10px / 16px = 0.625em */
}

.project-link a {
  color: #007bff;
  text-decoration: none;
  border-bottom: 2px solid #007bff;
  transition: border-bottom 0.3s ease;
}

.project-link a:hover {
  border-bottom: 3px solid #007bff;
}

.conclusion {
  border-top: 2px solid #007bff;
  padding-top: 1.25em;
}

/* 响应式样式 */
@media screen and (max-width: 1285px) {
  .ai-library {
    padding: 0.9375em; /* 15px / 16px = 0.9375em */
  }
}

@media screen and (max-width: 900px) {
  h1 {
    font-size: 1.5em; /* 24px / 16px = 1.5em */
  }
}

@media screen and (max-width: 768px) {
  .ai-library {
    padding: 0.625em; /* 10px / 16px = 0.625em */
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 1.25em; /* 20px / 16px = 1.25em */
  }

  h2 {
    font-size: 1.125em; /* 18px / 16px = 1.125em */
  }

  ul li {
    font-size: 0.875em; /* 14px / 16px = 0.875em */
  }

  .project-description, .features, .highlights, .conclusion {
    margin-top: 0.9375em; /* 15px / 16px = 0.9375em */
  }
}

@media screen and (max-width: 450px) {
  h1 {
    font-size: 1.125em; /* 18px / 16px = 1.125em */
  }

  h2 {
    font-size: 1em; /* 16px / 16px = 1em */
  }

  ul li {
    font-size: 0.75em; /* 12px / 16px = 0.75em */
  }
}
</style>
