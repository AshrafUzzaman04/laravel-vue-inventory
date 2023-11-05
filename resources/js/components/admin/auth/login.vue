<template>
    <div>
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Log</b>In</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="login">
                        <div class="input-group mb-3">
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                v-model="form.email"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                v-model="form.password"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label for="remember"> Remember Me </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                >
                                    Sign In
                                </button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <div class="social-auth-links text-center mt-2 mb-3">
                        <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-primary"
                        >
                            <i class="fab fa-facebook mr-2"></i> Sign in using
                            Facebook
                        </a>
                        <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-danger"
                        >
                            <i class="fab fa-google-plus mr-2"></i> Sign in
                            using Google+
                        </a>
                    </div>
                    <!-- /.social-auth-links -->

                    <p class="mb-1">
                        <router-link to="/forget-password"
                            >I forgot my password</router-link
                        >
                    </p>
                    <p class="mb-0">
                        <router-link to="/register"
                            >Register a new Administrator</router-link
                        >
                    </p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
        };
    },
    methods: {
        login() {
            axios
                .post("/api/auth/login", this.form)
                .then((res) => console.log(res.data))
                .catch((error) => console.log(error.response.data));
        },
    },
};
</script>
