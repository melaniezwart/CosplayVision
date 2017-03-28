//Get all materials
$stmt = $dbh->prepare("SELECT * FROM materials");
$stmt->execute();

//Get material by id
$stmt = $dbh->prepare("SELECT * FROM materials WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->execute();

//Get materials by userid
$stmt = $dbh->prepare("SELECT * FROM materials WHERE userid = :uid");
$stmt->bindParam(':uid', $userid);
$stmt->execute();

//Get materials by projectid
$stmt = $dbh->prepare("SELECT * FROM materials WHERE projectid = :pid");
$stmt->bindParam(':pid', $projectid);
$stmt->execute();

//Get all materials made by users
$stmt = $dbh->prepare("SELECT * FROM materials WHERE userid != 0");
$stmt->execute();

//Get material by name
$stmt = $dbh->prepare("SELECT * FROM materials WHERE name LIKE %:nam% AND userid = 0 OR userid = :uid");
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':uid', $userid);
$stmt->execute();

//Insert new material with or without userid (otherwise userid = 0)
$stmt = $dbh->prepare("INSERT INTO materials (userid, name, quantitytype, cost, link) VALUES (:uid, :nam, :qty, :cos, :lnk)");
$stmt->bindParam(':uid', $userid);
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':qty', $quantitytype);
$stmt->bindParam(':cos', $cost);
$stmt->bindParam(':lnk', $link);
$stmt->execute();

//Get all common materials + user defined
$stmt = $dbh->prepare("SELECT * FROM materials WHERE userid = 0 OR userid = :uid");
$stmt->bindParam(':uid', $userid);
$stmt->execute();

//Update material
$stmt = $dbh->prepare("UPDATE materials SET name = :nam, quantitytype = :qty, cost = :cos, link = :lnk WHERE id = :id");
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':qty', $quantitytype);
$stmt->bindParam(':cos', $cost);
$stmt->bindParam(':lnk', $link);
$stmt->bindParam(':id', $id);
$stmt->execute();
