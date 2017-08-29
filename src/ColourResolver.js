const ColourResolver = (group) => {
  switch (group){
    case 1:
      return 'red';
    case 2:
      return 'blue';
    default:
      return 'black';
  }
};

export default ColourResolver;
