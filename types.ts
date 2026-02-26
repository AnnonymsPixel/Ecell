
export interface EventData {
  id: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  socials: {
    linkedin: string;
    instagram: string;
    email: string;
  };
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export type GalleryCategory = 'All' | 'Events' | 'Workshops' | 'Team';
