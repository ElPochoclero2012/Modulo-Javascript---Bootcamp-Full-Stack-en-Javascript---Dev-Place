import React from 'react'

const questionList = [
  { question: "¿What are the payment methods?", answer: "You can use all the cards in existence"},
  { question: "¿How long does the shipment take?", answer: "3 to 5 business day"},
  { question: "¿Is there a refund?", answer: "Of course! Just contact us."}
];

function FAQ() {
  return (
    <>
    <h1 className="Title"> FAQ (FREQUENTLY ASKED QUESTION) </h1>
      <div className="card-container">
      {questionList.map((element, key) => {
        return(
          <div class="card" key={key}>
          <h1>{element.question}</h1>
          <p>{element.answer}</p>
        </div>
        )
      })}
      </div>
      </>
  )
}

export default FAQ