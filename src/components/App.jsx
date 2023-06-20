import Profile from "./Profile/Profile";
import profileData from "../data/user.json";
import Statistics from "./Statistics/Statistics";
import statData from "../data/data.json";
import FriendsList from "./FriendList/FriendsList";
import friendsData from "../data/friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import tranData from "../data/transactions.json"




export const App = () => {
  return ( 
    <>
    
     <Profile
     username={profileData.username}
     tag={profileData.tag}
     location={profileData.location}
     avatar={profileData.avatar}
     stats={profileData.stats}
     />

    <Statistics
    stats={statData} 
    title={"UPLOAD STATS"}
    />

    <FriendsList
    friends={friendsData}
    />

    <TransactionHistory
    items={tranData}
    />

    </>
    
  );
};
