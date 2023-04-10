import React, {FC} from 'react';
import s from 'common/compontnes/Table/TableBody/tableBody.module.scss'
import {DomainStockType, paginator, setStock} from "features/Stock/stockSlice";
import {DragDropContext, Draggable, DraggingStyle, Droppable, DropResult, NotDraggingStyle} from "react-beautiful-dnd";
import {useAppDispatch} from "hooks/useAppDispatch";
import {useAppSelector} from "hooks/useAppSelector";
import {currentPageSelector, pageSizeSelector, stockSelector} from "features/Stock/stockSelectors";

type PropsType = {
  items: DomainStockType[]
}

export const TableBody: FC<PropsType> = ({items}) => {

  const dispatch = useAppDispatch()

  const stock = useAppSelector(stockSelector)

  const currentPage = useAppSelector(currentPageSelector)

  const pageSize = useAppSelector(pageSizeSelector)

  const handleDragEnd = (result: DropResult) => {

    if (!result.destination) return

    const array = Array.from(stock)

    const [reorderedItem] = array.splice(result.source.index, 1)

    array.splice(result.destination.index, 0, reorderedItem)
    dispatch(setStock(array))
    dispatch(paginator())

  };

  const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined) => {

    return {
      background: isDragging ? '#F8346B' : '',
      color: isDragging ? '#FCFCFB' : '',
      display: isDragging ? 'flex' : '',
      justifyContent: isDragging ? 'space-around' : '',
      ...draggableStyle
    }
    
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={'table-body'}>
        {(provided) => (
          <tbody {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((el, i) =>
            <Draggable draggableId={el.order.toString()} key={el.order} index={currentPage > 1 ? i + (pageSize * (currentPage - 1)) : i}>
              {(provided, snapshot) => (
                <tr className={s.cells}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                >
                  <td>{el.order}</td>
                  <td>{el.open}</td>
                  <td>{el.close}</td>
                  <td>{el.high}</td>
                  <td>{el.low}</td>
                  <td>{el.volume}</td>
                  <td>{el.date}</td>
                </tr>
              )}
            </Draggable>
          )}
          {provided.placeholder}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
};

