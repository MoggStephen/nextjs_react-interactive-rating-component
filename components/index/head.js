//Imports
import NextHead from 'next/head'

//Main export
export default function Head(){
    return( 
        <>
            <NextHead>
                <title>Interactive rating component with react and next.js</title>
                <meta name="description" content="App to practice react and next.js"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </NextHead>
        </>
    )
}