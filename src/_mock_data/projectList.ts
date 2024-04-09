interface ProjectProps {
    id: string;
  title: string;
  imgSrc: string[];
  desc: string;
  date: string;
  client?: string;
  type: string;
}

 export const projectList: ProjectProps[] = [
  {
    id: "dasdwe23",
    title: "e-CAP-sule: CAPSTONE PROJECT MANAGEMENT APPLICATION",
    imgSrc: ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Finformation-system&psig=AOvVaw2LUKXkTZ2Umv7P2Uj7rqOh&ust=1712708958443000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKD4qJrws4UDFQAAAAAdAAAAABAE"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "April 10, 2023",
    client: "College of Information Computing Science of Marinduque State College",
    type: "monitoring"
  },
  {
    id: "dwqe213",
    title: "SGLG - Audit Tracker",
    imgSrc:["https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Ftags%2Finformation-system&psig=AOvVaw2LUKXkTZ2Umv7P2Uj7rqOh&ust=1712708958443000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKD4qJrws4UDFQAAAAAdAAAAABAJ"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "Febraury 13, 2024",
    client: "DILG: Provincial Office",
    type: "monitoring"
  },
  {
    id: "dasdq2",
    title: "Form Builder",
    imgSrc: [],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "March 10, 2023",
    client: "Personal Project",
    type: ""
  },
  
];
