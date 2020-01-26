import React from 'react'
import Menu from '../../components/Menu';
import Grid from '@material-ui/core/Grid';
import cssStyle from "./style";
import Typography from '@material-ui/core/Typography';
import SocialMedia from '../../components/Social';


const home = () => {
    return (
        <Menu title={"Acerca de mí"}>
            <div>
                <Grid container style={cssStyle.homeContainer}>
                    <Grid item xs={12}>
                        <section style={cssStyle.titleContainer} spacing={3}>
                            <Typography component="h1" variant="h2" gutterBottom style={cssStyle.title}>Jonathan Díaz</Typography>
                            <img src={"/img/profile.jpeg"} style={cssStyle.img}/>
                            <Typography variant="h6" gutterBottom> Full Stack Engineer </Typography>
                            <div style={cssStyle.socialContainer}>
                                <SocialMedia/>
                            </div>
                            <Typography variant="body1" gutterBottom>
                                    Soy un apasionado de la ingeniería de software y de todo lo que este relacionado con el mismo. Me considero una persona muy inquieta que intenta estar al día en este mundo tecnológico tan complicado que requiere de una renovación constante. Cada experiencia me ha servido para profundizar y adquirir más conocimientos relacionados con la ingeniería de software, es por ello que disfruto creando y manteniendo software.
                            </Typography>
                        </section>
                    </Grid>
                </Grid>
            </div>
        </Menu>
    )
};


export default home;