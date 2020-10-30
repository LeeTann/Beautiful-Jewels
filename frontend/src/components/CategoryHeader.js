import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <>
      <Navbar className='cat-nav' bg='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/products/rings'>
            <Navbar.Text className='cat-item'>Rings</Navbar.Text>
          </LinkContainer>
          <LinkContainer to='/products/bracelets'>
            <Navbar.Text className='cat-item'>Bracelets</Navbar.Text>
          </LinkContainer>
          <LinkContainer to='/products/necklaces'>
            <Navbar.Text className='cat-item'>Necklaces</Navbar.Text>
          </LinkContainer>
          <LinkContainer to='/products/earrings'>
            <Navbar.Text className='cat-item'>Earrings</Navbar.Text>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  )
}

export default CategoryHeader
