"use client";

import {List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AllUsers = () => {
    const [users, setUsers] = useState("");
useEffect(() => {
    const fetchAllUsers = async () => {
        const response = await fetch("/api/users");
        const usersInfo = await response.json();
        setUsers(usersInfo.data);
      };
      fetchAllUsers();
    
}, [])
    return(<section>
         <div>
      {users &&
        users.map((user) => (
          <Card key={user.id} className="mb-4">
            <List>
              <ListItem>{user.name}</ListItem>
            </List>
          </Card>
        ))}
    </div>
    </section>)
}
export default AllUsers;