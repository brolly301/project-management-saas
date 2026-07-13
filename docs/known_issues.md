# Known Issues

## Authentication - Login & Register

### Passlib bcrypt warning

Status: Low Priority

Description:

Passlib 1.7.4 logs:

(trapped) error reading bcrypt version

when used with bcrypt 4.3.0.

Authentication, hashing and verification all work correctly.

Decision:

Ignore for now.

Investigate replacing Passlib with pwdlib or another maintained password hashing library after authentication is complete.
