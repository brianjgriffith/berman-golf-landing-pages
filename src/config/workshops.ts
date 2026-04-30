export interface Workshop {
  date: string;
  time: string;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    date: "Wednesday, May 13th",
    time: "10:00 AM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/nPJILC7eSo9NGSSavo0L",
      id: "inline-nPJILC7eSo9NGSSavo0L",
      formName: "04.27.26 Webclass Sign Up Page (TM)",
      formId: "nPJILC7eSo9NGSSavo0L",
    },
  },
  {
    date: "Thursday, May 28th",
    time: "12:00 PM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/nPJILC7eSo9NGSSavo0L",
      id: "inline-nPJILC7eSo9NGSSavo0L",
      formName: "04.27.26 Webclass Sign Up Page (TM)",
      formId: "nPJILC7eSo9NGSSavo0L",
    },
  },
];
