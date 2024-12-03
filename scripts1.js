// Trocar entre login e cadastro
document.getElementById('switch-to-signup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });
  
  document.getElementById('switch-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
  
  // Simular banco de dados local
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Cadastro
  document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    if (users.some(user => user.email === email)) {
      alert('Este email já está cadastrado!');
    } else {
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Cadastro realizado com sucesso! Faça login.');
      document.getElementById('signup-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
    }
  });
  
  // Login
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert(`Bem-vindo, ${user.name}!`);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = "cardapio.html";
    } else {
      alert('Email ou senha incorretos!');
    }
  });
  