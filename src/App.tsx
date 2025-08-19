import { AddNewItem } from "./AddNewItems";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} text={list.text} id={list.id} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch(addList(text))}
        toggleButtonText=" + Add another list"
      />
    </AppContainer>
  );
};
