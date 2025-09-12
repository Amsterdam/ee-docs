# Handling Access Tokens
> This page was last reviewed on 10-09-2025. It needs to be reviewed again on 10-06-2026.

A common requirement for our applications is that we need to implement authentication. We typically
do that by implementing OpenId Connect (OIDC) support.

OIDC is a standard that builds on the foundations of OAuth 2.0 and introduces some new features.
However neither of these standards specify exactly how to verify the validity of access tokens.

The OAuth 2.0 standard basically states that the access token should be a string and that the string
can have different formats, structures, and methods of utilization. The OIDC standard does not
mention a specific format either.

This poses an issue, because there is a standard that does not standardize an important part of the
process required to successfully implement it in a generic way. Leaving authorization and resource
servers to come up with their own vendor specific way to verify access tokens.

## What is the standard?
Fortunately the good people of the internet came up with new/extending standards to prevent a
situation where access token verification would be completely different depending on the
authorization server.

This standard defines that we must implement access token verification according to
[RFC9068 Section 4](https://datatracker.ietf.org/doc/html/rfc9068#name-validating-jwt-access-token).

### What is RFC9068?
[RFC9068](https://datatracker.ietf.org/doc/html/rfc9068) is a proposed standard that defines the
format of access tokens and how to handle them in a secure way.

#### Access Token format
As mentioned before the OAuth 2.0 and OpenId Connect standards do not define any kind of format.
RFC9068, however does. It states that the access token should represent a
[JWT](https://datatracker.ietf.org/doc/html/rfc7519).

A typical access token will look similar to something like this:
```
eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiYXQrand0Iiwia2lkIiA6ICJZSmNnekppNVlwR0p4QmJ1eUhuNmxPazFYcVpUSWVoQXBubTZTN20ySmNZIn0.eyJleHAiOjE3NTc1NDQzMzMsImlhdCI6MTc1NzUwODMzNCwianRpIjoidHJydGNjOjM2YjAzNjAwLWI2YzYtMjUwMS00YmNkLWFlNjJhMDM2ZTRlOCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMi9yZWFsbXMvYW1zdGVyZGFtLW1haWwtc2VydmljZSIsImF1ZCI6WyJhbXN0ZXJkYW0tbWFpbC1zZXJ2aWNlIiwiYWNjb3VudCJdLCJzdWIiOiJjY2QwM2VkNC02ODczLTQyMmYtODI4Yi0zOGEzOWUzNThmYzkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0ZXN0LWNsaWVudCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAxIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtYW1zdGVyZGFtLW1haWwtc2VydmljZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTcyLjIwLjAuMSIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC10ZXN0LWNsaWVudCIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjAuMC4xIiwiY2xpZW50X2lkIjoidGVzdC1jbGllbnQifQ.TlJP8R-lFV3LAJTMXCvqOpaBQv-FpOMisFUusHvGQp98V1xCGE9IgXdoa5UTSve1IdcTQVWPGOPQj6aZqJF4DZCQbSsmXm5HAvvpAudoY2CIqsHcuPSmYo8ikcnxsHKy_59wvvne9dj8pJ5ArZd6qH7H71RRL0oXRaEcfLlhyegSlv8qlEId8vx9CJGWI0WOmOJNkQhMt_kIgpC281WmmenIh5CcLzV5td2K87eN21HRxN_ni0ZIE8bgeXl75EGOdgZXs-lND6UEOn2SVC5NF6TiYLH3-MJEPe2ggMWVEbba2t7tXIxn-QXeV_1X1AFtw-gjcuGyIS7jgE7apqJ52w
```

This string actually consists out of three strings that are separated by a period ".":
1. Header  
   The header is a base64 encoded json string. In this case it looks like this:  
   ```
   {
     "alg": "RS256",
     "typ": "at+jwt",
     "kid": "YJcgzJi5YpGJxBbuyHn6lOk1XqZTIehApnm6S7m2JcY"
   }
   ```
2. Payload
   The payload is also a base64 encoded json string. In this example it looks like this:  
   ```
   {
     "exp": 1757544333,
     "iat": 1757508334,
     "jti": "trrtcc:36b03600-b6c6-2501-4bcd-ae62a036e4e8",
     "iss": "http://localhost:8002/realms/amsterdam-mail-service",
     "aud": [
       "amsterdam-mail-service",
       "account"
     ],
     "sub": "ccd03ed4-6873-422f-828b-38a39e358fc9",
     "typ": "Bearer",
     "azp": "test-client",
     "acr": "1",
     "allowed-origins": [
       "http://localhost:3001"
     ],
     "realm_access": {
       "roles": [
         "offline_access",
         "default-roles-amsterdam-mail-service",
         "uma_authorization"
       ]
     },
     "resource_access": {
       "account": {
         "roles": [
           "manage-account",
           "manage-account-links",
           "view-profile"
         ]
       }
     },
     "scope": "profile email",
     "email_verified": false,
     "clientHost": "172.20.0.1",
     "preferred_username": "service-account-test-client",
     "clientAddress": "172.20.0.1",
     "client_id": "test-client"
   }
   ```
3. Signature  
   The signature part is generated using the payload, the algorithm specified in the header (key
   "alg"), and the public key specified by its identifier in the header (key "kid"). It is used to
   verify that the payload has not been altered before being sent to the resource server.

An easy way to inspect or debug tokens is through [jwt.io](https://jwt.io). It will do all the
decoding for you as well as verify the signature.

## When and for whom is this standard?
This guideline applies to all developers (although mostly back-end), IT administrators, and DevOps
teams within the Municipality. It applies to all projects.

## How to apply this standard?
This standard can be applied by making sure access tokens are validated according to
[RFC9068](https://datatracker.ietf.org/doc/html/rfc9068#name-validating-jwt-access-token).

It is strongly recommended to write automated tests to verify that all endpoints verify the access
token (or lack thereof) in the correct way. Making this part of your test suite ensures that
authentication remains safe and secure, and API responses remain consistent.

The implementation of how access tokens are handled may vary, however it should always check the
following if possible:

- The resource server MUST verify that the "typ" header value is "at+jwt" or "application/at+jwt"
and reject tokens carrying any other value.
  > This unfortunately is not always possible. For example Entra ID will set this value to "JWT" and
  is at this time not 100% RFC9068 compliant. However the risk seems acceptable in this case.
- If the JWT access token is encrypted, decrypt it using the keys and algorithms that the resource
server specified during registration. If encryption was negotiated with the authorization server at
registration time and the incoming JWT access token is not encrypted, the resource server SHOULD
reject it.
  > At the time of writing it is not possible to have either Keycloak or Entra ID provide encrypted
  access tokens. Although that would be a very nice feature to have.
- The issuer identifier for the authorization server (which is typically obtained during discovery)
MUST exactly match the value of the "iss" claim.
  > You must configure a setting in your application that contains the only acceptable issuer
  identifier. When verifying an access token you must make sure that the "iss" claim matches that
  issuer identifier.  
  This is to make sure that the access token was issued by the authorization server that we exepect
  and prevents authentication with access tokens issued by other authorization servers.
- The resource server MUST validate that the "aud" claim contains a resource indicator value
corresponding to an identifier the resource server expects for itself. The JWT access token MUST be
rejected if "aud" does not contain a resource indicator of the current resource server as a valid
audience.
  > You must configure a setting in your application that contains the only acceptable audience
  identifier. When verifying an access token you must make sure that the "aud" claim contains that
  audience identifier.  
  Access tokens can be issued for more than just one resource server or application, this makes sure
  that access tokens issued for other resource servers can not be used for authentication on the
  resource server in question unless explicitly specified.
- The resource server MUST validate the signature of all incoming JWT access tokens according to
[RFC7515](https://datatracker.ietf.org/doc/html/rfc7515) using the algorithm specified in the JWT
"alg" Header Parameter. The resource server MUST reject any JWT in which the value of "alg" is
"none". The resource server MUST use the keys provided by the authorization server.
  > You must make sure that any access token has a valid signature. Unsigned JWT's are not
  permitted, hence "alg" must never be "none".
- The current time MUST be before the time represented by the "exp" claim. Implementers MAY provide
for some small leeway, usually no more than a few minutes, to account for clock skew.
  > You must make sure that the access token is not expired.

RFC9068 also states the following:
>The resource server MUST handle errors as described in
[Section 3.1](https://datatracker.ietf.org/doc/html/rfc6750#section-3) of
[RFC6750](https://datatracker.ietf.org/doc/html/rfc6750). In particular, in case of any failure in
the validation checks listed above, the authorization server response MUST include the error code
"invalid_token".

This means that in case of failure, when verifying the access token, a response header including the
error code and descriptions must be set. For example:

```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer realm="example",
                  error="invalid_token",
                  error_description="The access token expired"
```

Even if you use an external library or package, or the framework handles it, you must still verify
that all of the above is checked.

Some inspiration for re-usable test case names:
- test_no_token_provided
- test_invalid_typ_header
- test_invalid_audience
- test_expired_token
- test_invalid_alg_header
- test_invalid_signature
- test_invalid_issuer

## Considerations
### OAuth 2.0 Token Introspection
Another solution to the issue at hand is the proposed standard
[RFC7662](https://datatracker.ietf.org/doc/html/rfc7662). This states that authorization servers may
provide a special API endpoint that can be used to retrieve information about the access token. The
response of such requests would contain a very similar set of information as the claims in the
access token as per [RFC9068](https://datatracker.ietf.org/doc/html/rfc9068).

A big downside to this approach is that for every new access token that needs to be verified a http
request has to be made to the authorization server. Which is bad for the performance of both our
resource servers and authorization server.

Another consideration is that most of our applications already implement a form of authentication
where the access token is parsed, albeit not completely following a (proposed) standard.

See also:
- https://openid.net/specs/openid-connect-core-1_0.html (OIDC standard)
- https://www.rfc-editor.org/rfc/rfc6749 (OAuth 2.0 standard)
