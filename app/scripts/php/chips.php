//Get chips by type
$stmt = $dbh->prepare("SELECT * FROM chips WHERE type = :typ");
$stmt->bindParam(':typ', $type);
$stmt->execute();

//Search chip by name
$stmt = $dbh->prepare("SELECT * FROM chips WHERE name LIKE %:nam%");
$stmt->bindParam(':nam', $name);
$stmt->execute();

//Insert new chip
$stmt = $dbh->prepare("INSERT INTO chips (type, name, mainmaterial) VALUES (:typ, :nam, :mat");
$stmt->bindParam(':typ', $type);
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':mat', $mainmaterial);
$stmt->execute();
//TODO put chipid in local variable with LAST_INSERT_ID();
$stmt = $dbh->prepare("INSERT INTO chiptasks (chipid, description, time, cost) VALUES (:cid, :dsc, :tim, :cos");
$stmt->bindParam(':cid', $chipid);
$stmt->bindParam(':dsc', $description);
$stmt->bindParam(':tim', $time);
$stmt->bindParam(':cos', $cost);
$stmt->execute();
$stmt = $dbh->prepare("INSERT INTO chiptasks (chipid, description, time, cost) VALUES (:cid, :dsc, :tim, :cos");
$stmt->bindParam(':cid', $chipid);
$stmt->bindParam(':dsc', $description);
$stmt->bindParam(':tim', $time);
$stmt->bindParam(':cos', $cost);
$stmt->execute();
