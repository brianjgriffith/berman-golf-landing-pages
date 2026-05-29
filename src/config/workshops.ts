export interface Workshop {
  date: string;
  time: string;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    date: "Thursday, June 11th",
    time: "10:00 AM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/dDhVJk8t0QJNzPVfkLKf",
      id: "inline-dDhVJk8t0QJNzPVfkLKf",
      formName: "(TM) 06.11.26 Webclass Sign Up Page",
      formId: "dDhVJk8t0QJNzPVfkLKf",
    },
  },
];
