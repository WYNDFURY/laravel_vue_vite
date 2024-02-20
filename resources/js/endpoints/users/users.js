import { ref } from "vue";
const users = ref(null);

const fetchUsers = async () =>  {

    const response = await fetch("http://localhost/projet_web/laravel_vue_vite/public/api/users");
    return response.json();

};

const getUsers = async () => {
    users.value = await fetchUsers();
};
getUsers();

export { users };