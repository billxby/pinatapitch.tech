export interface Sponsor {
  name: string;
  link?: string; // if in the partnership contract we have to link to them, we'll fill this field
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export interface Mentor {
  name: string;
  link?: string; // if the mentor wants us to link to their linkedin or another link we'll fill this field
  biography: string;
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
