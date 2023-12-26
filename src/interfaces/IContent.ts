import { HTMLAttributes } from 'react';

export interface IContentProps extends HTMLAttributes<HTMLElement>{
  title?: string;
  description?: string;
  imageurl?: string;
  to?: string;
}