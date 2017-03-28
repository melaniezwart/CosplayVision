
//Get project by ID
$stmt = $dbh->prepare("SELECT * FROM projects WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->execute();

//Get projects by userid
$stmt = $dbh->prepare("SELECT * FROM projects WHERE userid = :uid");
$stmt->bindParam(':uid', $userid);
$stmt->execute();

//Get all projects
$stmt = $dbh->prepare("SELECT * FROM projects");
$stmt->execute();

//Search projects by name
$stmt = $dbh->prepare("SELECT * FROM projects WHERE name LIKE %:nam%");
$stmt->bindParam(':nam', $name);
$stmt->execute();

//Insert new project
$stmt = $dbh->prepare("INSERT INTO projects (userid, name) VALUES (:uid, :nam)");
$stmt->bindParam(':uid', $userid);
$stmt->bindParam(':nam', $name);
$stmt->execute();
/*$stmt = $dbh->prepare("SELECT * FROM projects WHERE userid = :uid AND name = :nam)");
$stmt->bindParam(':uid', $userid);
$stmt->bindParam(':nam', $name);
$stmt->execute();*/
//TODO set projectid in variable through select or LAST_INSERT_ID();
$stmt = $dbh->prepare("INSERT INTO tasks (userid, projectid, description, time, cost, finished) VALUES (:uid, :prj, :dsc, :tim, :cos, :fin)");
$stmt->bindParam(':uid', $userid);
$stmt->bindParam(':prj', $projectid);
$stmt->bindParam(':dsc', $description);
$stmt->bindParam(':tim', $time);
$stmt->bindParam(':cos', $cost);
$stmt->bindParam(':fin', $finished);
$stmt->execute();
$stmt = $dbh->prepare("INSERT INTO materialsused (userid, projectid, name, quantitytype, cost, amount) VALUES (:uid, :prj, :nam, :qty, :cos, :amt)");
$stmt->bindParam(':uid', $userid);
$stmt->bindParam(':prj', $projectid);
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':qty', $quantitytype);
$stmt->bindParam(':cos', $cost);
$stmt->bindParam(':amt', $amount);
$stmt->execute();

//Update finished task
$stmt = $dbh->prepare("UPDATE tasks SET finished = :fin WHERE id = :id");
$stmt->bindParam(':fin', $finished);
$stmt->bindParam(':id', $id);
$stmt->execute();

//Edit task
$stmt = $dbh->prepare("UPDATE tasks SET description = :dsc, time = :tim, cost = :cos, finished = :fin WHERE id = :id");
$stmt->bindParam(':dsc', $description);
$stmt->bindParam(':tim', $time);
$stmt->bindParam(':cos', $cost);
$stmt->bindParam(':fin', $finished);
$stmt->bindParam(':id', $id);
$stmt->execute();

//Edit material used
$stmt = $dbh->prepare("UPDATE materialsused SET name = :nam, quantitytype = :qty, cost = :cos, amount = :amt WHERE id = :id");
$stmt->bindParam(':nam', $name);
$stmt->bindParam(':qty', $quantitytype);
$stmt->bindParam(':cos', $cost);
$stmt->bindParam(':amt', $amount);
$stmt->bindParam(':id', $id);
$stmt->execute();

//Get tasks by projectid
$stmt = $dbh->prepare("SELECT * FROM tasks WHERE projectid = :pid");
$stmt->bindParam(':pid', $projectid);
$stmt->execute();

//Get all open tasks by userid
$stmt = $dbh->prepare("SELECT tasks.description, tasks.time, tasks.cost, projects.name FROM tasks INNER JOIN projects ON tasks.projectid = projects.id WHERE userid = :uid AND finished = false INNER JOIN ");
$stmt->bindParam(':uid', $userid);
$stmt->execute();
