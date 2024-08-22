import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const CardPort = ({img,Live,client,sever,alt,pName,description}) => {
   
    return (
        <Card className="w-full shadow-lg">
        <CardHeader floated={false}  >
          <div id="project" className={` bg-cover bg-top  hover:bg-bottom  duration-[8s] w-full h-64 rounded-t-md bg-[url("${img}")]`} >
           <img src={img} alt="" />
          </div>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
             {pName}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
            </Typography>
          </div>
          <Typography color="gray">
             {description}
          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <Tooltip content="GitHub-Client">
            <a href={client} target="_blank" className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaGithub />
              </a>
            </Tooltip>
            <Tooltip content="GitHub-Server">
              <a href={sever} target="_blank"   className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <FaGitlab />
              </a>
            </Tooltip>
            <Tooltip content="Live">
              <a href={Live} target="_blak" className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <TbWorld />
              </a>
            </Tooltip>
             
          </div>
        </CardBody>
        <CardFooter className="pt-3">
          <a href={Live} target="_blank"> 
          <Button size="lg" fullWidth={true}>
            Visit Now
          </Button>
          </a>
        </CardFooter>
      </Card>
    );
};

export default CardPort;