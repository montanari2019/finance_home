import { GroupsDto } from "~/dto/groups.dtp";
import { ReleaseModel } from "~/model/release.model";

export const releases: ReleaseModel[]= [
  {
    title: 'Assinatura da Netflix',
    type: 'output',
    recurrent: true,
    value: 1500,
    date_release: new Date(2024, 0, 1), // Janeiro 1, 2024
  },
  {
    title: 'Salário Mensal',
    type: 'input',
    recurrent: true,
    value: 5000,
    date_release: new Date(2024, 0, 5), // Janeiro 5, 2024
  },
  {
    title: 'Compra de Supermercado',
    type: 'output',
    recurrent: false,
    value: 300,
    date_release: new Date(2024, 0, 10), // Janeiro 10, 2024
  },
  {
    title: 'Pagamento de Aluguel',
    type: 'output',
    recurrent: true,
    value: 1200,
    date_release: new Date(2024, 0, 15), // Janeiro 15, 2024
  },
  {
    title: 'Rendimentos de Investimento',
    type: 'input',
    recurrent: false,
    value: 800,
    date_release: new Date(2024, 0, 20), // Janeiro 20, 2024
  },
  {
    title: 'Fatura do Cartão de Crédito',
    type: 'output',
    recurrent: true,
    value: 2500,
    date_release: new Date(2024, 0, 25), // Janeiro 25, 2024
  },
  {
    title: 'Freelance de Design',
    type: 'input',
    recurrent: false,
    value: 1500,
    date_release: new Date(2024, 0, 28), // Janeiro 28, 2024
  },
  {
    title: 'Assinatura do Spotify',
    type: 'output',
    recurrent: true,
    value: 50,
    date_release: new Date(2024, 0, 30), // Janeiro 30, 2024
  },
  {
    title: 'Compra de Livros',
    type: 'output',
    recurrent: false,
    value: 200,
    date_release: new Date(2024, 1, 2), // Fevereiro 2, 2024
  },
  {
    title: 'Prêmio de Produtividade',
    type: 'input',
    recurrent: false,
    value: 1000,
    date_release: new Date(2024, 1, 5), // Fevereiro 5, 2024
  },
];

export const groups: GroupsDto[] = [
  {
      id: 'a1b2c3d4',
      name: 'Group One',
      date_crate: new Date('2024-01-01'),
      users: ['Alice', 'Bob'],
      saldo: 1000,
      
  },
  {
      id: 'e5f6g7h8',
      name: 'Group Two',
      date_crate: new Date('2024-02-01'),
      users: ['Charlie', 'David',],
      saldo: -2000,
      
  },
  {
      id: 'i9j0k1l2',
      name: 'Group Three',
      date_crate: new Date('2024-03-01'),
      users: ['Frank', 'Grace', 'Ikaro', 'Taci', 'Joelson'],
      saldo: 3000,
      
  },
  {
      id: 'm3n4o5p6',
      name: 'Group Four',
      date_crate: new Date('2024-04-01'),
      users: ['Hank', 'Ivy',],
      saldo: 4000,
      
  },
  {
      id: 'q7r8s9t0',
      name: 'Group Five',
      date_crate: new Date('2024-05-01'),
      users: ['Kathy', 'Leo'],
      saldo: -5000,
      
  },
  {
      id: 'u1v2w3x4',
      name: 'Group Six',
      date_crate: new Date('2024-06-01'),
      users: ['Mona', 'Nina', 'Oscar'],
      saldo: 6000,
      
  },
  {
      id: 'y5z6a7b8',
      name: 'Group Seven',
      date_crate: new Date('2024-07-01'),
      users: ['Paul', 'Quincy'],
      saldo: 7000,
      
  },
  {
      id: 'c9d0e1f2',
      name: 'Group Eight',
      date_crate: new Date('2024-08-01'),
      users: ['Rachel', 'Sam', ],
      saldo: 8000,
      
  },
  {
      id: 'g3h4i5j6',
      name: 'Group Nine',
      date_crate: new Date('2024-09-01'),
      users: ['Uma', 'Vince'],
      saldo: -9000,
      
  },
  {
      id: 'k7l8m9n0',
      name: 'Group Ten',
      date_crate: new Date('2024-10-01'),
      users: ['Wade', 'Xena', ],
      saldo: 10000,
      
  }
];




// export const releases: ReleaseModel[]= []
