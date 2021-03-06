import { IntColumn, SerialColumn, Table, TextColumn, TimestampColumn } from "@";

export class UsersTable extends Table {
  id = new SerialColumn();
  name = new TextColumn();
}

export class PostsTable extends Table {
  id = new SerialColumn();
  authorId = new IntColumn().references(UsersTable, "id");
  body = new TextColumn();
  createdAt = new TimestampColumn()
    .defaultCurrentTimestamp()
    .sqlName("creation_timestamp");
}
