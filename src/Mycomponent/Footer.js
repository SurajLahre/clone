import React from 'react'

function Footer() {
    return (
        <footer class="bd-footer py-2 py-md-4 mt-5 bg-body-tertiary bg-light position-abselute bottom-0">
            <div class="container px-2 px-md-3 text-body-secondary">
                <div class="row">
                    <div class="col-lg-3 mb-3">
                        <a class="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Bootstrap">
                            <span class="fs-5">Suraj Lahre</span>
                        </a>
                        <ul class="list-unstyled small">
                            <li class="mb-2">Designed and built with all the<br />love in the world by the with the help of Suraj lahre</li>

                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="/">Home</a></li>
                            <li class="mb-2"><a href="/">Swag Store</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Guides</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="/">Getting started</a></li>
                            <li class="mb-2"><a href="/">Starter template</a></li>

                        </ul>
                    </div>

                    <div class="col-6 col-lg-2 mb-3">
                        <h5>Community</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="/">Issues</a></li>
                            <li class="mb-2"><a href="/">Discussions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            © 2023 SurajLahre. All Rights Reserved | Terms and Conditions
        </footer>
    )
}

export default Footer
