export interface Workshop {
  date: string;
  time: string;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    date: "Thursday, August 6th",
    time: "11:00 AM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/B1Wr5YjRKaHXzIQt7Ph0",
      id: "inline-B1Wr5YjRKaHXzIQt7Ph0",
      formName: "(TM) 08.06.26 Webclass Sign Up Page",
      formId: "B1Wr5YjRKaHXzIQt7Ph0",
    },
  },
];
