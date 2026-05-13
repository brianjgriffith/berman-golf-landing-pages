export interface Workshop {
  date: string;
  time: string;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    date: "Thursday, May 28th",
    time: "12:00 PM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/OWN7zP8uFeMGbkz2PS3G",
      id: "inline-OWN7zP8uFeMGbkz2PS3G",
      formName: "(TM) 05.28.26 Webclass Sign Up Page",
      formId: "OWN7zP8uFeMGbkz2PS3G",
    },
  },
];
