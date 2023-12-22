import { mockLink } from "../mock/mock";

export function ImagesUrl() {  
    for (const value of mockLink) {
      if (window.location.pathname === value.link) {
        return value.backgroundImageUrl;
      }
    }

    return ''; 
}

export function DescriptionFunction() {
  for (const value of mockLink) {
    if (window.location.pathname === value.link) {
      return value.description;
    }
  }

  return 'Bem vindos';
}