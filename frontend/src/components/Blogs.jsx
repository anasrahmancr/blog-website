import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
export function Blogs() {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        axios.get("http://localhost:5000/blog")
        .then((response) => {
          setBlogs(response.data.blogs[0]);
          console.log(blogs)
        });
    }, []);

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        {blogs[0].map((data, index) => (
          <Card
            key={index}
            className="w-full max-w-[48rem] flex-row ml-10 mr-10"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={data.image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="pl-4 pr-4">
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {data.title}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                {data.description}
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}
