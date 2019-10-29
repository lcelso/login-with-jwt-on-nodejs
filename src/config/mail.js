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
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '799df5dbb933ef',
    pass: '7d72653c4ae515',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
