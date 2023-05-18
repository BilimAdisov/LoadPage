export default function ModalComponent({ open, close, children }: any) {
  return (
    <div className={open ? "modal active" : "modal"} onClick={close}>
      <div
        className={open ? "modal-forma active" : "modal-forma"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
