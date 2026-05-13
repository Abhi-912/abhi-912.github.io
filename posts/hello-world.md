---
title: 'My Journey with Distributed Systems'
date: '2025-05-14'
description: 'Reflections on scaling backends, learning Kafka, and moving from a monolith to microservices.'
---

# Welcome to my new Blog!

This is my very first blog post on the revamped portfolio website. The site is now powered by **Next.js**, allowing me to simply drop Markdown files into the `posts/` directory.

## What's Next?

I plan to write about:
- Building high-throughput notification schedulers using virtual threads.
- Optimizing cloud infrastructure and saving costs.
- Lessons learned migrating to modern caching solutions like Valkey.

Stay tuned for more updates!

```java
// A quick snippet from a reactive API gateway
@Bean
public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("path_route", r -> r.path("/get")
            .uri("http://httpbin.org"))
        .build();
}
```
