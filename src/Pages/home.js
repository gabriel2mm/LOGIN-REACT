import React, {useContext} from 'react';
import {UserContext} from '../Contexts/index';
import ExempleComponente from '../Components/Exemplo/index';
function HomePage() {

  const userContext = useContext(UserContext);

  function logout(){
    userContext.logout();
  }

  return (
      <>
        Home page
        <br /> {/* Remover por que isso não se usa mais -> coloquei apenas para ficar bonito o exemplo em tela mas há forma muito melhores de fazer, o CSS é uma delas */}
        <span>Nome: {userContext.user.nome}</span>
        <br /> {/* Remover por que isso não se usa mais -> coloquei apenas para ficar bonito o exemplo em tela mas há forma muito melhores de fazer, o CSS é uma delas */}
        <span onClick={logout}> Logout </span>
        <ExempleComponente />
        
      </>
  );
}

export default HomePage;