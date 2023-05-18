"use client";

export default function AccordionComponent() {
  return (
    <div className="accordion">
      <div className="accordion-box">
        <div className="acc-icon"></div>
        <h2 className="acc-text">Выберите филиал</h2>
      </div>
      <div className="accordion-content">
        <ul>
          <li>абая</li>
          <li>боконбаева</li>
          <li>манаса</li>
          <li>турусбекова</li>
        </ul>
        <h4>С начало вам нужно выбрать филиал</h4>
      </div>
    </div>
  );
}
