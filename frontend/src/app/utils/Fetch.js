 // utils/fetchUtils.js

export function getCookie(name) {
    return localStorage.getItem(name);
  }
  
  export async function fetchProducts() {
    const token = getCookie('jwt');  
    console.log(token);
    const response = await fetch('http://localhost:8000/products/ctr-product/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("product:", data);
    return data;
  }
  
  export async function fetchBrands() {
    const token = getCookie('jwt');
    console.log(token);
    const response = await fetch('http://localhost:8000/brand/create/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    console.log("brand:", data);
    return data.results; 
  }
  