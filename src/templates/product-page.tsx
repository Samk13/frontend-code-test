import React from 'react'
import SEO from '../components/SEO'
import Product from '../components/Product'
import { graphql } from 'gatsby'

const DevicePage: React.FC<any> = props => (
  <>
    <SEO title="Device" />
    <Product product={props.data.product} />
  </>
)

export const query = graphql`
  query productQuery($productId: String) {
    product(id: { eq: $productId }) {
      id
      brand
      image
      model
      displayName
    }
  }
`

export default DevicePage
