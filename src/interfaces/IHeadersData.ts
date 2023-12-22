import { MockLinks } from "../@types/TypeListHeader";

export interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    titlelink?: string;
    listlink?: MockLinks[];
    darkcolor?: string;
    secondarycolor?: string;
    lightcolor?: string;
    textcolor?: string;
    bordercolor?: string;
    isimage?: boolean | string;
    backgroundurl?: string;
    image?: string;
    description?: string;
}