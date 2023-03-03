import './botoes.css';

const Botoes = () => {
  return(
    <div className='grupo_Botoes'>
      <div className='container_botoes'>
                <div className='item'>
                    <span className='span'>CELULAR</span>
                </div>
                <div className='item'>
                    <span className='span'>ACESSÓRIOS</span>
                </div>
                <div className='item'>
                    <span className='span'>TABLET</span>
                </div>
                <div className='item'>
                    <span className='span'>NOTEBOOK</span>

                </div>
                <div className='item'>
                    <span className='span'>TVS</span>

                </div>
                <div className='item'>
                    <span className='span'>VER TODOS</span>
                </div>
            </div>
    </div>
  )
}

export default Botoes;