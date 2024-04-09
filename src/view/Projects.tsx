import React, { useState } from "react";

import { projectList } from "../_mock_data/projectList";

import ProjectItem from "../components/item/ProjectItem";
import LayoutModal from "../components/ui/LayoutModal";
import ViewProject from "./ViewProject";

const Projects = () => {
  const [onView, setOnView] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  console.log(onView);

  return (
    <div
      className={`d w-screen h-screen flex justify-center items-center relative flex-col ${
        onView ? "overflow-hidden" : ""
      }`}
    >
      <div className=" w-full h-auto p-4">
        <p className=" font-custom1 text-2xl font-medium ml-32">Projects</p>
      </div>
      <div className=" w-4/5 h-4/5 grid grid-cols-1 grid-rows-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {projectList.map((item) => (
          <ProjectItem
            projectID={selectedProject}
            setSelectedProject={setSelectedProject}
            setOnView={setOnView}
            {...item}
          />
        ))}
      </div>

      {onView ? (
        <LayoutModal
          setSelectedProject={setSelectedProject}
          setOnView={setOnView}
          children={<ViewProject id={selectedProject} />}
        />
      ) : null}
    </div>
  );
};

export default Projects;
