import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
const List = ({ listItems, handleCheck, handleDelete }) => {
  return (
    <ListGroup>
      {listItems.map((listItem, index) => {
        return (
          <ListGroup.Item key={index} className="display-6 text-center d-flex flex-column justify-content-between">
            {listItem.text}
              <span className="p-0">
              <Button className="mx-1 px-4" variant="success" onClick={handleCheck} data-id={index}>
                ✓
              </Button>
              <Button className="mx-1 px-4" variant="danger" onClick={handleDelete} data-id={index}>
                ✗
              </Button>
              </span>
              
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default List;
