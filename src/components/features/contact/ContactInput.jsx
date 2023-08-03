export default function ContactInput({
  type,
  name,
  inputTag,
  required,
  labelName,
}) {
  const className =
    "border-b-2 bg-transparent py-2 font-normal tracking-wider focus:outline-none";

  const textarea = (
    <textarea className={className} id={name} name={name} rows="5" />
  );
  const input = (
    <input type={type} className={className} id={name} name={name} required />
  );
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>
        {labelName}
        {required && <span className="text-red-500">*</span>}
      </label>

      {inputTag === "input" && input}
      {inputTag === "textarea" && textarea}
    </div>
  );
}
