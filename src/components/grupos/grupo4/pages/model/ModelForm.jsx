/*eslint-disable */
import { Link } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UsersContext';
import inputs from '../../dto/model-props';
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const ModelForm = () => {
  const [values, setValues] = useState({
    brand: '',
    model: '',
    year: '',
    engine: '',
    fuelType: '',
    basePrice: 0.0,
  });

  const [errors, setErrors] = useState({});

  const { saveVehicleModel, showSpansaveModelError, saveModelMessageError } =
    useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveVehicleModel(values);
  };

  const onChange = (e) => {
    if (e.target.name !== "fuelType") {
      const { name } = e.target;
      const inputElement = e.target;
      const isValid = inputElement.checkValidity();
      const errorMessage = inputs.map((input) =>
        input.name === name? input.errorMessage : ""
      )
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: isValid ? '' : errorMessage,
      }));
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onChangeDropdown = (e, model) => {
    setValues({ ...values, fuelType: model });
    setSelectedModel(model);
  };
  
  const [selectedModel, setSelectedModel] = useState('');

  return (
    <Paper
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: '70%', display: 'flex', textAlign: 'center' }}
      >
        <Typography variant="h3">Cargar modelo de auto</Typography>
        {inputs.map((input) => (
          <TextField
            key={input.id}
            name={input.name}
            variant="filled"
            label={input.label}
            onChange={onChange}
            defaultValue={''}
            inputProps={{ pattern: input.pattern }}
            error={Boolean(errors[input.name])} // Show error message if exists
            helperText={errors[input.name]} // Show error message
            required
          ></TextField>
        ))}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Seleccione un tipo de combustible</InputLabel>
            <Select
            name='fuelType'
              value={selectedModel}
              onChange={(e) => onChangeDropdown(e, e.target.value)}
            >
              <MenuItem value='NAFTA'>NAFTA</MenuItem>
              <MenuItem value='DIESEL'>DIESEL</MenuItem>
              <MenuItem value='ELECTRICO'>ELECTRICO</MenuItem>
              <MenuItem value='HIBRIDO'>HIBRIDO</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Alert
          severity="error"
          style={
            showSpansaveModelError ? { display: 'block' } : { display: 'none' }
          }
        >
          {saveModelMessageError}
        </Alert>
        <Button variant="contained" type="submit" sx={{ marginBottom: '2em' }}>
          Enviar
        </Button>
        <Link to={'/'}>
          <p>Volver al inicio</p>
        </Link>
      </Stack>
    </Paper>
  );
};

export default ModelForm;
