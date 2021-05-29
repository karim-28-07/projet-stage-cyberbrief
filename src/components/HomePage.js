import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import  Img from 'gatsby-image'



const Homepage = () => {
    const data = useStaticQuery(graphql`
    query TripsQuery {
        allTripsJson {
          edges {
            node {
              alt
              button
              name
              img {
                childImageSharp {
                  fluid (maxWidth: 600){
                    ...GatsbyImageSharpFluid
                    
                  }
                }
              }
            }
          }
        }
      }
    `)

    function getTrips(data){
        const tripsArray= []

        // console.log("data.allTripsJson.edges", data.allTripsJson.edges);

        data.allTripsJson.edges.forEach ((item, index)=>{
          
            tripsArray.push(

                <div key = {index}>
                    <Img src={item.node.img.childImageSharp.fixed.src}
                    alt = {item.node.alt}
                    fluid={item.node.img.childImageSharp.fixed} 
                    // fixed={item.node.img.childImageSharp.fixed} 
                    />
                    {/* <ProductInfo>
                        <Textwrap>
                            <ImLocation />
                            <ProductTitlle>{item.nade.name}</ProductTitlle>
                        </Textwrap>

                    </ProductInfo> */}


                </div>
            )
        })

        return tripsArray
    }

    return (
        <ProductsContainer>
            <ProductsHeading></ProductsHeading>
            
            
                <ProductWrapper>{getTrips(data)}</ProductWrapper>
           
        </ProductsContainer>
    )
}

export default Homepage

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #fff;
    color: #fff

`
const ProductsHeading = styled.div`
    font-size: 30px;
    text-align: start;
    margin-bottom: 5rem;
    color: #241C52;


`

const ProductWrapper = styled.div``
