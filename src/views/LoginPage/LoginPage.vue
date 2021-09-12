<template>
    <b-row>
        <b-col>
            <div>
                <LoginForm />
            </div>
        </b-col>
    </b-row>
</template>

<script>
import LoginForm from '../../components/LoginForm/LoginForm.vue'

export default {
    name: 'LoginPage',
    components: {
        LoginForm
    }
}
</script>

<style>

</style>