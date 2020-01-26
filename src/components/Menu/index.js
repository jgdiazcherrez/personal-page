import React, {useState, useEffect, useRef} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Drawer, withStyles} from "@material-ui/core";
import {ChevronLeft} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from 'react-router-dom';
import ConfigRoute from "../../ConfigRoute";
import Typography from "@material-ui/core/Typography";



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




const Index = ({classes, children, title}) => {
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
                <Toolbar style={{display:"inline-block"}}>
                    <IconButton onClick={handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="subtitle1" style={{display:"block", margin: "-35px", textAlign:"center"}} gutterBottom>
                        {title}
                    </Typography>
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
                    <ListItem button component={Link} to={ConfigRoute.root.path}>
                        <ListItemText primary={ConfigRoute.root.text}/>
                    </ListItem>
                    <ListItem button component={Link} to={ConfigRoute.tech.path}>
                        <ListItemText primary={ConfigRoute.tech.text}/>
                    </ListItem>
                    <ListItem button component={Link} to={ConfigRoute.portFolio.path}>
                        <ListItemText primary={ConfigRoute.portFolio.text}/>
                    </ListItem>
                </div>
            </Drawer>
            {children}
        </div>
    );
};

export default withStyles(styles)(Index);