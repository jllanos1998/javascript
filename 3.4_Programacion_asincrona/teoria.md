**Programacion asincrona**
* Concurrencia y Paralelismo.
**Concurrencia**: cuando dos o mas tareas progresan simultáneamente.
**Paralelismo**: cuando dos o mas tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.
* Operaciones CPU-Bound vs. I/O-Bound
**CPU-BOUND**: Operaciones que pasa a su mayor tiempo consumiendo cpu.
**I/O-BOUND**: Operaciones que esperan la mayoria del tiempo de datos,
dispositivos o recurso.
* Bloqueante: Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.
* No Bloqueante: Una llamada no bloqueante devuelve inmediatamente con independencia del resultado. En caso de que se haya completado, devolverá los datos solicitados. En caso contrario (si la operación no ha podido ser satisfecha) podría devolver un código de error indicando algo así como 'Temporalmente no disponible', 'No estoy listo' o 'En este momento la llamada sería bloqueante. Por favor, posponga la llamada'. En este caso se sobreentiende que algún tipo de polling debería hacerse para completar el trabajo o para lanzar una nueva petición más tarde, en un mejor momento.

**Síncrono:** es frecuente emplear 'bloqueante' y 'síncrono' como sinónimos, dando a entender que toda la operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que se complete para procesar el resultado.
**Asíncrono:** la finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento (se explicarán después), lo que hace posible que la respuesta sea procesada en diferido. Como se puede adivinar, su comportamiento es no bloqueante ya que la llamda I/O devuelve inmediatamente.