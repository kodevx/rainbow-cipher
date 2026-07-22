import { useFormikContext } from "formik";

import type { CryptoFieldInputValues } from "../../CryptoInputs/types/cryptoInputs";

const useSequenceKeyField = () => {

    const { setFieldValue, values } = useFormikContext<CryptoFieldInputValues>();

    const handleOnDragStart = (e: React.DragEvent<HTMLElement>) => {
        e.dataTransfer.setData("text", e.currentTarget.id);
    };

    const handleOnDragOver = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
    }

    const handleOnElementDrop = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();

        const id = e.dataTransfer.getData("text");
        const draggedElement = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
        
        console.log("dragged id: ",document.getElementById(id)?.id);
        console.log("current id: ",e.currentTarget.id);

        if (draggedElement) {

            // update the value key of the swapped html input elements to simulate drag-and drop
            const tempValue: string = e.currentTarget.value;
            e.currentTarget.value = draggedElement.value;
            draggedElement.value = tempValue;

            // Update the formik state values of the swapped fields
            const currentElementId = e.currentTarget.id as keyof CryptoFieldInputValues;
            const draggedElementId = draggedElement.id as keyof CryptoFieldInputValues;

            const value1 = values[currentElementId];
            const value2 = values[draggedElementId];

            setFieldValue(currentElementId, value2);
            setFieldValue(draggedElementId, value1);
        }
    };
    
    return {
        handleOnDragStart,
        handleOnDragOver,
        handleOnElementDrop
    }
}

export default useSequenceKeyField;
