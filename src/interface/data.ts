export interface ProjectItemProps {
  id: string;
  title: string;
  imgSrc: string[];
  desc: string;
  date: string;
  client?: string;
  type: string;
  setOnView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<string | null>>;
  projectID: string | null;
}

export interface ProjectDataProps {
  id: string | null;
}

export interface TechStackProps {
  id: string;
  name: string;
  imgSrc: string;
  type: "front" | "back" | "full" | "other" | "lib" | "data";
}

export interface ImageProps {
  src: string;
  onLoad: boolean;
  className?: string;
}
