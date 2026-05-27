export interface TwoDayEvent {
  name: string;
  slug: string;
  days: Array<{ date: string; time: string }>;
  form: {
    src: string;
    id: string;
    formName: string;
    formId: string;
  };
}

export const twentyMoreYardsEvent: TwoDayEvent = {
  name: "20 More Yards",
  slug: "20-more-yards",
  days: [
    { date: "Wednesday, June 24th", time: "10:00 AM ET" },
    { date: "Thursday, June 25th", time: "10:00 AM ET" },
  ],
  form: {
    src: "https://link.physiofunnels.com/widget/form/W0ydyDyDva54Rx6xRYGx",
    id: "inline-W0ydyDyDva54Rx6xRYGx",
    formName: "(TM) 20 More Yards Opt In",
    formId: "W0ydyDyDva54Rx6xRYGx",
  },
};
