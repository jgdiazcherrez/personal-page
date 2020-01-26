
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTechListAction} from "../../actions/tech";
import Typography from "@material-ui/core/Typography";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Grid from "@material-ui/core/Grid";

// One item component
// selected prop will be passed

const ChildrenMenuItem = ({srcImage, url}) =>{

    if(!url)
        return <img src={srcImage}/>;
    return  <a href={url} target={"_blank"}> <img src={srcImage}/>  </a>;
}

const MenuItem = ({srcImage, selected, url}) => {

    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >
       <ChildrenMenuItem srcImage={srcImage} url={url}/>
          </div>;
};

// All items component
// Important! add unique key
const MenuScroll = (list, selected) => {
    return list.map((el, index) => {
        const {image, url} = el;
        return <MenuItem  key={index} srcImage={image} url={url} selected={selected}/>
    });
};


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


const TechSlide = () => {
    const {list, load} = useSelector ( state => state.tech);
        const dispatch = useDispatch();
        useEffect(() => {
            //component Did mount
            dispatch(fetchTechListAction())
        }, []);

    return (
        <div>
        { load && (() => {

                    return list.map((elem, index) => {
                        const selected = 1;
                        const totalItemMenu = MenuScroll(elem.items, selected);

                        return <section style={{margin: "25px"}} key={index} className={"sectionjony"}>
                            <Typography variant="h6" gutterBottom> {elem.spanishText} </Typography>
                            <ScrollMenu
                                data={totalItemMenu}
                                arrowLeft={ArrowLeft}
                                hideSingleArrow={true}
                                wheel={false}
                                arrowRight={ArrowRight}
                                selected={selected}
                            />
                        </section>
                    })

                })()
        }
        </div>
    )

};

export default TechSlide;