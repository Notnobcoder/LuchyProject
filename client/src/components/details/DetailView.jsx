import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { Box, Typography, Grid, styled, stepLabelClasses } from '@mui/material'
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';


const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  gap: '40px',
  [theme.breakpoints.down('md')]: {
    margin: 0
  }
}))

const RightContainer = styled(Grid)`
     margin-top: 50px;
     margin-left: 20px;     
`

const DetailView = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);


  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id))
  }, [dispatch, id, product, loading])

  return (
    <Component>
      {
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={6} md={8} sm={6} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      }
    </Component>
  )
}

export default DetailView
