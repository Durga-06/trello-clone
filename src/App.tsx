import { AddNewItem } from "./AddNewItems";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export const App = () => {
  return <AppContainer>
    <Column text="Todo:" />
    <AddNewItem onAdd={(e) => console.log(e)} toggleButtonText=" + Add another list" />
  </AppContainer>;
};
