import nodemailer from "nodemailer";
import { EventEmitter } from "node:events";
export const sendEmailService = async ({
  to = "",
  subject = "",
  htmlMessage = "",
  attachments=[]
} = {}) => {
  try {
    // 1 - configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,// alternative of localhost => smtp.gmail.com
      port: process.env.NODEMAILER_PORT, // 465 - 25
      secure: false, //true for 465 , false for other ports
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_APP_PASSWORD,
      },
      service: "gmail",
      tls: {
        rejectUnauthorized: false,
      },
    });

    //2-message configuration
    const info = await transporter.sendMail({
      from: `Hamsolah <${process.env.NODEMAILER_EMAIL}>`,
      to,
      subject,
      html: htmlMessage,
      attachments
    });
    return info;
  } catch (error) {
    console.log("error in sendEmailService", error);
  }
};

export const emitter = new EventEmitter();
// if the function got more than 3 positional arguments to convert the params into an named argumet (object)
/** 
 * @comment you can send object directly as  1 argument instead of spreading the argumnets and then destructure it again to construct the object
 */
emitter.on("SendEmail", (...args)=>{
  const {to,subject,htmlMessage,attachments} = args[0];
  sendEmailService({
    to,
    subject,
    htmlMessage,
    attachments
  })
});
export default emitter;