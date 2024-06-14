import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
 
    let data = new Date().getFullYear()
  
    const {usuario} = useContext(AuthContext)

    let component: ReactNode

    if(usuario.token !== ""){
      component = (
        <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Blog pessoal Pedro Almeida | Copyright: {data} </p>
          <p className='text-lg'>Acesse minhas redes sociais</p>
          <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/pedroaugustosantosalmeida/" target='_blank' rel="noopener noreferrer">
              <LinkedinLogo size={48} weight='bold' />
            </a>
            <a href="https://www.instagram.com/pedroalm._/" target='_blank' rel="noopener noreferrer">
              <InstagramLogo size={48} weight='bold' />
            </a>
            <a href="https://github.com/PedroAlmeida25" target='_blank' rel="noopener noreferrer">
              <GithubLogo size={48} weight='bold' />
            </a>
          </div>
        </div>
      </div>
      )
    }


  return (
    <>
        {component}

    </>
  )
}

export default Footer