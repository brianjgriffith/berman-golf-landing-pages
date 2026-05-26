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
