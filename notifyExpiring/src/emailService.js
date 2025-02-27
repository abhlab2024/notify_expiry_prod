export default {
    sendEmail(emailList, template, product) {
      const message = template.replace('{{name}}', product.name).replace('{{expiry}}', product.expiry);
      console.log(`Sending email to: ${emailList}`);
      console.log(`Message: ${message}`);
      // Here you can integrate an actual email API like SendGrid, Nodemailer, etc.
    },
  };
  