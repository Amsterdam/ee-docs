# Database
> This page was last reviewed on 27-08-2025. It needs to be reviewed again on 27-05-2026.

The database is quite often at the core of our applications. It is used to store and query data.
While this data will be structured most of the time, sometimes it is useful to be able to store
unstructered data as well.

The industry standard for achieving this is to use a RDBMS or Relational Database Management System,
that uses the Structered Query Langauge or SQL for short.

## What is the standard?
For relational database management systems we strongly recommend the use of [PostgreSQL](https://www.postgresql.org/).

PostgreSQL is a RDBMS that has been around since 1986 and was originally developed by the University
of California at Berkeley. Since then it has acquired much popularity. It runs on all major operating
systems and is available as a managed service on most cloud platforms.

Besides being able to store structured data in the form of tables, it is also possible to use the
json format and store less structured data in columns and even query that data.

The functionality of PostgreSQL can be extended using extensions. An extension that is commonly
used/required in our applications is the [PostGIS](https://postgis.net/) extension, which allows for
storing and querying geospatial data.

Last but not least, there are database adapters available for pretty much all development environments.
For example [Psycopg](https://www.psycopg.org), [node-postgres](https://node-postgres.com/),
[pgsql](https://www.php.net/manual/en/book.pgsql.php), just to name a few.

## When and for whom is this standard?
This guideline applies to all developers (although mostly back-end), IT administrators, and DevOps
teams within the Municipality. It applies to all projects.

## How to apply this standard?
Use PostgreSQL as database in the project. For a local development environment this can be achieved by
using the official container images:

- https://hub.docker.com/_/postgres
- https://hub.docker.com/r/postgis/postgis

## Considerations
Make sure the version of PostgreSQL and any extensions match the versions available on the cloud platform.
See also:

- https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-supported-versions
- https://learn.microsoft.com/en-us/azure/postgresql/extensions/concepts-extensions-versions
