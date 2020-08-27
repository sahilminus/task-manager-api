const sgMail=require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'sahilmishra951@gmail.com',
        subject:'Welcome, Thanks for Joining!',
        text:`Welcome to the Task-App, ${name} Let's get along with the App `
    })
}

const sendCancellationEmail=(email,name)=>{
   sgMail.send({
    to:email,
    from:'sahilmishra951@gmail.com',
    subject:'Sorry to see you go, Goodbye!',
    text:`Goodbye ${name}, Hope to see you soon back. You are always welcome. `
   })

}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}