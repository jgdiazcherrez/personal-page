import React, {useState, useEffect, useRef} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Drawer, withStyles} from "@material-ui/core";
import {ChevronLeft} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaWordpress } from 'react-icons/fa';
import ConfigRoute from "../../ConfigRoute";



const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px'
    }
};




const Menu = ({classes, children}) => {
    let  [drawerIsOpen, setDrawerIsOpen] = useState(false);

    //handler
    const handleDrawerOpen = () => setDrawerIsOpen(true);
    const handleDrawerClose = () => setDrawerIsOpen(false);

    const ref = useRef(null);
    const handleOutSideEventClick = (event) => (ref.current && !ref.current.contains(event.target)) ? setDrawerIsOpen(false): null;




    //component didmount
    useEffect(() => {
        document.addEventListener('click', handleOutSideEventClick, true);
        return () => { //componentWillMount
            document.removeEventListener('click', handleOutSideEventClick, true);
        };
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                ref={ref}
                variant="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                open={drawerIsOpen}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <div className={classes.drawerInner}>
                    <ListItem button component={Link} to={ConfigRoute.root}>
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button component={Link} to={ConfigRoute.aboutMe}>
                        <ListItemText primary={"About me"}/>
                    </ListItem>
                    <ListItem button component={Link} to={ConfigRoute.portFolio}>
                        <ListItemText primary={"PortFolio"}/>
                    </ListItem>
                    <ListItem button component="a" href={"https://github.com/jgdiazcherrez"} target={"_blank"}>
                        <ListItemIcon>< FaGithub style={{color: "black"}}/></ListItemIcon>
                    </ListItem>
                    <ListItem button component="a" href={"https://twitter.es/jgdiazcherrez"} target={"_blank"}>
                        <ListItemIcon>< FaTwitter style={{color: "black"}}/></ListItemIcon>
                    </ListItem>
                    <ListItem button component="a" href={"https://linkedin.com/jgdiazcherrez"} target={"_blank"}>
                        <ListItemIcon>< FaLinkedin style={{color: "black"}}/></ListItemIcon>
                    </ListItem>
                </div>
            </Drawer>
            {children}
        </div>
    );
};

export default withStyles(styles)(Menu);