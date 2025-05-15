<script setup>
import { ref } from 'vue';
import Dropdown from 'primevue/dropdown';
import { z } from 'zod';
import { zodResolver } from '@primevue/forms/resolvers/zod';


// El @ siempre empieza desde la raiz 'src'
import { useRoute } from 'vue-router';

/* Inicializamos el ROL como null */
const rolSeleccionado= ref(null);

/* Ponemos los valores de ROL aquí disponibles */
const roles = [
  { name: 'ADMIN'},
  { name: 'USER'}
];

// Definir Emits
const emit = defineEmits(['submitForm'])

// Props
const props = defineProps({

    rol: {
        type: String,
        default: "USER"
    }

})

const route = useRoute();

console.log(route.path)

console.log(props)
const initialValues = ref({
    usuario: '',
    contrasenia: ''
});

const resolver = zodResolver(
    z.object({
        usuario: z.string().min(2, { message: 'Este campo es obligatorio.' }),
        contrasenia: z
            .string()
            .min(4, { message: 'Minimum 4 characters.' })
        // .max(8, { message: 'Maximum 8 characters.' })
        /* .refine((value) => /[a-z]/.test(value), {
            message: 'Must have a lowercase letter.'
        })
        .refine((value) => /[A-Z]/.test(value), {
            message: 'Must have an uppercase letter.'
        })
        .refine((value) => /d/.test(value), {
            message: 'Must have a number.'
        }) */
    })
);

const onFormSubmit = async (e) => {

    // e.originalEvent: Represents the native form submit event.
    // e.valid: A boolean that indicates whether the form is valid or not.
    // e.states: Contains the current state of each form field, including validity status.
    // e.errors: An object that holds any validation errors for the invalid fields in the form.
    // e.values: An object containing the current values of all form fields.
    // e.reset: A function that resets the form to its initial state.  

    if (e.valid) {
        const { usuario, contrasenia } = e.values;
        emit('submitForm', { usuario, contrasenia });
    }
};
</script>

<template>
    <Form style="width: 100%;" v-slot="$form" :initialValues :resolver @submit="onFormSubmit"
        class="flex flex-col gap-4 w-full sm:w-60">
        <div class="flex flex-col gap-1">
            <InputText name="usuario" type="text" placeholder="Usuario" fluid />
            <Message v-if="$form.usuario?.invalid" severity="error" size="small" variant="simple">
                {{ $form.usuario.error.message }}
            </Message>
        </div>
        <div class="flex flex-col gap-1">
            <Password name="contrasenia" placeholder="Contraseña" :feedback="false" toggleMask fluid />
            <Message v-if="$form.contrasenia?.invalid" severity="error" size="small" variant="simple">
                {{ $form.contrasenia.error.message }}
            </Message>
        </div>
        <div v-if="route.path === '/register' && props.rol === 'USER'" class="card flex justify-content-center">
            <Dropdown v-model="selectedRol" :options="roles" optionLabel="name" placeholder="Selecciona un rol"
                class="w-full md:w-14rem">
            </Dropdown>
        </div>
        <Button class="p-1!" type="submit" severity="success" label="ACEPTAR" />
    </Form>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>