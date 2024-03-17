import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Stack } from 'react-bootstrap';
import { Container, Grid, Box,Footer } from '@mui/material';

function Home(){
    return(
        <Container fixed
        style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center"
        alignItems="center">

        
        <h3> 안녕하세요, 메이커스페이스입니다 ! </h3><small>Beta</small>
            <Grid container item spacing={1} justifyContent="center"
        alignItems="center">
                <Grid item xs={3} justifyContent="center"
                alignItems="center">
                <Link to='space'><Button style={{maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: '200px'}} variant="primary" size="lg">시설 방문</Button></Link>
                </Grid>

                <Grid item xs={3}>
                <Link to='printer'><Button style={{maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: '200px'}} variant="warning" size="lg">3D 프린터 이용</Button></Link>
                </Grid>  
            </Grid>

            <Grid container item spacing={1} justifyContent="center"
            alignItems="center">   
                <Grid item xs={3}>
                <Link to='table'><Button style={{maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: '200px'}} variant="danger" size="lg">테이블 이용</Button></Link>
                </Grid>
                <Grid item xs={3}>
                <Link to='rent'><Button style={{maxWidth: '200px', maxHeight: '200px', minWidth: '200px', minHeight: '200px'}} variant="success" size="lg">수공구 대여</Button></Link>
                </Grid>
            </Grid>
        </Grid>
       
  
        </Container>
    )
}

export default Home;