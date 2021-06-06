import React, { useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Input } from 'reactstrap';
import { Star, Trash } from 'react-bootstrap-icons';

export const FriendListComponent = () => {
  // TODO: Use i18

  //TODO Mock data using mirage
  let friendList = [
    {
      id: 1,
      name: 'Amit Sharma',
      isStarred: true,
    },
    {
      id: 2,
      name: 'Shivangi Sharma',
      isStarred: true,
    },
    {
      id: 3,
      name: 'Akash Singh',
      isStarred: true,
    },
  ];

  const [friendName, setFriendName] = useState('');
  const [data, setFriendsData] = useState(friendList);
  const isYourFriendString = 'is Your Friend';

  const addFriend = target => {
    if (target.charCode === 13) {
      const friendObject = {
        name: friendName,
        isStarred: false,
        id: 4,
      };
      let obj = [...data];
      obj.unshift(friendObject);
      setFriendsData(obj);
      setFriendName('');
    }
  };

  return (
    <>
      <Row>
        <Col sm="4">
          <ListGroup>
            <ListGroupItem tag="li" disabled>
              <ListGroupItemHeading>Friend's List</ListGroupItemHeading>
            </ListGroupItem>

            <ListGroupItem>
              <Input
                type="text"
                placeholder="Enter your friend's name"
                onKeyPress={addFriend}
                value={friendName}
                onChange={e => setFriendName(e.target.value)}
              />
            </ListGroupItem>

            {data?.map(({ name, id, isStarred }) => {
              return (
                <ListGroupItem key={`${id}-${name}`}>
                  <Row>
                    <Col sm="9">
                      <ListGroupItemHeading>{name}</ListGroupItemHeading>
                      <ListGroupItemText>{isYourFriendString}</ListGroupItemText>
                    </Col>
                    <Col sm="1">
                      <Star />
                    </Col>
                    <Col
                      sm="2"
                      onClick={() => {
                        console.log('hii');
                      }}>
                      <Trash />
                    </Col>
                  </Row>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default FriendListComponent;
