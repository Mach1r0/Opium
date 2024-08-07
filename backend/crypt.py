import os
import base64

def generate_jwt_secret():
    # Gera uma chave secreta de 256 bits (32 bytes)
    secret_key = os.urandom(32)
    
    # Codifica a chave em base64 para facilitar o uso
    encoded_secret_key = base64.urlsafe_b64encode(secret_key).decode('utf-8')
    
    return encoded_secret_key

def main():
    # Gera a chave secreta para o JWT
    jwt_secret = generate_jwt_secret()
    
    # Imprime a chave secreta
    print(f"JWT Secret Key: {jwt_secret}")

if __name__ == "__main__":
    main()