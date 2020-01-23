import React from 'react'
import Menu from '../../components/common/Menu';
import Grid from '@material-ui/core/Grid';
import cssStyle from "./style";




const home = () => {

    return (
        <Menu>
            <div className={"mainContainer"}>
                <Grid container style={cssStyle.homeContainer}>
                    <Grid item xs={12}>
                        <section style={cssStyle.titleContainer}>
                            <h1 style={cssStyle.title}>Jaime Nebot</h1>
                            <img src={"https://static-blogs.mujerhoy.com/horoscopo-para-las-estrellas/wp-content/uploads/sites/30/2018/04/horoscopo-chino-rata.jpg"} style={cssStyle.img}/>
                            <h4>Presidente</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed arcu sodales, porttitor mi vel, volutpat urna. Quisque nisl quam, maximus sit amet nibh vitae, pellentesque semper ipsum. Sed pulvinar placerat semper. Proin vestibulum odio non egestas tempor. Etiam tempor finibus ultricies. Donec lacus diam, imperdiet posuere hendrerit interdum, cursus ut massa. Pellentesque fermentum placerat enim, ut tempus mauris posuere quis. Sed bibendum orci vitae turpis fringilla, elementum sollicitudin elit luctus. Etiam lacus turpis, pellentesque non ligula non, sodales vehicula tellus. Suspendisse consectetur est eu orci rhoncus suscipit. Cras in mattis ex. Cras eget volutpat ante, vel gravida erat. Duis bibendum tempor purus, sed fringilla ipsum tincidunt nec. Etiam pretium est turpis, eu auctor nunc tincidunt sit amet.

                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed cursus, libero id interdum condimentum, magna lacus bibendum elit, sit amet porta dui nibh quis sem. Proin luctus, turpis eget eleifend mollis, tellus arcu pellentesque massa, vel posuere mi turpis ut est. Ut sit amet sem eu dui congue commodo. Cras eu auctor ante, eget semper arcu. Nunc malesuada gravida orci, in sagittis elit facilisis eget. Etiam pellentesque aliquet justo, id luctus lacus pellentesque a. Maecenas et purus sed quam dictum malesuada non quis ligula.

                                Nulla quis risus ac mi tempus auctor. Donec eget dolor justo. Nam velit dolor, sodales id eleifend scelerisque, tristique posuere ante. Aenean ut neque purus. Ut id augue ac felis laoreet finibus. Cras congue, nibh sed bibendum volutpat, tellus sapien lacinia purus, at vehicula sem libero id urna. Ut augue dui, vulputate tincidunt turpis viverra, egestas luctus elit. Duis pretium ex quis elit varius, quis vulputate libero dignissim. Etiam varius dignissim nibh in viverra. Fusce vehicula ex a porta ultricies. Sed vitae magna eu nisi rhoncus fringilla non nec est. Mauris eu nibh nec nulla aliquet commodo.

                                Quisque at hendrerit mauris. Pellentesque viverra dolor a sem auctor faucibus. Donec quis leo purus. Duis accumsan consequat nunc, sit amet maximus mauris convallis in. Praesent vitae lacus nisi. Nulla rutrum malesuada elit, quis vulputate mauris cursus et. Donec scelerisque dui in tortor consectetur gravida. Quisque lacus orci, vehicula a nibh ut, maximus euismod dolor. Proin accumsan erat non est aliquet, at tempor libero ullamcorper. Nam lacinia augue sit amet tortor vulputate rhoncus. Nam tempus auctor dictum. Aenean eu vestibulum purus. Ut et enim eget eros ultricies euismod. Vivamus sed nulla euismod sem fermentum efficitur vel eget elit. Suspendisse faucibus magna leo. Nullam sed ante semper, feugiat elit et, semper ligula.

                                Duis mattis, massa sed scelerisque tempus, dui elit pharetra quam, id volutpat ante risus vel mauris. Pellentesque quis magna vel nunc lacinia euismod. Curabitur blandit, lectus at hendrerit semper, nisi velit dapibus diam, in volutpat nunc augue in dui. Suspendisse ullamcorper elit odio, eu aliquam neque fringilla sed. Curabitur auctor, justo sit amet elementum tempor, nisl turpis interdum neque, quis semper urna risus a quam. Praesent sit amet justo dapibus, aliquam justo sit amet, elementum massa. Cras eget condimentum lacus, quis mollis dolor. Curabitur sodales aliquet pellentesque.
                            </p>
                        </section>
                    </Grid>
                </Grid>
            </div>
        </Menu>
    )
};


export default home;