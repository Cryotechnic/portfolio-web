import { Group } from '@mantine/core';
import { HeaderSimple } from '../components/nav/HeaderSimple';
import { CarouselProjects } from '../components/body/CarouselProjects';
// import type { InferGetStaticPropsType, GetStaticProps } from 'next';
// import { BadgeCard } from '../components/body/BadgeCard';
// import { useDisclosure } from '@mantine/hooks';
// import { , Group, Button } from '@mantine/core';

// type Repo = {
//   name: string;
//   description: string;
//   html_url: string;
//   homepage: string;
//   stargazers_count: number;
//   language: string;
//   owner: {
//     login: string;
//     avatar_url: string;
//   };
// };

// export const getStaticProps = (async (context) => {
//   const response = await fetch('https://api.github.com/users/Cryotechnic/repos');
//   const repos: Repo[] = await response.json();

//   return {
//     props: {
//       repos,
//     },
//   };
// }) satisfies GetStaticProps<{ repos: Repo[] }>;

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
  </Group>
  );
}
// export default function Home({ repos }: InferGetStaticPropsType<typeof getStaticProps>) {
//   // return repos.map((repo) => (
//   //   <div key={repo.name}>
//   //     <h1>{repo.name}</h1>
//   //     <p>{repo.description}</p>
//   //     <a href={repo.html_url} target="_blank">View on GitHub</a>
//   //   </div>
//   // ));
//   return (
//     <Group position="right" my={30}>
//       <HeaderSimple links={[
//           { link: '#about', label: '01. About' },
//           { link: '#experience', label: '02. Experience' },
//           { link: '#work', label: '03. Work' },
//           { link: '#contact', label: '04. Contact' }
//         ]} />
//       {/* <CarouselProjects
//     repos.map((repo) => (
//       <div key={repo.name}>
//         <h1>{repo.name}</h1>
//         <p>{repo.description}</p>
//         <a href={repo.html_url} target="_blank">View on GitHub</a>
//       </div>
//       /> */}
//     </Group>
//   )
