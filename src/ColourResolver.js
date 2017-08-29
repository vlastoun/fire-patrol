const ColourResolver = (group) => {
  switch (group){
    case 1:
      return 'blue';
    case 2:
      return 'red';
    default:
      return 'black';
  }
};

export default ColourResolver;
