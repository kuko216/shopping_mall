import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Product = ({ price, title, coverImage }) => {
    return (
        <>
            {price}
            {title}
            {coverImage}
        </>
    )
  };
  
  export default Product;