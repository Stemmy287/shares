import React, {FC} from 'react';
import s from 'common/compontnes/Table/TableBody/tableBody.module.scss'
import {DomainSharesType, paginator, setShares} from "features/Shares/sharesSlice";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {useAppDispatch} from "hooks/useAppDispatch";
import {useAppSelector} from "hooks/useAppSelector";
import {sharesSelector} from "features/Shares/sharesSelectors";

type PropsType = {
  items: DomainSharesType[]
}

export const TableBody: FC<PropsType> = ({items}) => {

  const dispatch = useAppDispatch()

  const Shares = useAppSelector(sharesSelector)

  const handleDragEnd = (result: any) => {
    const array = Array.from(Shares)
    const [reorderedItem] = array.splice(result.source.index, 1)
    array.splice(result.destination.index, 0, reorderedItem)
    dispatch(setShares(array))
    dispatch(paginator())
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={'table-body'}>
        {(provided) => (
          <tbody {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((el, i) =>
            <Draggable draggableId={el.order.toString()} key={el.order} index={i}>
              {(provided) => (
                <tr className={s.cells}
                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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

