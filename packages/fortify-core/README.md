# fortify-core

Platform agnostic security header library that aligns with the HTTP Specification as detailed here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

The goal of this library is to produce the headers relevant for preventing malicious attacks in web development. These can be plugged into any hosting environment like fastify, express, nextjs, etc.

Headers deprecated before this library was written will not be supported at all. Headers that deprecate throughout the course of this lib's lifespan will be progressively deprecated until a breaking release occurs where they will be dropped. Fair warning will be given before.
