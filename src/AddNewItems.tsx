import { useState } from "react";
import { AddItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";

type AddNewItemsProps = {
  onAdd: (text: string) => void;
  dark?: boolean;
  toggleButtonText: string;
};

export const AddNewItem = ({
  onAdd,
  dark,
  toggleButtonText,
}: AddNewItemsProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
        formButtonText={"Create"}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
