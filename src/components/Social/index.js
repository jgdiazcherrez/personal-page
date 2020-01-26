import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaWordpress } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <>
            <ListItem button component="a" href={"https://github.com/jgdiazcherrez"} target={"_blank"}>
                <ListItemIcon>< FaGithub style={{color: "#E7DFDD", fontSize: "40px"}}/></ListItemIcon>
            </ListItem>
            <ListItem button component="a" href={"https://twitter.es/jgdiazcherrez"} target={"_blank"}>
                <ListItemIcon>< FaTwitter style={{color: "#E7DFDD" , fontSize: "40px"}}/></ListItemIcon>
            </ListItem>
            <ListItem button component="a" href={"https://linkedin.com/jgdiazcherrez"} target={"_blank"}>
                <ListItemIcon>< FaLinkedin style={{color: "#E7DFDD" , fontSize: "40px"}}/></ListItemIcon>
            </ListItem>
            <ListItem button component="a" href={"https://jgdiazcherrez.wordpress.com"} target={"_blank"}>
                <ListItemIcon>< FaWordpress style={{color: "#E7DFDD",  fontSize: "40px"}}/></ListItemIcon>
            </ListItem>
        </>);
}
export default SocialMedia;