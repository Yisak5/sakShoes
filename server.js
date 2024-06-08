const express = require('express');
const mongoose = require('mongoose');
const shoesRoutes = require('./routes/shoesRoutes');

const app = express()
const port =  process.env.PORT || 5000;

// DB 연결
mongoose
  .connect(
    "mongodb+srv://issac1162:Ww1MaImG9ia6vnDQ@cluster0.lgd09mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// 미들웨어 설정
app.use(express.json());

// 라우트 설정
app.use('/api/shoes', shoesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})