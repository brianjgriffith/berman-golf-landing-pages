export interface Workshop {
  date: string;
  time: string;
  form: { src: string; id: string; formName: string; formId: string };
}

export const workshops: Workshop[] = [
  {
    date: "Tuesday, March 31st",
    time: "3:30 PM ET",
    form: {
      src: "https://link.physiofunnels.com/widget/form/UPUvZMPRsNskuht7Z7PK",
      id: "inline-UPUvZMPRsNskuht7Z7PK",
      formName: "03.31.26 Webclass Sign Up Page (TM)",
      formId: "UPUvZMPRsNskuht7Z7PK",
    },
  },
];
