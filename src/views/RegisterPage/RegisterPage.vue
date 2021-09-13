<template>
    <b-row>
        <b-col>
            <div>
                <RegisterForm />
            </div>
        </b-col>
    </b-row>
</template>

<script>
import RegisterForm from '../../components/RegisterForm/RegisterForm.vue'

export default {
    name: 'LoginPage',
    components: {
        RegisterForm
    }
}
</script>

<style>

</style>