import { Textarea } from "../textarea";

const InputTextarea = ({ label = '', className = '', ...props }) => {
  return (
    <div className={className}>
      {label && <p className="mb-2">{label}</p>}

      <Textarea {...props} />
    </div>
  );
};

export default InputTextarea;