import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function Home() {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const theme = useMantineTheme();
  return (
    <Group position="center" my={30}>
    <Switch
      // checked={colorScheme === 'dark'}
      // onChange={() => toggleColorScheme()}
      size="lg"
      onLabel={<IconSun color="white" size="1.25rem" stroke={1.5} />}
      offLabel={<IconMoonStars color="black" size="1.25rem" stroke={1.5} />}
    />
  </Group>
  );
}
