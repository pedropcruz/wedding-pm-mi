import { Heading, Text, Container, Flex } from '@chakra-ui/react';
import Timer from './timer/timer';

export function App() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="orange.50"
    >
      <Timer />
      <Heading as="h2" size="2xl">
        Bem vindos a este dia tão especial
      </Heading>
      <form>
        <Heading as="h3" size="lg">
          Mal podemos esperar para celebrar contigo!
        </Heading>
        <Text fontSize="small">
          Estamos a dar o nó a 5 de Agosto de 2023 no Seixal
        </Text>
        <div>
          <label>Nome</label>
          <input type="name" placeholder="Nome" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" placeholder="E-mail" />
        </div>
        {/* Radio Buttons para dizer que sim ou não*/}
        <div>
          <label />
          <input />
          Sim, vou estar presente.
        </div>
        <div>
          <label />
          <input />
          Desculpa, não consigo ir.
        </div>
        {/* Dropdowns para o número de convidados */}
        <div>
          <select>
            <option>1</option>
            <option>2</option>1<option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        {/* Dropdown para a preferência na comida? */}
        <div>
          <select>
            <option>Vegan?</option>
            <option>Carne?</option>
            <option>Peixe?</option>
          </select>
        </div>
        {/* Campo de notas */}
        <div>
          <textarea />
        </div>
      </form>
    </Flex>
  );
}

export default App;
