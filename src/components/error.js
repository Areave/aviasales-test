const Error = () => {

    return (
            <div className="ticket round shadow error">
                <h4 className='error-title'>К сожалению, что-то пошло не так!</h4>
                <span className='error-desc'>Нажмите на котика, чтобы перезагрузить страницу!</span>
                <a href=''><img className='error-picture' src='https://media.tenor.com/images/4052d8f8b69c23e51b8b6370ff0a011b/tenor.gif' /></a> 
            </div>

    )
}

export default Error