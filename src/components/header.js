import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
    Logo,
    LogoStampDistributor,
    LogoStampInnovation,
    LogoStampInsurance,
    LogoStampTechnology,
} from "@fremtind/jkl-logo-react";
import "@fremtind/jkl-logo/logo.min.css";


export default function Header(){
    return(
        <StaticQuery
            query = {graphql`
                query HeadingQuery {
                    site {
                      siteMetadata {
                        title
                      }
                    }
                } 
            `}
            render = {data => (
                <header>
                    <Logo isSymbol/>
                    <h1 style = {{color: '#000000'}}>{data.site.siteMetadata.title}</h1>
                </header>
            )}
        />
    )
}