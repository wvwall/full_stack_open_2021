const Filter = ({ filter }) => {
  const handleChange = (e) => {
    e.preventDefault();
    // input-field value is in variable event.target.value
    filter(e.target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
