fetch('http://www.streetartitaly.org/ajax/getAllArtists')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao recuperar os dados');
    }
    return response.json(); // Converte a resposta para JSON
  })
  .then(data => {
    // Manipule os dados retornados aqui
    console.log(data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });