export class Feedback {
  firstName: string;
  lastname: string;
  telnum: number;
  email: string;
  agree: boolean;
  contacttype: string;
  message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];