export const formatterReais = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });


  export const formatDateDefault = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: "short"
    
  })


  

  export const formatDateMonthAndYear = new Intl.DateTimeFormat('pt-BR', {
    // dateStyle: "short",
    month: "long",
    year: "numeric"
    
  })