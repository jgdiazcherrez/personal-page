
import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {useSelector, useDispatch} from 'react-redux';
import {fetchListAction} from '../../actions/portfolio'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';



const styleContainerPorfolio = {
    display: "inline-block",
    flexDirection: "row",
    margin: "29px",
    cursor: "pointer"
};
const imgStyle = {
    width: "330px",
    margin: "auto",
    height: "293px",
    border: "1px solid black",
    borderRadius: "5px"
};

const fadeOut = {
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s linear 300ms, opacity 300ms"
};

const fadeIn = {
    visibility: "hidden",
    opacity: 1,
    transition: "visibility 0s linear 0s, opacity 2s"
};

const Anchor = styled.a`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
         color: black
    }
   
`;

const List =  () => {
        const {list, load} = useSelector ( state => state.portfolio);
        const dispatch = useDispatch();
        useEffect(() => {
                //component Did mount
                dispatch(fetchListAction())
        }, []);


        return (

            <div className={!load ? fadeOut : fadeIn}>

                    { load &&  (() => {

                            return list.map((elem, index) => (

                                    <Grid item  style={styleContainerPorfolio} key={index} className={ ".m-fadeIn"}>
                                        <article>
                                            <div>
                                                <LazyLoadImage
                                                    data-id={index}
                                                    alt={elem.name}
                                                    style={imgStyle}
                                                    src={elem.image}
                                                     />
                                            </div>
                                            <div>
                                                <Typography variant="h5" gutterBottom>{elem.name}</Typography>
                                                <Typography variant="h6" gutterBottom>{elem.position}</Typography>
                                                <Typography variant="caption" gutterBottom>{elem.shortDescription}</Typography>
                                            </div>
                                            {/*<Anchor href={elem.url} alt={elem.name} target={"_blank"}>*/}
                                            {/*</Anchor>*/}
                                        </article>
                                    </Grid>
                            ))
                        })()
                    }
                </div>

        )
};

export default List;