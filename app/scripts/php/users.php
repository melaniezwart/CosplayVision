//Get all users
$stmt = $dbh->prepare("SELECT * FROM users");
$stmt->execute();

//Get user by id
$stmt = $dbh->prepare("SELECT * FROM users WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->execute();

//Search user by username
$stmt - $dbh->prepare("SELECT * FROM users WHERE username LIKE %:nam%");
$stmt->bindParam(':nam', $username);
$stmt->execute();

//Update likes
$stmt - $dbh->prepare("UPDATE users SET likes = :lik WHERE id = :id");
$stmt->bindParam(':lik', $likes);
$stmt->bindParam(':id', $id);
$stmt->execute();

//Add new user
$stmt = $dbh->prepare("INSERT INTO users (name, username, email) VALUES (:nam, :usr, :eml)");
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':usr', $username);
$stmt->bindParam(':eml', $email);
$stmt->execute();

$stmt = $dbh->prepare("INSERT INTO login (username, password, userid) VALUES (:usr, :psw, LAST_INSERT_ID())");
$stmt->bindParam(':usr', $username);
$stmt->bindParam(':psw', $password);
$stmt->execute();

//Update user
$stmt = $dbh->prepare("UPDATE users SET name = :nam, email = :eml, private = :prv, website = :wbs, facebook = :fcb, twitter = :twt, instagram = :ins, twitch = :twc, deadlinereminders = :dlr, monthlyupdates = :mth, language = :lng, currency = :cur WHERE id = :id");
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':eml', $email);
$stmt->bindParam(':prv', $private);
$stmt->bindParam(':wbs', $website);
$stmt->bindParam(':fcb', $facebook);
$stmt->bindParam(':twt', $twitter);
$stmt->bindParam(':ins', $instagram);
$stmt->bindParam(':twc', $twitch);
$stmt->bindParam(':dlr', $deadlinereminders);
$stmt->bindParam(':mth', $monthlyupdates);
$stmt->bindParam(':lng', $language);
$stmt->bindParam(':cur', $currency);
$stmt->bindParam(':id', $id);
$stmt->execute();

//Update password
$stmt = $dbh->prepare("UPDATE login SET password = :psw WHERE userid = :uid");
$stmt->bindParam(':psw', password);
$stmt->bindParam(':uid', $userid);
$stmt->execute();
