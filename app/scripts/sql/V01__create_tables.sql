CREATE TABLE login (
  id          INT           AUTO_INCREMENT,
  userid      INT,
  username    VARCHAR(30)   NOT NULL UNIQUE,
  password    VARCHAR(30)   NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (userid) REFERENCES users(id)
);
CREATE TABLE users (
  id          int               AUTO_INCREMENT,
  name        varchar(255),
  username    varchar(30)       NOT NULL UNIQUE,
  email       varchar(255)      NOT NULL,
  datejoined  date              DEFAULT GETDATE(),
  private     boolean           DEFAULT false,
  website     text,
  facebook    text,
  twitter     text,
  instagram   text,
  tumblr      text,
  twitch      text,
  likes       int,
  deadlinereminders boolean     DEFAULT true,
  monthlyupdates    boolean     DEFAULT true,
  language          varchar(20) DEFAULT 'enUS',
  currency          varchar(20) DEFAULT 'euro',
  primary key(id)
);
CREATE TABLE projects (
  id            int       AUTO_INCREMENT,
  userid        int       NOT NULL,
  name          varchar(255),
  timespent     int,
  moneyspent    int,
  datestarted   date      DEFAULT GETDATE(),
  datefinished  date,
  finished      boolean   DEFAULT false,
  private       boolean   DEFAULT false,
  likes         int,
  primary key(id),
  FOREIGN KEY (userid) REFERENCES users(id)
);
CREATE TABLE materials (
  id              int     AUTO_INCREMENT,
  name            varchar(100),
  quantitytype    varchar(50),
  cost            int,
  userid          int,
  link            text,
  primary key(id)
);
CREATE TABLE materialsused(
  id            int       AUTO_INCREMENT,
  userid        int       NOT NULL,
  projectid     int       NOT NULL,
  name          varchar(100)   NOT NULL,
  quantitytype  varchar(50)   NOT NULL,
  cost          int       NOT NULL,
  amount        int       NOT NULL,
  primary key(id),
  FOREIGN KEY (userid) REFERENCES users(id),
  FOREIGN KEY (projectid) REFERENCES projects(id)
);
CREATE TABLE tasks (
  id            int     AUTO_INCREMENT,
  userid        int     NOT NULL,
  projectid     int     NOT NULL,
  description   text    NOT NULL,
  time          int     NOT NULL,
  cost          int     NOT NULL,
  finished      boolean DEFAULT false,
  primary key(id),
  FOREIGN KEY (userid) REFERENCES users(id),
  FOREIGN KEY (projectid) REFERENCES projects(id)
);
CREATE TABLE chips (
  id      int       AUTO_INCREMENT,
  type    varchar(50)   NOT NULL,
  name    varchar(50)   NOT NULL,
  mainmaterial  varchar(100),
  primary key(id)
);
CREATE TABLE chiptasks (
  id            int   AUTO_INCREMENT,
  chipid        int   NOT NULL,
  description   text  NOT NULL,
  time          int   NOT NULL,
  cost          int   NOT NULL,
  primary key(id),
  FOREIGN KEY (chipid) REFERENCES chips(id)
);
CREATE TABLE chipmaterials (
  id          int   AUTO_INCREMENT,
  chipid      int   NOT NULL,
  materialid  int   NOT NULL,
  amount      int   NOT NULL,
  primary key(id),
  FOREIGN KEY (chipid) REFERENCES chips(id)
);
