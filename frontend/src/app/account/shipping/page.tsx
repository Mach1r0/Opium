'use client'; 
import React from 'react';
import Style from '@/app/style/shipping.module.css';
import { FaHouse } from "react-icons/fa6";
import { useAuth } from '@/app/Context/AuthContext';
import Link from 'next/link';

export default function Page() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className={Style['container-all']}>
      <div className={Style['container-address']}>
        <div className={Style['container-personal-address']}>
          {user.address ? (
            <div>
              <p>{user.address.nome}</p>
              <button>Adicionar</button>
            </div>
          ) : (
            <div className={Style['container-not-address']}>
              <FaHouse />
              <p>Você não tem endereços cadastrados</p>
              <Link href='shipping/create'>
                <button>
                  ADICIONAR
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}