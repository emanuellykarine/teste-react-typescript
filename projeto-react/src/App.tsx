import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cicle } from './components/Cicles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon} from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo/>
        </Heading>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
        <form action="" className='form'>
          <div className='formRow'>
            <DefaultInput id='meuInput' type='text' labelText='task:' placeholder='Digite algo'/>
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit </p>
          </div>

          <div className='formRow'>
            <Cicle cicleText='Ciclos: '/>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
