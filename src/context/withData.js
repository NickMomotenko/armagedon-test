import React from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [destrictionList, setDestrictionList] = React.useState([]);

  const addItemToDesctrictionList = (item) => {
    setDestrictionList([...destrictionList, item]);
  };

  return (
    <DataContext.Provider
      value={{ destrictionList, addItemToDesctrictionList }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const withData = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DataContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </DataContext.Consumer>
      );
    }
  };
};
