import nodemailer from "nodemailer";

// Initialize nodemailer
const sendMail = async (formData) => {
  const {
    companyName,
    firstName,
    lastName,
    email,
    contactNumber,
    domain,
    language,
    projectType,
    message,
  } = formData;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "testp3848@gmail.com",
      pass: "kemqlmlgcvhsvzht ", // Replace with your Gmail password or use environment variables
    },
  });

  const mailOptions = {
    from: "testp3848@gmail.com",
    to: "ejaz84916@gmail.com",
    subject: "New Contact Form Submission",
    html: `
    <div style=" font-family: Helvetica, sans-serif; margin: 0 auto; text-align: center;  max-width: 80%; " >
        <div style="display: flex;  background-color: rgba(72, 71, 71, 0.642); justify-content: space-between; gap-6%; padding: 0px 20px 0px 10px;" >
            <img src="https://kalakrit.in/wp-content/uploads/2021/12/Untitled_design__2_-removebg-preview-1.png" style="width: 60px; height: 60px;" />
            <h1 style="color: #1e1d1d; font-size: 22px; text-align: center;">ACKNOWLEDGMENT OR RESPONSE EMAIL </h1>
        </div>
      <div style="display: flex; display: flex-wrap; gap: 10px; background-color: #E2F3D8;">
      <div style="width: 45%; padding: 16px;">
          <h1 style="font-weight: 500; font-size:42px; text-align: left; width: 100%;  color: black">Receipt acknowledgement</h1>
      </div>
      <div style="width: 45%; padding: 12px;  text-align: left; font-weight:400; color: black; font-size:medium; font-family: Helvetica, sans-serif;">
      <p style="font-size:bold;"> <span style="font-weight:500; font-size:bold;">Company : </span> ${companyName}</p>
      <p ><span style="font-weight:500;">contactNumber : </span> ${contactNumber}</p>
      <p ><span style="font-weight:500;">domain : </span> ${domain}</p>
      <p > <span style="font-weight:500;">email : </span> ${email}</p>
      <p > <span style="font-weight:500;">firstName : </span> ${firstName}</p>
      <p > <span style="font-weight:500;">lastName : </span> ${lastName}</p>
      <p > <span style="font-weight:500;">language : </span> ${language}</p>
      <p > <span style="font-weight:500;">message : </span> ${message}</p>
      <p > <span style="font-weight:500;">projectType : </span> ${projectType}</p>
    </div>
  </div>
  </div>
        `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendMail;
