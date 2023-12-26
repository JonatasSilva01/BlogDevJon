import { MockCardboxs } from '../@types/TypeListCardBox';
import { MockLinks } from "../@types/TypeListHeader";

export const mockLink: MockLinks[] = [
    { 
        titleLink: 'Home',
        backgroundImageUrl: 'https://wallup.net/wp-content/uploads/2016/01/58559-universe-galaxy-space-stars-planet-space_art.jpg',
        description: 'Bem vindo grande visitante!!',
        link:'/',
    },
    { 
        titleLink: 'Quem sou eu',
        backgroundImageUrl: 'https://th.bing.com/th/id/R.3a64ebc364d1c2e34ad5bc86393a48ce?rik=Hk7q9dsDLwnonQ&pid=ImgRaw&r=0',
        description: 'Sou desenvolvedor FullStack',
        link:'/im',
    },
    { 
        titleLink: 'Projetos',
        backgroundImageUrl: 'https://th.bing.com/th/id/R.161db819d8f5a50b3a1841e80ff47723?rik=si3vy9nrZM9jhw&pid=ImgRaw&r=0',
        description: 'Acesse meus projetos aqui mesmo!!',
        link: '/project'
    },
    { 
        titleLink: 'Linguagens',
        backgroundImageUrl: 'https://wallpaperaccess.com/full/1325710.jpg',
        description: 'Minhas stacks de trabalho',
        link:'/languages',
    },
    { 
        titleLink: 'Contato',
        backgroundImageUrl: 'https://wallpapercave.com/wp/jxfSjg8.jpg',
        description: 'Entre em contato comigo!',
        link:'/contact',
    }
];


export const mockCardbox: MockCardboxs[] = [
    {
        //title: 'React',
        //description: 'Venha ver meus projetos em React',
        imageurl: 'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282566/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png',
        isImage: "true",
        to: 'https://www.google.com',
    },
    {
        //title: 'C#/.NET',
        //description: 'Meus conhecimentos em OOP, Architure!',
        imageurl: 'https://th.bing.com/th/id/R.4c407f10e3130ffe3ec0f88d3c6285d6?rik=wrBzzGbmyqFPzQ&riu=http%3a%2f%2fbugnetproject.com%2fwp-content%2fuploads%2f2018%2f04%2fnet-framework-2-1.jpg&ehk=AwbajTRtBQ30FGkL19FxDn5OOHQ%2fpwUl%2boZtEdwPXjY%3d&risl=&pid=ImgRaw&r=0',
        isImage: "true",
        to: '/im',
    },
    {
        //title: 'Typescript/Javascript',
        //description: 'Meus conhecimentos em typescript, javascript e Node.js',
        imageurl: 'https://res.cloudinary.com/de4rvmslk/image/upload/f_auto,q_auto/Javascript_vs_typescript_key_differences.png',
        isImage: "true",
        to: '/contact',
    },
    // {
    //     title: 'Docker/Azure/AWS',
    //     description: 'Conhecimentos principais em Devops e algumas coisas em cloud',
    //     imageurl: '#',
    //     isImage: "false",
    //     to: '#',
    // },
    // {
    //     title: 'Mordenidade a cima do padrão!',
    //     description: 'Conheça minhas principais tecnologias de estilo com CSS & JavaScript/Typescript',
    //     imageurl: '#',
    //     isImage: "false",
    //     to: '#',
    // },

]