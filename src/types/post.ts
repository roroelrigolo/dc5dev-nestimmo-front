export interface PostCreateDTO {
    title: string;
    description: string;
    category: number;
}

export interface PostUpdateDTO extends PostCreateDTO {}

export interface Post extends PostCreateDTO {
  id: string;
}