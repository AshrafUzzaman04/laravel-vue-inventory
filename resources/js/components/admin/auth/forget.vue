<template>
    <div>
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"
                        ><b>Forget</b>Password</a
                    >
                </div>
                <div class="card-body">
                    <p class="login-box-msg">
                        Enter your email to recover your account
                    </p>

                    <form action="../../index3.html" method="post">
                        <div class="input-group mb-3">
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <!-- /.col -->
                            <div class="col-12">
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
