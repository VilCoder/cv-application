import { Form, TextInput, Textarea } from "./Form";

export function PersonForm({ handleChange }) {
  return (
    <Form title="Información Personal" initialState={true}>
      <TextInput
        label="Nombre Completo"
        name="fullname"
        placeholder="John Doe..."
        onChange={handleChange}
        autoComplete="name"
      />

      <TextInput
        label="Ubicación"
        name="address"
        placeholder="City, Country"
        onChange={handleChange}
        autoComplete="street-address"
      />

      <TextInput
        label="Teléfono"
        name="phone"
        placeholder="+57 234567890"
        onChange={handleChange}
        type="tel"
        autoComplete="tel"
        maxLength={20}
      />

      <TextInput
        label="Correo Eléctronico"
        name="email"
        placeholder="johndoe@example.com"
        onChange={handleChange}
        type="email"
        autoComplete="email"
      />

      <Textarea
        label="Perfil"
        name="aboutMe"
        autoComplete="off"
        rows={3}
        placeholder="Write a brief description about yourself..."
        onChange={handleChange}
      />
    </Form>
  );
}
