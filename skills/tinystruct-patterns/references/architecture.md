# tinystruct Architecture and Configuration

## When to Use

Choose **tinystruct** when you need a lightweight, high-performance Java framework that treats CLI and HTTP as equal citizens. Ideal for microservices, CLI utilities, and data-driven applications with a small footprint and zero-dependency JSON handling.

## How It Works

### Core Architecture

The framework operates on a singleton `ActionRegistry`that maps URL patterns (or command strings) to`Action` objects. When a request arrives, the system resolves the path and invokes the corresponding method handle.

#### Key Abstractions

| Class/Interface | Role |
|---|---|
| `AbstractApplication` | Base class for all tinystruct applications. Extend this. |
| `@Action` annotation | Maps a method to a URI path (web) or command name (CLI). The single routing primitive. |
| `ActionRegistry`| Singleton that maps URL patterns to`Action` objects via regex. Never instantiate directly. |
| `Action`| Wraps a`MethodHandle`+ regex pattern + priority +`Mode` for dispatch. |
| `Context`| Per-request state store. Access via`getContext()`. Holds CLI args and HTTP request/response. |
| `Dispatcher`| CLI entry point (`bin/dispatcher`). Reads`--import` to load applications. |
| `HttpServer`| Built-in HTTP server. Start with`bin/dispatcher start --import org.tinystruct.system.HttpServer`. |

### Package Map

```
org.tinystruct/
â”œâ”€â”€ AbstractApplication.java      â† extend this
â”œâ”€â”€ Application.java              â† interface
â”œâ”€â”€ ApplicationException.java     â† checked exception
â”œâ”€â”€ ApplicationRuntimeException.java â† unchecked exception
â”œâ”€â”€ application/
â”‚   â”œâ”€â”€ Action.java               â† runtime action wrapper
â”‚   â”œâ”€â”€ ActionRegistry.java       â† singleton route registry
â”‚   â””â”€â”€ Context.java              â† request context
â”œâ”€â”€ system/
â”‚   â”œâ”€â”€ annotation/Action.java    â† @Action annotation + Mode enum
â”‚   â”œâ”€â”€ Dispatcher.java           â† CLI dispatcher
â”‚   â”œâ”€â”€ HttpServer.java           â† built-in HTTP server
â”‚   â”œâ”€â”€ EventDispatcher.java      â† event bus
â”‚   â””â”€â”€ Settings.java             â† reads application.properties
â”œâ”€â”€ data/
â”‚   â”œâ”€â”€ component/Builder.java    â† JSON object (use instead of Gson/Jackson)
â”‚   â”œâ”€â”€ component/Builders.java   â† JSON array
â”‚   â”œâ”€â”€ component/AbstractData.java â† base POJO for DB persistence
â”‚   â”œâ”€â”€ component/Condition.java  â† fluent SQL query builder
â”‚   â”œâ”€â”€ component/FieldType.java  â† SQL-to-Java type mappings
â”‚   â”œâ”€â”€ Mapping.java              â† reads .map.xml metadata
â”‚   â”œâ”€â”€ DatabaseOperator.java     â† low-level JDBC wrapper
â”‚   â””â”€â”€ FileEntity.java           â† file upload representation
â”œâ”€â”€ http/                         â† Request, Response, Constants
â”‚   â””â”€â”€ SSEPushManager.java       â† Server-Sent Events management
â””â”€â”€ net/                          â† URLRequest, HTTPHandler (outbound HTTP)
```

### Template Behavior and Dispatch Flow

By default, the framework assumes a view template is required. If `templateRequired`is`true`,`toString()`looks for a`.view`file in`src/main/resources/themes/<ClassName>.view`. Use`setVariable("name", value)`to pass data to templates, which use`{%name%}` for interpolation.

## Examples

### Minimal Application Initialization
```java
@Override
public void init() {
    this.setTemplateRequired(false); // Skip .view template lookup for data-only apps
    // Do NOT call setAction() here â€” use @Action annotation instead
}
```

### Action Definition and CLI Invocation
```java
@Action("hello")
public String hello() {
    return "Hello, tinystruct!";
}
```
**Execution via Dispatcher:**
```bash
bin/dispatcher hello
bin/dispatcher greet/James
bin/dispatcher echo --words "Hello" --import com.example.HelloApp
```

### Configuration Access
Located at `src/main/resources/application.properties`:
```java
String port = this.getConfiguration("server.port");
```
