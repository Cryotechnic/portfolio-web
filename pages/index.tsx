import { Group } from '@mantine/core';
import { HeaderSimple } from '../components/nav/HeaderSimple';

export default function Home() {
  return (
  <Group position="right" my={30}>
    <HeaderSimple links={[{ link: '#about', label: '01. About' }, { link: '#experience', label: '02. Experience' }, { link: '#work', label: '03. Work' }, { link: '#contact', label: '04. Contact' }]} />
  </Group>
  );
}
