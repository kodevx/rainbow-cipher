
const useSequenceKeyField = () => {

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
    
            if (draggedElement) {
                const initialElementValue: string = e.currentTarget.value;
                e.currentTarget.value = draggedElement.value;
                draggedElement.value = initialElementValue;
            }
        };
    
    return {
        handleOnDragStart,
        handleOnDragOver,
        handleOnElementDrop
    }
}

export default useSequenceKeyField;
