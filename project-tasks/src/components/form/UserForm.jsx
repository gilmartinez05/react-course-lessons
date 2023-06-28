import { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date_of_birth: '',
    address: '',
    city: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const validationErrors = { ...errors };

    switch (name) {
      case 'first_name':
        if(value.trim() === ''){
          validationErrors.first_name =  'El nombre es requerido';
        }else{
          delete validationErrors.first_name
        }

        break;
      case 'last_name':
        validationErrors.last_name = value.trim() ? '' : 'El apellido es requerido';
        break;
      case 'email':
        if (!value.trim()) {
          validationErrors.email = 'El correo electrónico es requerido';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          validationErrors.email = 'El correo electrónico no es válido';
        } else {
          validationErrors.email = '';
        }
        break;
      case 'date_of_birth':
        validationErrors.date_of_birth = value.trim() ? '' : 'La fecha de nacimiento es requerida';
        break;
      case 'address':
        validationErrors.address = value.length >= 3 ? '' : 'La dirección debe tener al menos 3 caracteres';
        break;
      default:
        break;
    }

    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length == 0)
      console.log(formData)
    else
      console.log(errors)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        {errors.first_name && <span className="error">{errors.first_name}</span>}
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        {errors.last_name && <span className="error">{errors.last_name}</span>}
      </div>
      <div>
        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Fecha de nacimiento:</label>
        <input
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
        />
        {errors.date_of_birth && <span className="error">{errors.date_of_birth}</span>}
      </div>
      <div>
        <label>Dirección:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span className="error">{errors.address}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserForm;
