import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";


export default function Card() {
  return (
    <Layout>
      

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.div variants={fade}>
              <h1 className="page-title mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
                Card(s)
              </h1>
              <div className="content mb-4 max-w-3xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>

                <p>
                  Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </m.div>

            <div className="section">
              <h2 className="sub-title">Set 1: 3-column</h2>
              <div className="element-wrapper card-set-1">
                <div role="list" class="home_exhibits_grid w-dyn-items">
                  <div role="listitem" class="exhibit_card_item w-dyn-item">
                    <a
                      href="/exhibit/portland-the-lost-city-of-jazz"
                      class="exhibit_card w-inline-block card-bg"
                    >
                      <img
                        src="https://media.pitchfork.com/photos/6410bc0eeefe0bc1d1e7f60c/1:1/w_320,c_limit/Animal-Collective.jpg"
                        loading="lazy"
                        alt="Spirit They’re Gone, Spirit They’ve Vanished (Remastered 2023)"
                        sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, (max-width: 991px) 43vw, 27vw"
                        class="exhibit_thumbnail"
                      />
                      <div class="exhibit_card--wrapper">
                        <div class="heading_wrapper">
                          <h3 class="exhibit_card_heading">
                            Animal Collective
                          </h3>
                          <div class="label_card">
                            <p class="label">EXPERIMENTAL</p>
                          </div>
                        </div>
                        <p className="album-title">
                          Spirit They’re Gone, Spirit They’ve Vanished
                          (Remastered 2023)
                        </p>
                        <div class="card_button--wrapper">
                          <div class="text_button">
                            <div>View album</div>
                            <div class="text_link_arrow">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" class="exhibit_card_item w-dyn-item">
                    <a
                      href="/exhibit/the-black-history-of-cowboys-and-cowboy-music"
                      class="exhibit_card w-inline-block card-bg"
                    >
                      <img
                        src="https://media.pitchfork.com/photos/6452a4a755652b7e4c17bd00/1:1/w_320/Tolerance-Anonym.jpg"
                        loading="lazy"
                        alt="Tolerance album"
                        sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, (max-width: 991px) 43vw, 27vw"
                        class="exhibit_thumbnail"
                      />
                      <div class="exhibit_card--wrapper">
                        <div class="heading_wrapper">
                          <h3 class="exhibit_card_heading">Tolerance</h3>
                          <div class="label_card w-condition-invisible">
                            <p class="label">ELECTRONIC</p>
                          </div>
                        </div>
                        <p className="album-title">Anonym</p>
                        <div class="card_button--wrapper">
                          <div class="text_button">
                            <div>View album</div>
                            <div class="text_link_arrow">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" class="exhibit_card_item w-dyn-item">
                    <a
                      href="/exhibit/the-roots-of-the-banjo"
                      class="exhibit_card w-inline-block card-bg"
                    >
                      <img
                        src="https://media.pitchfork.com/photos/63f78442794387b6fb426c5e/1:1/w_450%2Cc_limit/Braid.jpg"
                        loading="lazy"
                        alt="The Roots of the Banjo"
                        sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, (max-width: 991px) 43vw, 27vw"
                        class="exhibit_thumbnail"
                      />
                      <div class="exhibit_card--wrapper">
                        <div class="heading_wrapper">
                          <h3 class="exhibit_card_heading">Braid</h3>
                          <div class="label_card w-condition-invisible">
                            <p class="label">NEW</p>
                          </div>
                        </div>
                        <p className="album-title">
                          Frame & Canvas (25th Anniversary Edition)
                        </p>
                        <div class="card_button--wrapper">
                          <div class="text_button">
                            <div>View album</div>
                            <div class="text_link_arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="credit flex justify-end">
                <span className="text-sm">pitchfork.com</span>
              </div>
            </div>

            <div className="section">
              <h2 className="sub-title">Set 2: 3-column</h2>
              <div className="element-wrapper card-set-2"></div>
            </div>
          </Container>

          <Container>
            <div>
              <article className="shadow"></article>
            </div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
