require('dotenv').config();
const express=require("express")
const app=express();
const cors=require('cors')
const paymentRoutes = require("./routes/paymentRoutes");
const Port=process.env.PORT
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }));
app.use("/api/payment",paymentRoutes)
app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`)
})
