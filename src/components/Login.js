import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import {useNavigate} from 'react-router-dom';

function Login() {

    const navigate=useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value;

        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if(email === '' || password === '') {
            swAlert(<h2>Los campos no pueden estar vacíos</h2>);
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            swAlert(<h2>Debes escribir una dirección de correo electrónico válida</h2>);
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(<h2>Credenciales Inválidas</h2>);
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org',{ email, password})
            .then(res => {
                swAlert(<h2>Perfecto, ingresaste correctamente!</h2>)
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido);
            navigate('/Listado');
        });
    }

    let token = localStorage.getItem('token');

    return(
        <>

        { token && navigate('/Listado')};

        <div className="row">
        <div className="col-6 offset-3">
        <h2>Formulario de Login</h2>
        <form onSubmit={submitHandler}>
            <label className="form-label d-block mt-2">
                <span>Correo electrónico:</span><br/>
                 <input type="text" name="email" className="form-control"/>
            </label>
            <br/>
            <label className="form-label d-block mt-2">
                <span>Contraseña:</span><br/>
            <input type="password" name="password" className="form-control"/>
            </label>
            <br/>
            <button className="btn btn-primary" type="submit">Ingresar</button>
            </form>
        </div>
        </div>
            </>
    )
}

export default Login;