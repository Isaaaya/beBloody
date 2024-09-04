import { View } from 'react-native';
import UserListItem from './UserListItem';

const UserList = () => {
  return (
    <View>
        {Array(10).fill(null).map((user, index) => <UserListItem key={index} />)}
    </View>
  )
}

export default UserList