import { useForm } from "react-hook-form";

function CreateItemForm() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    console.log(data);

    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <label htmlFor="name">Product name</label>
        <input type="text" id="name" {...register("name")} />
      </div>

      <div className="form-row">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" {...register("amount")} />
      </div>

      <div className="form-row form-row-buttons">
        <button type="submit" className="button primary">
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateItemForm;
