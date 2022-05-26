const express = require("express");

const app = express();

app.get("/getWorkingPartners", function (req, res) {
  res.json({
    items: [
      {
        name: "uurer1",
        age: 20,
        job: "前端工程師",
        id: 1,
      },
      {
        name: "mrfvhf33",
        age: 32,
        job: "區塊練工程師",
        id: 2,
      },
      {
        name: "bhhth11",
        age: 25,
        job: "房產經紀人",
        id: 3,
      },
      {
        name: "dxca5",
        age: "27",
        job: "人事主管",
        id: 4,
      },
      {
        name: "xxqgds5",
        age: 22,
        job: "系統分析師",
        id: 5,
      },
      {
        name: "qwe54",
        age: "18",
        job: "遊戲實習生",
        id: 6,
      },
      {
        name: "cccsc45",
        age: 21,
        job: "待業中",
        id: 7,
      },
      {
        name: "dasdas5",
        age: "45",
        job: "總經理",
        id: 8,
      },
      {
        name: "sssdasss5",
        age: 24,
        job: "直播博主",
        id: 9,
      },
    ],
  });
});

app.listen(5000, "localhost", (err) => {
  if (!err) {
    console.log("服務開啟成功");
  } else console.log(err);
});
