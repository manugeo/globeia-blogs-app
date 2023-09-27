import { Input } from "../input";

const InputText = ({ label = '', className = '', ...props }) => {
  return (
    <div className={className}>
      {label && <p className="mb-2">{label}</p>}

      <Input {...props} />
    </div>
  );
};

export default InputText;