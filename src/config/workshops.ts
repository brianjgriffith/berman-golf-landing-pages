export interface Workshop {
  date: string;
  time: string;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    date: "Thursday, July 23rd",
    time: "11:00 AM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/lm0WRYRo3j4eBJagMcgh",
      id: "inline-lm0WRYRo3j4eBJagMcgh",
      formName: "(TM) 07.23.26 Webclass Sign Up Page",
      formId: "lm0WRYRo3j4eBJagMcgh",
    },
  },
];
