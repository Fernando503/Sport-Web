<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 login-sec">
                <div class="superDivLogin">
                    <div class="container-login">
                        <h2 class="text-center">Login</h2>
                        <form class="login-form">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="text-uppercase">Usuario</label>
                                <input v-model="user" class="form-control" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1" class="text-uppercase">Contraseña</label>
                                <input :type="types" v-model="passUser" class="form-control" placeholder="">
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input">
                                                <small>Recordar</small>
                                                </label>
                                <div v-on:click="loginApi" class="btn btn-login float-right">Login</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            passUser:"",
            user:"",
            types: 'password',
        }
    },
    methods: {
        loginApi: function() {
            // pass: SportApp!

            this.axios.post('http://localhost:9000/API/auth', {
                    username: this.user,
                    password: this.passUser
                })
                .then(function(response) {
                    const token = response.data.token
                    localStorage.setItem('user-token', token)
                     window.location.href = '/service'
                })
                .catch(function(error) {
                    localStorage.removeItem('user-token')
                    window.location.href = '/login'
                    console.log(error)
                });
        }
    },
}
</script>

<style>
.superDivLogin {
    background: #DE6262;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #FFB88C, #DE6262);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 10%;
    border-radius: 10px;
    margin-bottom: 3em;
}

.container-login {
    background: white;
    border-radius: 10px;
    padding: 15%;
    /*  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1); */
}

.login-sec {
    position: relative;
}

.login-sec .copy-text {
    position: absolute;
    width: 50%;
    bottom: 20px;
    font-size: 13px;
    text-align: center;
}

.login-sec .copy-text i {
    color: #FEB58A;
}

.login-sec .copy-text a {
    color: #E36262;
}

.login-sec h2 {
    margin-bottom: 30px;
    font-size: 30px;
    color: #DE6262;
}

.login-sec h2:after {
    content: " ";
    width: 100px;
    height: 5px;
    background: #FEB58A;
    display: block;
    margin-top: 20px;
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto
}

.btn-login {
    background: #DE6262;
    color: #fff;
    font-weight: 600;
}
</style>