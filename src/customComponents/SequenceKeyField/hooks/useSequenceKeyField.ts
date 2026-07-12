
const useSequenceKeyField = () => {

        const handleOnDragStart = (e: React.DragEvent<HTMLElement>) => {
            e.dataTransfer.setData("text", e.currentTarget.id);
        };
    
        const handleOnDragOver = (e: React.DragEvent<HTMLElement>) => {
            e.preventDefault();
        }
    
        const handleOnElementDrop = (e: React.DragEvent<HTMLElement>) => {
            e.preventDefault();
    
            const id = e.dataTransfer.getData("text");
            const draggedElement = document.getElementById(id);
    
            if (draggedElement) {
                const initialElementValue: string = e.currentTarget.textContent;
                e.currentTarget.textContent = draggedElement.textContent;
                draggedElement.textContent = initialElementValue;
            }
        };
    
    return {
        handleOnDragStart,
        handleOnDragOver,
        handleOnElementDrop
    }
}

export default useSequenceKeyField;
