import './style.css';

import carImg from '../../assets/car.png';

export default function Container() {
    return (
        <>
            <main>

                <h2>Venha nos visitar</h2>
                <div className="container-ct">

                    <section className="card-content">
                        <div className="article-card">
                            <article>
                                <section>
                                    <figure>
                                        <img src={carImg} alt="Carro" />
                                        <figcaption>
                                            Lorem ipsum dolor
                                        </figcaption>
                                    </figure>
                                </section>
                            </article>
                        </div>

                        <div className='article-card'>
                            <article>
                                <section>
                                    <figure>
                                        <img src={carImg} alt="Carro" />
                                        <figcaption>
                                            Lorem ipsum dolor
                                        </figcaption>
                                    </figure>
                                </section>
                            </article>
                        </div>
                    </section>
                </div>

                <section className="comment-content pb-20">
                    <h3>O que estão dizendo</h3>

                    <div className="container-ct">
                        <div className="grid-container-ct">

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                            <div className="comment-content-article">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                            </div>

                        </div>
                    </div>
                </section>

            </main >
        </>
    );
}