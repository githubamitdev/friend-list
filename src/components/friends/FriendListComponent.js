import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Input, Button } from 'reactstrap';
import { Star, Trash, StarFill } from 'react-bootstrap-icons';

export const FriendListComponent = () => {
  // TODO: Use i18

  const generatRandomId = () => Math.random().toString(36).substr(2, 9);

  //TODO Mock data using mirage server
  let friendList = [
    {
      id: generatRandomId(),
      name: 'Amit Sharma',
      isStarred: true,
    },
    {
      id: generatRandomId(),
      name: 'Shivangi Sharma',
      isStarred: false,
    },
    {
      id: generatRandomId(),
      name: 'Akash Singh',
      isStarred: true,
    },
  ];

  const [friendName, setFriendName] = useState('');
  const [data, setFriendsData] = useState(friendList);
  const [isStarredSort, setIsStarredSort] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const isYourFriendString = 'is Your Friend';

  useEffect(() => {
    const sorted = [...data]?.sort((a, b) => {
      return isStarredSort ? b['isStarred'] - a['isStarred'] : a['isStarred'] - b['isStarred'];
    });
    setFriendsData(sorted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStarredSort]);

  const addFriend = target => {
    if (target.charCode === 13) {
      const friendObject = {
        name: friendName,
        isStarred: false,
        id: generatRandomId(),
      };

      let friendData = [...data];
      friendData.unshift(friendObject);
      setFriendsData(friendData);
      setFriendName('');
    }
  };

  const updateStarredFriend = id => {
    const friendList = [...data];
    let index = friendList?.findIndex(obj => obj.id === id);
    friendList[index].isStarred = !friendList[index].isStarred;
    setFriendsData(friendList);
  };

  const deleteFriend = id => {
    // setIsLoading(true);
    const filteredList = data?.filter(item => item.id !== id);
    // setTimeout(() => {
    setFriendsData(filteredList);
    //   setIsLoading(false);
    // }, 2000);
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
              <Row>
                <Col sm="10">
                  <Input
                    type="text"
                    placeholder="Enter your friend's name"
                    onKeyPress={addFriend}
                    value={friendName}
                    onChange={e => setFriendName(e.target.value)}
                  />
                </Col>
                <Col sm="1">
                  {isStarredSort ? (
                    <StarFill onClick={() => setIsStarredSort(!isStarredSort)} />
                  ) : (
                    <Star onClick={() => setIsStarredSort(!isStarredSort)} />
                  )}
                </Col>
              </Row>
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
                      {isStarred ? (
                        <StarFill onClick={() => updateStarredFriend(id)} />
                      ) : (
                        <Star onClick={() => updateStarredFriend(id)} />
                      )}
                    </Col>
                    <Col sm="2">
                      <Button variant="light">
                        <Trash onClick={() => deleteFriend(id)} />
                      </Button>
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
