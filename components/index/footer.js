export default function Footer(){

    return(
        <>
            {/* LINKS FOOTER */}
            <footer style={{position:'fixed', bottom:'0', width:'100%', textAlign:'center', zIndex:'500'}}>
                <a style={{textDecoration:'none', zIndex:'500'}} target="_blank" href="https://github.com/MoggStephen/nextjs_react-interactive-rating-component">
                    <img src="./footer/github-icon.svg" alt="Github icon" width="25"/>
                </a>
                <a style={{textDecoration:'none', zIndex:'500', margin: '0 5px 0 5px'}} target="_blank" href="https://www.frontendmentor.io/profile/MoggStephen">
                    <img src="./footer/fem-icon.svg" alt="Frontend Master icon" width="25"/>
                </a>
                <a style={{textDecoration:'none', zIndex:'500'}}  target="_blank" href="https://www.linkedin.com/in/stephen-mogg-9467041bb/">
                    <img src="./footer/linkedin-icon.svg" alt="LinkedIn icon" width="25"/>
                </a>
            </footer> 
        </>
    );
}