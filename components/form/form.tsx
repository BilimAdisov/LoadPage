export default function FormComponent() {
  return (
    <>
      <div className="form">
        <div className="form-wrapper">
          <h1>Вход</h1>
          <input type="text" className="form-mail" placeholder="E-mail" />
          <input type="password" className="form-pass" placeholder="Password" />
          <button className="form-btn">Войти</button>
        </div>
      </div>
    </>
  );
}
