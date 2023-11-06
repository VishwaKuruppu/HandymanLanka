import images from './images';

const wines = [
  {
    title: 'Plumbing',
    price: '3 projects',
    tags: 'drainage | Pipes',
  },
  {
    title: 'Electrical',
    price: '2 projects',
    tags: 'wiring | maintanence',
  },
  {
    title: 'A/C Fixing',
    price: '1 project',
    tags: 'A/C installation | repair',
  },
  {
    title: 'CCTV',
    price: '10 projects',
    tags: 'installation ',
  },
  {
    title: 'Carpentry',
    price: '6 projects',
    tags: 'furnishing | wood repair',
  },
];

const cocktails = [
  {
    title: 'metal wires',
    price: 'Rs.2000',
    tags: '2inch | 20m',
  },
  {
    title: "insulation tape",
    price: 'Rs.1600',
    tags: 'black | 50m',
  },
  {
    title: 'tool kit',
    price: 'Rs.10000',
    tags: 'wiring tools | plumbing tools',
  },
  {
    title: 'Metal Pipe',
    price: 'Rs.3100',
    tags: '5inch | 4m',
  },
  {
    title: 'CCTV camera',
    price: 'Rs.26000',
    tags: 'HD | 24hr',
  },
];

const awards = [
  {
    imgUrl: images.award6,
    title: 'Sampath Gamage',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award6,
    title: 'renjith kaveen',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award6,
    title: 'ayesh de silva',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award6,
    title: 'john doe',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
/**
 * export default { wines, cocktails, awards };
 */

const data = { wines, cocktails, awards };

export default data;