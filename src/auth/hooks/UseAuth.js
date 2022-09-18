import { useNavigate } from 'react-router-dom';

const useAuth = () => {
	const navigate = useNavigate();

	return async (email, password) => {
		navigate('/films');
	}
}

export default useAuth;