export interface Sponsor {
  name: string;
  link?: string; // if in the partnership contract we have to link to them, we'll fill this field
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export interface ScheduleItem {
  title: string;
  subtitle?: string;
  description: string;
}
