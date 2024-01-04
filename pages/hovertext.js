import Header from "@/components/header";
import Container from "@/components/container";
import Layout from "@/components/layout";

export default function HoverText() {
  return (
    <Layout>
      <Header />
    <Container>
      <h1 className="page-title mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">
                Hover - Text
              </h1>
      <div>
        <h1>Hover Styles - Text</h1>
        <div className="grid">
          Hollow Text
          <a href="#" className="text-hover-pointer hollow-text">
            Harry
          </a>
        </div>
        <p> Underline</p>
        <div className="flex">
          <a href="#" className="text-hover-pointer underline-hover">
            Potter
          </a>
        </div>
        <div className="flex">
          <a href="#" className="text-bold text-hover-pointer link link--metis">
            Ron
          </a>
        </div>
        <p>Strikethrough</p>
        <div className="flex">
          <a href="#" className="text-hover-pointer strikethrough-hover">
            Weasley
          </a>
        </div>
        <div className="flex">
          <a href="#" className="text-hover-pointer link link--ersa">
            Hermione
          </a>
        </div>
        <div className="content-item">
          <a href="#" className="text-hover-pointer link link--herse">
            <span>Granger</span>
            {/* <svg
              class="link__graphic link__graphic--stroke link__graphic--arc"
              width="100%"
              height="18"
              viewBox="0 0 59 18"
            >
              <path
                d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
                pathLength="1"
              ></path>
            </svg> */}
            <svg
              class="link__graphic link__graphic--stroke link__graphic--arc"
              width="100%"
              height="18"
              viewBox="0 0 59 18"
            >
              <path
                d="M0.945007 0.364258C12.3 39.4583 43.573 55.176 58.785 26.5027Z"
                pathLength="1"
              />
            </svg>
            )
          </a>
        </div>
      </div>
      <div class="container mx-auto mt-10">
        <ul class="divide-y divide-gray-200">
          <li class="py-4 px-6 flex items-center justify-between bg-gray-100 shadow-md">
            <span class="text-gray-800">Item 1</span>
          </li>
          <li class="py-4 px-6 flex items-center justify-between bg-gray-100 shadow-md">
            <span class="text-gray-800">Item 2</span>
          </li>
          <li class="py-4 px-6 flex items-center justify-between bg-gray-100 shadow-md">
            <span class="text-gray-800">Item 3</span>
          </li>
        </ul>
      </div>
    </Container>
   </Layout>
  );
}
