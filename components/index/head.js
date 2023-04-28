//Imports
import NextHead from 'next/head'

//Main export
export default function Head(){
    return( 
        <>
            <NextHead>
                <title>Interactive rating component with react and next.js</title>
                <meta name="description" content="frontend mentor interactive rating component solution built with nextjs and react. Styled with boostrap and sass."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>              
            </NextHead>
        </>
    )
}