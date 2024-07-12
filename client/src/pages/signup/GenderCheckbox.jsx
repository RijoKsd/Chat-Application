const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="male" className={`label gap-2 cursor-default`}>
          <span className="text-white label-text">Male</span>
          <input
            type="checkbox"
            id="male"
            className="checkbox checkbox-primary border-slate-900"
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="female" className={`label gap-2 cursor-default`}>
          <span className="text-white label-text">Female</span>
          <input
            type="checkbox"
            id="female"
            className="checkbox checkbox-primary border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
