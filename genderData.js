const fs = require("fs"); // Node.js의 파일 시스템 모듈

const dataList = {
  "data" : [
    ...Array.from({ length: 50 }, (_, i) => ({
      name: `사용자${i + 1}`,
      age: `${Math.floor(Math.random() * 30) + 18}`, //
      frequency: `${Math.floor(Math.random() * 249)}`, // frequency: 0~248
      email: `user${i + 1}@kmou.ac.kr`,
    })),
  ]
};

// JSON 파일로 저장
fs.writeFileSync("db.json", JSON.stringify(dataList, null, 2), "utf-8");

console.log("db.json 파일 생성 완료!");
