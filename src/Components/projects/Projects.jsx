import styles from "./projects.module.scss";
import { projects } from "../../constants/constants";
import computerIcon from "../../assets/project.svg";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(currentProject);
  return (
    <div className="m-20 flex">
      {/* left */}
      <div className="w-[50%] hidden md:block">
        <div className="pt-20 pr-32 flex justify-center items-center h-full w-full">
          <img
            src={computerIcon}
            alt="Computer illustrations by Storyset"
            className=" object-contain w-full h-full"
          />
        </div>
      </div>

      {/* right */}
      <div className="md:w-[50%] w-[100%] flex flex-col justify-center md:pr-10">
        <h1 className="md:text-[60px] text-[40px] font-semibold">Projects</h1>
        <div className=" border-b-2 mb-1" />
        {projects.map((project, index) => (
          <div key={index}>
            <div className=" border-b-2" />
            <div className="flex flex-row items-center justify-between cursor-pointer">
              <div
                onClick={() => {
                  setCurrentProject(project);
                  handleOpen();
                }}
                className={`py-3 md:text-[30px] text-[20px] ${styles.hoverEffect}`}
              >
                {project.name}
              </div>
              <div className="md:text-[15px] text-[13px]">{project.type}</div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h4" component="h2">
            {currentProject?.name}
          </Typography>
          <Typography sx={{ mt: 2 }}>Text in a modal</Typography>
        </Box>
      </Modal>
    </div>
  );
};
