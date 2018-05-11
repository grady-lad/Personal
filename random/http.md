## Network

### How does http work?

* https is port 443
* http is port 80
* resolve IP address from host name via DNS
* establish a connection with the server
* send a request
* wait for a response
* close connection
* https is ssl
* client makes a request over HTTPS, it first tries to locate a certificate on the server
* it attempts to verfiy it against its known list of CAs
* Once the certificate is verified, the SSL handshake is complete and secure transmission is in effect.
* Many different cache control methods to determine whether or not to cache the doc or for how long to cache the doc.

### Cors

* Prevent another website hitting your resource
* If you require the client to pass authentication headers (e.g. cookies) the value can not be \* — it must be a fully qualified domain!

### headers

* Expires headers tell the browser whether they should request a specific file from the server or whether they should grab it from the browser's cache.
* The Age response-header field conveys the sender's estimate of the amount of time since the response (or its revalidation) was generated at the origin server.
