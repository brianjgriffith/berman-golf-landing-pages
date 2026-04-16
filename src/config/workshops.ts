export interface Workshop {
  date: string;
  time: string;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    date: "Monday, April 27th",
    time: "3:30 PM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/nPJILC7eSo9NGSSavo0L",
      id: "inline-nPJILC7eSo9NGSSavo0L",
      formName: "04.27.26 Webclass Sign Up Page (TM)",
      formId: "nPJILC7eSo9NGSSavo0L",
    },
  },
];
