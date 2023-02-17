import { useEffect, useState } from 'react';
import { Grid, GridItem, Text, chakra } from '@chakra-ui/react';

const StyledGridItem = chakra(GridItem, {
  baseStyle: {},
});

export function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'August, 5, 2023';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={12} role="timer" p="16" m="8">
      <StyledGridItem w="100%" textAlign="center">
        <Text fontSize="3xl">{days < 10 ? '0' + days : days}</Text>
        <Text casing="uppercase" p="4">
          Dia(s)
        </Text>
      </StyledGridItem>
      <StyledGridItem w="100%" textAlign="center">
        <Text fontSize="3xl">{hours < 10 ? '0' + hours : hours}</Text>
        <Text casing="uppercase" p="4">
          Hora(s)
        </Text>
      </StyledGridItem>
      <StyledGridItem w="100%" textAlign="center">
        <Text fontSize="3xl">{minutes < 10 ? '0' + minutes : minutes}</Text>
        <Text casing="uppercase" p="4">
          Minuto(s)
        </Text>
      </StyledGridItem>
      <StyledGridItem w="100%" textAlign="center">
        <Text fontSize="3xl">{seconds < 10 ? '0' + seconds : seconds}</Text>
        <Text casing="uppercase" p="4">
          Segundo(s)
        </Text>
      </StyledGridItem>
    </Grid>
  );
}

export default Timer;
