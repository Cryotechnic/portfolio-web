import { Carousel } from '@mantine/carousel';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Modal, Group, Badge } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  badges: { emoji: string; label: string }[];

}

function Card({ image, title, category, badges }: CardProps) {
  const { classes } = useStyles();
  const [opened, { open, close}] = useDisclosure(false);
  const theme = useMantineTheme();


  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        {/* <Text className={classes.category} size="xs">
        </Text> */}
        {badges.map((badge, index) => (
          <Badge
            key={badge.emoji}
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
            style={{ marginRight: index !== badges.length - 1 ? '8px' : undefined }}
          >
            {badge.emoji} {badge.label}
          </Badge>
        ))}
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <>
      <Modal 
        opened={opened}
        onClose={close}
        title={title}
        centered
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://raw.githubusercontent.com/neon-nyan/CollapseLauncher-Page/main/images/NewBanner2022.webp',
    title: 'Collapse Launcher',
    category: ['Launcher', 'Minecraft', 'Java'],
    badges: [
      { emoji: '📦', label: 'Launcher' },
      { emoji: '🎮', label: 'Minecraft' },
      { emoji: '☕', label: 'Java' },
    ],
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
    badges: [
      { emoji: '🏖️', label: 'Beach' },
      { emoji: '🌴', label: 'Tropical' },
      { emoji: '🌊', label: 'Ocean' },
    ],
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
    badges: [
      { emoji: '🏔️', label: 'Mountains' },
      { emoji: '🌃', label: 'Night' },
      { emoji: '🌌', label: 'Stars' },
    ],
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
    badges: [
      { emoji: '🌌', label: 'Stars' },
      { emoji: '🌃', label: 'Night' },
      { emoji: '🇳🇴', label: 'Norway' },
    ],
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
    badges: [
      { emoji: '🌬️', label: 'Winter' },
      { emoji: '🌃', label: 'Night' },
      { emoji: '🌌', label: 'Stars' },
    ],
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
    badges: [
      { emoji: '🌋', label: 'Volcano' },
      { emoji: '🌋', label: 'Danger' },
      { emoji: '🌋', label: 'Active' },
    ],
  },
];

export function CarouselProjects() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="40%"
      breakpoints={[{ maxWidth: '8%', slideSize: '8%' }]}
      slideGap="xl"
      align="end"
      slidesToScroll={mobile ? 1 : 2}
      plugins={[autoplay.current]}
    >
      {slides}
    </Carousel>
  );
}