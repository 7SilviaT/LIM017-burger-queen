import React from 'react';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import  Login  from '../../components/Login/Login.jsx'
//import { AuthProvider } from '../../../context/AuthContext.js';
import '@testing-library/jest-dom';

jest.mock('../../../context/AuthContext.js');


//testeamos que un componente se ubique en una pagina

test('rendering Login component that uses useLocation ', () => {
  const history = createMemoryHistory()
  const route = '/Login'
  history.push(route)
  render(
    <Router location={history.location} navigator={history}>
      <Login />
    </Router>,
  )

  expect(screen.getByTestId('Inicia sesión')).toHaveTextContent(route)
})

//handleSubmit function pass to the next page once inputs are filled and correct


/* test('full app rendering/navigating', async () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
    const user = userEvent.setup()
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(screen.getByText(/you are home/i)).toBeInTheDocument()
  
    await user.click(screen.getByText(/about/i))
  
    // check that the content changed to the new page
    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
  })
  
  test('landing on a bad page', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
  
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
  })
  
  test('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory()
    const route = '/some-route'
    history.push(route)
    render(
      <Router location={history.location} navigator={history}>
        <LocationDisplay />
      </Router>,
    )
  
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  }) */
