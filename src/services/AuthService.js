// AuthService.js
export const login = async (usuario, contrasenia) => {
    try {
        console.log(import.meta.env.VITE_DIRECCION)
        const response = await fetch(import.meta.env.VITE_DIRECCION+"/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, contrasenia }),
        });

        const json = await response.json();
        return { ok: response.ok, data: json };

    } catch (error) {
        return { ok: false, error: 'Error de red' };
    }
};
