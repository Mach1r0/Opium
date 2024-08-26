export function getCookie(name) {
  return localStorage.getItem(name);
}

export async function fetchProducts() {
  const token = getCookie('jwt');  
  const response = await fetch('http://localhost:8000/products/ctr-product/', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchBrands() {
  const token = getCookie('jwt');
  const response = await fetch('http://localhost:8000/brand/create/', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const data = await response.json();
  return data.results; 
}

async function refreshToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) {
    throw new Error('No refresh token found');
  }

  try {
    const response = await fetch('http://localhost:8000/user/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }), // Verifique se o campo é 'refresh'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to refresh token: ${errorData.detail || response.statusText}`);
    }

    const data = await response.json();
    return data.access; // Retorna o novo token de acesso
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}

// Função para buscar dados do usuário
export async function fetchUser() {
const token = localStorage.getItem('token');
if (!token) {
  throw new Error('No token found');
}

try {
  const response = await fetch('http://localhost:8000/user/create/', {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  if (response.status === 401) {
    const newToken = await refreshToken();
    if (newToken) {
      localStorage.setItem('token', newToken); // Atualize o token no localStorage
      return fetchUser(); // Tente novamente com o novo token
    } else {
      throw new Error('Unable to refresh token');
    }
  }

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error fetching user:', error);
  throw error;
}
}