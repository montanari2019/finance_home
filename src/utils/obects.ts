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


// export const releases: ReleaseModel[]= []
