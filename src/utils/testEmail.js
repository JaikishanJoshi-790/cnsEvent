import emailjs from '@emailjs/browser';

const testEmailCredentials = async () => {
  try {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    
    const result = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: "Test User",
        message: "This is a test email",
        to_name: "Admin"
      }
    );
    
    console.log('Test successful!', result);
    return true;
  } catch (error) {
    console.error('Test failed:', error);
    return false;
  }
};

export default testEmailCredentials;