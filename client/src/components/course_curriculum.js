import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CourseCurriculum = ()=> {
  const [block, updateblock] = useState([]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(block);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateblock(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{display:'inline'}}>Create Course Curriculum</h1>
        <button style={{float:'right',margin:'2%',padding:'1%',borderRadius:'15px',cursor:'pointer'}}>+</button>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="block">
            {(provided) => (
              <ul className="block" {...provided.droppableProps} ref={provided.innerRef}>
                {block.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="block-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default CourseCurriculum;