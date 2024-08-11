import secrets
import string

def generate_secret_key(length=50):
    """Generate a random secret key."""
    characters = string.ascii_letters + string.digits + string.punctuation
    secret_key = ''.join(secrets.choice(characters) for _ in range(length))
    return secret_key

def print_secret_key():
    secret_key = generate_secret_key()
    print(f"Generated Secret Key: {secret_key}")

if __name__ == "__main__":
    print_secret_key()