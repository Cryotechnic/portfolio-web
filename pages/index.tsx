import { Group } from '@mantine/core';
import { HeaderSimple } from '../components/nav/HeaderSimple';
import { CarouselProjects } from '../components/body/CarouselProjects';
import { BadgeCard } from '../components/body/BadgeCard';

export default function Home() {
  return (
  <Group position="right" my={30}>
    <HeaderSimple links={[
        { link: '#about', label: '01. About' },
        { link: '#experience', label: '02. Experience' },
        { link: '#work', label: '03. Work' },
        { link: '#contact', label: '04. Contact' }
      ]} />
  <CarouselProjects />
  {/* <Group position="center">
    <BadgeCard 
      image="https://raw.githubusercontent.com/neon-nyan/CollapseLauncher-Page/main/images/NewBanner2022.webp"
      title="Project 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet nisl."
      country="United States"
      badges={[
        { emoji: '🏆', label: 'Winner' },
        { emoji: '🏆', label: 'Winner' },
        { emoji: '🏆', label: 'Winner' },
        { emoji: '🏆', label: 'Winner' },
        { emoji: '🏆', label: 'Winner' },
      ]}
    />
  </Group> */}
  </Group>
  );
}
