const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(e) {
  const id = e.target.dataset.id;

  for (let i = 0; i < faqs.length; i++) {
    const element = faqs[i];
    const cls = element.querySelector("p").classList;
    if (id == i + 1 && cls.contains("hidden")) {
      element.querySelector("p").classList.remove("hidden");
      element.querySelector(".show_btn").innerText = "-";
    } else if (id == i + 1 && !cls.contains("hidden")) {
      element.querySelector("p").classList.add("hidden");
      element.querySelector(".show_btn").innerText = "+";
    }
  }
}

function createFaq() {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < faqData.length; i++) {
    const faqDiv = document.createElement("div");
    faqDiv.classList.add("faq");

    const faqHeader = document.createElement("div");
    faqHeader.classList.add("faq_header");

    const h3 = document.createElement("h3");
    const h3Text = document.createTextNode(faqData[i].question);
    h3.appendChild(h3Text);

    const p = document.createElement("p");
    const pText = document.createTextNode(faqData[i].answer);
    p.appendChild(pText);
    p.classList.add("hidden");

    const btn = document.createElement("button");
    const btnText = document.createTextNode("+");
    btn.appendChild(btnText);
    btn.classList.add("show_btn");
    btn.setAttribute("data-id", faqData[i].id);
    btn.addEventListener("click", showFaq);

    faqHeader.appendChild(h3);
    faqHeader.appendChild(btn);

    faqDiv.appendChild(faqHeader);
    faqDiv.appendChild(p);

    fragment.appendChild(faqDiv);

    faqs.push(faqDiv);
  }

  accordianBody.appendChild(fragment);
}

createFaq();

function btnStatusUpdate(element) {
  element.querySelector(".show_btn").innerText = "-";
}
