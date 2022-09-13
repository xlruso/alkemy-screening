import {useNavigate} from 'react-router-dom';

function Detalle () {

    const navigate = useNavigate();

    let token = localStorage.getItem('token')

    return (
        <>
        {!token && navigate('/')};
        <h2>Detalle de la película</h2>
        </>
    )
}

export default Detalle;