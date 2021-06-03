import Socialmedia from "@/types/Socialmedia"


const socialMediaData: Socialmedia[] = [
    {
        id: '1',
        name: 'facebook',
        img_src: "https://cdn.mcdonalds.pl/public/build/images/header/fb.f874a86e78059907c61f7b8a2e802512.svg",
        url: "https://www.facebook.com/powerty2",
    },
    {
        id: '2',
        name: 'linkedin',
        img_src: "https://cdn.mcdonalds.pl/public/build/images/header/linkedin.078e5cb8b5615117f968c82e6feb8105.svg",
        url: "https://www.linkedin.com/in/jakub-kurdziel-449714205/",
    },
    {
        id: '3',
        name: 'messenger',
        img_src: require('@/assets/icons/messenger.svg'),
        url: "https://www.messenger.com/t/100005543894347",
    },
    {
        id: '4',
        name: 'instagram',
        img_src: "https://cdn.mcdonalds.pl/public/build/images/header/insta.8ee927e13517f2f8cf085d622ab54400.svg",
        url: "https://www.instagram.com/__kurdziel/?hl=pl",
    },
]

export default socialMediaData