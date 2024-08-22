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
