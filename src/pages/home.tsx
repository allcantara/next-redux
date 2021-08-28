import { Button, Grid, Message, Container } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logout, selectAuth } from '../redux/features/auth'

const Home = () => {
  const router = useRouter()

  const dispatch = useAppDispatch()
  const { user } = useAppSelector(selectAuth)

  const handleLogout = () => {
    dispatch(logout())
    router.push('/')
  }

  return (
    <Container>
      <Grid style={{ height: '100vh' }} centered verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Message attached success size="massive">
            Bem-vindo, {user?.email}!
            <Button
              circular
              secondary
              floated="right"
              onClick={() => handleLogout()}
            >
              Sair
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Home
