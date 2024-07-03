export interface CategoryCreateDTO {
    title: string;
}

export interface CategoryUpdateDTO extends CategoryCreateDTO {}

export interface Category extends CategoryCreateDTO {
  id: string;
}