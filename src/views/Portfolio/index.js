import React from 'react'
import Menu from '../../components/Menu';
import Grid from '@material-ui/core/Grid';
import cssStyle from "../Home/style";
import ListPortfolio from '../../components/Portfolio/List';
import Typography from '@material-ui/core/Typography';



const PortFolioIndex = () => {

    return (
        <Menu title={"Experiencia"}>
            <div>
                <Grid container style={cssStyle.homeContainer}>
                    <Grid item xs={12}>
                        <section style={cssStyle.titleContainer} spacing={3}>
                            <br/>
                            <Typography variant="body1" gutterBottom>
                                    Desde hace más de 6 años trabajo en importantes medios de comunicación, esta experiencia me ha servido para profundizar más mis conocimientos con el desarrollo web. Estas son algunas de las empresas en las que he trabajado y en las que he desempeñado rol diferente:
                            </Typography>
                            <ListPortfolio/>
                        </section>
                    </Grid>
                </Grid>
            </div>
        </Menu>
    )
};


export default PortFolioIndex;