const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          htmlFor="male"
          className={`label gap-2 cursor-default ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="text-white label-text">Male</span>
          <input
            type="checkbox"
            id="male"
            className="checkbox checkbox-primary border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          htmlFor="female"
          className={`label gap-2 cursor-default default ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="text-white label-text">Female</span>
          <input
            type="checkbox"
            id="female"
            className="checkbox checkbox-primary border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
