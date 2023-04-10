import React, {FC} from 'react';
import s from 'common/compontnes/Table/TableBody/tableBody.module.scss'
import {DomainSharesType, paginator, setShares} from "features/Shares/sharesSlice";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {useAppDispatch} from "hooks/useAppDispatch";
import {useAppSelector} from "hooks/useAppSelector";
import {currentPageSelector, pageSizeSelector, sharesSelector} from "features/Shares/sharesSelectors";

type PropsType = {
  items: DomainSharesType[]
}

export const TableBody: FC<PropsType> = ({items}) => {

  const dispatch = useAppDispatch()

  const shares = useAppSelector(sharesSelector)

  const currentPage = useAppSelector(currentPageSelector)

  const pageSize = useAppSelector(pageSizeSelector)

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const array = Array.from(shares)

    const [reorderedItem] = array.splice(result.source.index, 1)

    array.splice(result.destination.index, 0, reorderedItem)
    dispatch(setShares(array))
    dispatch(paginator())

  };

  const getItemStyle = (isDragging: any, draggableStyle: any) => {

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

