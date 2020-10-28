// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const nodemailer = require("nodemailer");

//実際の機能
exports.sendMail = functions.https.onCall(async function(text, context) {
  const gmailEmail = 'so1rou.k@gmail.com';
  const gmailPassword = 'K.so1rou';
  const adminEmail = 'peniskokoro@gmail.com';

  //SMTPサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
//送信元、送信先、題名、内容を１つの変数にまとめる
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: text
  };

//nodemailerのsendMail機能で、メールを送信する。
//変数は送信元などをまとめたもの
  try {
    await mailTransport.sendMail(adminMail);
   } catch (e) {
    return e.message;
   }
});
