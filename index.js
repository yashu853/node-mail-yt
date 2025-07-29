const nodemailer = require('nodemailer');

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  let info = await transporter.sendMail({
    from: '"Yashaswini 👩‍💻" <test@example.com>',
    to: 'test@receiver.com',
    subject: 'Test Email',
    text: 'Hello from Ethereal!',
    html: '<b>Hello from Ethereal!</b>'
  });

  console.log('Login:', testAccount.user);
console.log('Password:', testAccount.pass);
console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
