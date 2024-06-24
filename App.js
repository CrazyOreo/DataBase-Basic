import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [nomes, setNomes] = useState([]);

  const Api = {
    getPersons: async function() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          setNomes(res.data);
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    }
  };

  useEffect(() => {
    Api.getPersons();
  }, []);

  return (
    <div>
      {nomes.map(function(data) {
        return (
          <div key={data.id}>
           <h3>Nome: {data.name} ||Username: {data.username}</h3> <h3>Telefone: {data.phone}</h3><h2>__________________</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
