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
      src: "https://link.physiofunnels.com/widget/form/euXr5v3v3Rw2Z49eXl1K",
      id: "inline-euXr5v3v3Rw2Z49eXl1K",
      formName: "(TM) 05.13.26 Webclass Sign Up Page",
      formId: "euXr5v3v3Rw2Z49eXl1K",
    },
  },
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
