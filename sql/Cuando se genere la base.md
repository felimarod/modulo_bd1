Cuando se genere la base:
- ID Autogenerado

Orden de insercion de la base:

1. Tablas independientes:
  - Estado
  - TipoCarpeta
  - TipoCopia
  - TipoArchivo
  - Pais
  - Categoria
 
2. Tablas con FKS:
  - Usuario (EstadoFK, PaisFK)
  - ArchivoAdjunto (MensajeFK,TipoArchivoFK)
  - Contacto(UsuarioFK_1[unico],UsuarioFK_2[uno ha muchos])
  - Destinatario (ContactoFK,TipoCopiaFK,MensajeFK,PaisFK)
 
3. Tablas con dependencias:
  - Mensaje (MensajeSupFK, TipoCarpetaFK, DEPENDENDICA[Usuario], PaisFK)

Orden de creacion:
1. Estado
2. TipoCarpeta
3. TipoCopia
4. TipoArchivo
5. Pais
5. Categoria
6. Usuario
7. Contacto
8. Mensaje
9. ArchivoAdjunto
10. Destinatario
    
    
    
    
