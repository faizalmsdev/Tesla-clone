    import React from 'react'
    import styled from "styled-components";
    import Section from './Section';
    import '../App.css';
    import models from './images/model-s.jpg';
    import modely from './images/model-y.jpg';
    import model3 from './images/model-3.jpg';
    import modelx from './images/model-x.jpg';
    import solarPanel from './images/solar-panel.jpg';
    import solarRoofs from './images/solar-roof.jpg';
    import Accessories from './images/accessories.jpg';

    function Home() {
    return (
        <Container>
            <Section 
                title="Model s"
                description="Order online for Touchless Delivery"
                backgroundImg={models}
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description="Order online for Touchless Delivery"
                backgroundImg={modely}
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order online for Touchless Delivery"
                backgroundImg={model3}
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                description="Order online for Touchless Delivery"
                backgroundImg={modelx}
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title='Lowest Cost Solar Panels in America'
                description= "Money-back guarantee"
                backgroundImg= {solarPanel}
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section 
                title='Solar for New Roofs'
                description= "Solar Roof Less Than a New Roof Plus Solar Panels"
                backgroundImg= {solarRoofs}
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section 
                title='Accessories'
                description= ""
                backgroundImg= {Accessories}
                leftBtnText="Shop now"
            />
        </Container>
    )
    }

    export default Home

    const Container = styled.div`
        height:100vh;
        z-index:10;
    `
