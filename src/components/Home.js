import React from 'react'
import BlogCarousel from './BlogCarousel'
import Search from './Search'
import Section from './Section'

const Home = () => (
        <div>
            Home page
            <Section>
                <BlogCarousel />
            </Section>
            <Section>
                <Search />
            </Section>
        </div>
)

export default Home