//import React from 'react'

import { mens_t_shirt } from "../../../data/mens_t_shirt"
import MainCarousel from "../../components/HomeCarousel/MainCarousel"
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel"

const Home = () => {
    return (
        <div>
            <MainCarousel />

            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_t_shirt} sectionName={"Men's T-Shirt"}/>
                <HomeSectionCarousel data={mens_t_shirt}/>
                <HomeSectionCarousel data={mens_t_shirt}/>
                
            </div>

        </div>
    )
}

export default Home
