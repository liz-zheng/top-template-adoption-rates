// I assume data won't really have Adoption rate provided and this will be something that needs to be calculated using adopted count / total users
// but for UI demosntration, will include it for now

const templateData = [
  {
    Template: 'fly-docker-image',
    'Adoption rate': '80%',
    'Total Users': '20',
    'Adopted count': '16',
    'Growth Rate': '5%',
  },
  {
    Template: 'Develop in Docker',
    'Adoption rate': '50%',
    'Total Users': '20',
    'Adopted count': '10',
    'Growth Rate': '65%',
  },
  {
    Template: 'Develop in Docker-2',
    'Adoption rate': '30%',
    'Total Users': '20',
    'Adopted count': '6',
    'Growth Rate': '15%',
  },
  {
    Template: 'AWS EC2',
    'Adoption rate': '10%',
    'Total Users': '20',
    'Adopted count': '2',
    'Growth Rate': '1%',
  },
];

export default templateData;
