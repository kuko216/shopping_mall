// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    margin: 0 auto;
    background-color: white;
    width: 1000px;
    height: 100%;
`

class WishlistContainer extends React.Component {
    render(){
        return (
            <Wrapper>
                <Link to="/products">back</Link>
            </Wrapper>
        )
    }
}

export default WishlistContainer;