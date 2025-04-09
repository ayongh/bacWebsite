import { label, line } from "framer-motion/client";
import { latestData } from "../Data/latestNewsData";

export const routeList = [
  { label: "Home", link: "/",hasChildren:false,children:[]},
  { label: "Event", link: "/event", hasChildren:true, children: latestData?.map((val)=>{return {label:val?.menuTitle, link:`/event/${val?.id}/detail`}}) },
  { label: "Teams", link: "/teams",hasChildren:false,children:[] },
  { label: "History", link: "/history",hasChildren:false ,children:[]},
];
