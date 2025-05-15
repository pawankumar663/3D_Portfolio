const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Company Projects" },
  { value: 10, suffix: "+", label: "Personal Projects" },
];

const logoIconsList = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-7.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-8.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-9.png`,
  },
  {
    imgPath:`${import.meta.env.BASE_URL}images/logos/company-logo-10.png`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/company-logo-11.png`,
  },
];

const abilities = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/seo.png`,
    title: "Quality Focus",
    desc: "Committed to delivering high-caliber work with precision in every aspect.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/chat.png`,
    title: "Responsive Design Excellence",
    desc: "Creating seamless user experiences across devices, from desktop to mobile.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
  {
    imgPath:`${import.meta.env.BASE_URL}images/time.png`,
    title: "Cross-Platform Development",
    desc: "Developing for both web and mobile with consistent design and functionality.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/time.png`,
    title: "User-Centered Approach",
    desc: "Designing interfaces with usability and accessibility in mind.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.png`,
  },
  {
    name: "React Native Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react-native.png`,
  },
  {
    name: "TailwindCSS Developer",
    imgPath: `${import.meta.env.BASE_URL}images/logos/tailwindcss.svg`,
  },
  {
    name: "Material UI",
    imgPath: `${import.meta.env.BASE_URL}images/logos/material-ui.png`,
  },
  {
    name: "Three.js",
    imgPath: `${import.meta.env.BASE_URL}images/logos/three.png`,
  },
  {
    name: "Git Version control",
    imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Mobile App Developer",
    modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed1.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Backend Developer",
  //   modelPath: "/models/node-transformed.glb",
  //   scale: 5,
  //   rotation: [0, -Math.PI / 2, 0],
  // },
  {
    name: "Interactive Developer",
    modelPath: `${import.meta.env.BASE_URL}models/three.js-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Version control",
    modelPath: `${import.meta.env.BASE_URL}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
   {
    id:1,
    review:
      "Yes It Labs offered a collaborative workplace where I engaged with multiple teams and clients. I learned how to manage projects professionally through clear emails and detailed client reports.",
    imgPath: `${import.meta.env.BASE_URL}images/exp0.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo0.png`,
    title: "React Native Developer",
    star:3,
    responsibilities: [
      "Specialized in building and deploying mobile apps using React Native.",
      "Developed intuitive and high-performance applications for Android and iOS.",
      "Maintained compatibility and smooth performance across a wide range of devices.",
      "Successfully launched applications on both Google Play Store and Apple App Store.",
    ],
  },
  {
     id:2,
    review:
      "Yes It Labs offered a collaborative workplace where I engaged with multiple teams and clients. I learned how to manage projects professionally through clear emails and detailed client reports.",
    imgPath: `${import.meta.env.BASE_URL}images/exp1.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo1.png`,
    title: "React Native Developer",
    star:3,
    responsibilities: [
      "Led cross-platform mobile app development with React Native for iOS and Android.",
      "Crafted intuitive UI designs and solid app architecture.",
      "Built custom UI components for better user interaction.",
      "Maintained high code quality and application stability.",
      "Deployed apps on Android Play Store and Apple App Store."
    ],
  },
  {
     id:3,
    review:
      "Collaborating on Total synergy concept with an excellent team in a positive workplace allowed me to work independently and bring my ideas to life. This role significantly contributed to my skill development and overall growth.",
    imgPath: `${import.meta.env.BASE_URL}images/exp2.png`,
    logoPath: `${import.meta.env.BASE_URL}images/logo2.png`,
    star:5,
    title: "React Native Developer",
    responsibilities: [
      "Architected websites and crafted intuitive UI designs.",
      "Delivered cross-platform mobile applications using React Native.",
      "Developed custom UI components for improved UX.",
      "Ensured code quality with reusable and efficient practices.",
    ],
  },
  {
     id:4,
    review:
      "Sigroo provided a fantastic environment for learning and growth, where I was free to express my ideas and play an active role in project development.",
    imgPath: `${import.meta.env.BASE_URL}images/exp3.png`,
    star:5,
    logoPath: `${import.meta.env.BASE_URL}images/logo3.png`,
    title: "Software Developer",
    
    responsibilities: [
      "Developed dynamic digital solutions including websites, web applications, and mobile applications.",
      "Specialized in React.js for building and testing scalable, high-performance web applications.",
      "Designed, developed, and tested cross-platform mobile applications using React Native.",
      "Ensured application quality through rigorous testing processes for both web and mobile platforms.",
      "Contributed to modern, user-centric UI/UX designs by leveraging the latest web design tools.",
      "Maintained up-to-date knowledge of industry standards and trends to implement innovative solutions.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${import.meta.env.BASE_URL}images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${import.meta.env.BASE_URL}images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${import.meta.env.BASE_URL}images/logo3.png`,
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: `${import.meta.env.BASE_URL}images/client1.png`,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: `${import.meta.env.BASE_URL}images/client3.png`,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: `${import.meta.env.BASE_URL}images/client2.png`,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: `${import.meta.env.BASE_URL}images/client5.png`,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: `${import.meta.env.BASE_URL}images/client4.png`,
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: `${import.meta.env.BASE_URL}images/client6.png`,
  },
];

const socialImgs = [
  {
    name: "x",
    imgPath:`${import.meta.env.BASE_URL}images/x.png`,
    link: "https://x.com/pawankumar663",
  },
  {
    name: "linkedin",
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
    link: "https://www.linkedin.com/in/pawan-kumar-91b748155/",
  },
  {
    name: "Github",
    imgPath: `${import.meta.env.BASE_URL}images/github.png`,
    link: "https://github.com/pawankumar663",
  },
  {
    name: "indeed",
    imgPath: `${import.meta.env.BASE_URL}images/indeed.png`,
    link: "https://profile.indeed.com/p/pawank-lwp74wt",
  },
  {
    name: "Whatsapp",
    imgPath: `${import.meta.env.BASE_URL}images/whatsapp.png`,
    link: "https://wa.me/919729401903?text=Hi",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
