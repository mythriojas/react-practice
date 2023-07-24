function Button(props) {
  return (
    <div>
      <button className="bg-red-400  text-white px-5 hover:bg-red-500 py-5 rounded-full">
       {props.buttonName}
      </button>
    </div>
  );
}
export default Button;
