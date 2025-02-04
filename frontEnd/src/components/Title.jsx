import { useState } from "react";

const TitleUpdater = () => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    event.preventDefault(); // Prevents the default form behavior
    setTitle(event.target.value);
  };

  return (
    <div className="text-center">
      <input
        type="text"
        value={title}
        onChange={handleChange}
        className="form-control mb-3"
        placeholder="Type title here"
      />
      <h1
        className="fw-bold border border-primary p-3"
        style={{
          fontFamily: "'Sora', sans-serif",
          boxShadow:
            "0 7px 3px 0 rgba(70, 130, 180, 0.2), 0 2px 10px 0 rgba(70, 130, 180, 0.19)",
        }}
      >
        {title || "Default Title"}
      </h1>
    </div>
  );
};

export default TitleUpdater;
