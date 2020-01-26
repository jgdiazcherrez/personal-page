import React from 'react'
import Menu from '../../components/Menu';
import Grid from '@material-ui/core/Grid';
import cssStyle from "../Home/style";
import TechSlide from '../../components/Tech/Slide';
import Typography from '@material-ui/core/Typography';






const TechIndex = () => {

    return (
        <Menu title={"Tecnologías"}>
            <div>
                <Grid container style={cssStyle.homeContainer}>
                    <Grid item xs={12}>
                        <section style={cssStyle.titleContainer} spacing={3}>
                            <br/>
                            <Typography variant="body1" gutterBottom>
                               Las tecnologías hoy en día te obligan estar al día, en esta profesión la renovación debe ser constante, estas son algunas de las tecnologías más relevantes con las que he trabajado a lo largo de mi carrera profesional:
                            </Typography>
                            <TechSlide/>
                        </section>
                    </Grid>
                </Grid>
            </div>
        </Menu>
    )
};


export default TechIndex;