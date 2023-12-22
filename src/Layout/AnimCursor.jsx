import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimCursor = () => {
    
    return window.innerWidth > 700 ?
    
     (
        <AnimatedCursor
            innerSize={8}
            outerSize={80}
            color='225,225,225'
            outerAlpha={1}
            innerScale={0.7}
            outerScale={2}
            outerStyle={{mixBlendMode:"hard-light"}}
            innerStyle={{mixBlendMode:"difference"}}
            trailingSpeed={15}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                ".clickable",
            ]}
        />
    ) : <></>
}

export default AnimCursor