export interface Category {
  id: string;
  name: string;
}

export interface VideoContent {
  title: string;
  file: string; // PATH DO ARQUIVO EM DISCO
  description: string;
  category: Category[];
  likes: number;
  unlike: number;
  keywords: string[];
  slug: string;
}

export interface Comment {
  id: string;
  userId: string;
  parent?: string;
  content: string;
}
