## Generate class with Angular CLI

```
$ng generate class models/user
```

## Use class in component

```
import { User } from './../models/user';
users: User[] = [];

const user = new User(fullName, false);
this.users.push(user);
```
