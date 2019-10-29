require('dotenv').config();

/**
 * servicos de email:
 *
 * amazon ses
 * mailgun
 * sparkpost
 * mandril (mailchimp)
 *
 * mailtrap.io (dev)
 */
export default {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
