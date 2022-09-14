import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

class Terms extends Component{

  state = {
      accepted: false
  }

  render(){
    return (
     <View style={styles.container}>
            <Text style={styles.title}>Términos y condiciones</Text>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: true
                  })
                }
              }}
            >
                <Text style={styles.tcP}>Bienvenid@ a Goodmind - share and talk.</Text>
                <Text style={styles.tcP}>TÉRMINOS LEGALES Y CONDICIONES GENERALES DE USO DE LA APP DE GOODMIND

PRIMERO: GENERALIDADES.
El presente documento, elaborado con fecha 10 de septiembre de 2022, regula los términos y condiciones generales aplicables al acceso y uso que el Usuario realizará del App: GOODMIND (en adelante "GOODMIND", "GOODMIND" o "el App" indistintamente), así como a cualquier tipo de información, contenido, imagen, video, audio u otro material comunicado o presente en el App.
Para efectos del presente documento se entenderá como "App": la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de la navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, "Contenidos") y todos aquellos servicios o recuerdos en línea que en su caso ofrezca a los usuarios (en adelante, "Servicios").
GOODMIND se reserva la facultad de modificar, en cualquier momento, y sin previo aviso, la presentación y configuración del App y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento GOODMIND pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el App o el acceso a los mismos.
El acceso y uso del App y del contenido relacionado o anexo, descrito en el presente documento, se regirá íntegramente por las leyes de la República de Chile. Por consiguiente, las visitas, así como también los posibles contratos o transacciones que el usuario realice en la plataforma que representa el App, así como los efectos jurídicos que éstas pudieran tener, quedan sometidos a las leyes y a la jurisdicción de los tribunales de justicia de la República de Chile. De particular importancia resultan la aplicación de la Ley N° 19.628 de Protección de Datos Personales y la Ley N° 19.496 sobre Derechos del Consumidor.
Adicionalmente, este App y sus contenidos, así como también las transacciones que se pudieran llevar a cabo en él, están destinados a todo tipo de usuarios, sin importar su nacionalidad y lugar de residencia, no bien existe primacía respecto a la aplicación de la legislación chilena para los casos puntuales.
En particular, el App se encuentra regulado conforme con lo previsto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).
Se recomienda al usuario leer detenidamente el contenido de estos Términos y Condiciones Generales de Uso, así como imprimir y conservar una copia de éstas en una unidad de disco local de almacenamiento, o de almacenamiento portátil, para su conveniencia y seguridad.
SEGUNDO.- INFORMACIÓN DEL App GOODMIND.
La titularidad de GOODMIND corresponde a VÍCTOR SALGADO, Cédula Nacional de Identidad número: 209484722.
Adicionalmente, para efectos de cualquier tipo de comunicación, presentación, consulta o reclamo relacionados con el uso o funcionamiento del App, o con los contratos y transacciones que se hubieran llevado a cabo, GOODMIND recibirá todo tipo de comunicaciones al correo electrónico: goodmindchile@gmail.com, así como al número de teléfono: +56957005236, el cuál sólo estará disponible para efectos de funciones de Servicio al Cliente. VÍCTOR SALGADO, se encuentra domiciliado(a) para estos efectos en bulnes 1436, comuna de San Bernardo.
TERCERO.- USUARIO.
El acceso a este App, la navegación y uso del mismo, así como cualquier espacio habilitado para interacciones entre Usuarios, o entre éste y el App (secciones de comentarios, espacios de blogging y micro blogging, y extensiones destinadas a esta función), conferirán a las personas la condición de "Usuario". Por lo tanto, se entienden aceptar los Términos y Condiciones Presentes en este documento desde el momento de acceder al App o a sus contenidos, así como también todo tipo de futuras modificaciones que se hicieran a los Términos y Condiciones, sin perjuicio de lo que pudiera establecer futura legislación dictada en la República de Chile destinada a regular esta clase de documentos, o que fuera aplicable al uso de Sitios Web.
Adicionalmente, el acceso al App por parte del Usuario tendrá un carácter libre y gratuito, sin que éste tenga que pagar por acceder al sitio o sus contenidos, más allá del costo de la conexión a internet, en los casos que correspondiera.
Registro del Usuario.
Será requisito necesario para el uso del App, así como para realizar transacciones y contratar servicios ofrecidos por esta vía, la aceptación de los presentes Términos y Condiciones al momento del registro por parte del Usuario. Adicionalmente, el Usuario deberá designar una clave o contraseña de acceso.
Se entenderán conocidos y aceptados estos Términos y Condiciones por el sólo hecho de registrarse el Usuario, acto en el cual se incluirá una manifestación expresa del Usuario sobre el conocimiento de las presentes condiciones de uso.
El registro de cada Usuario se verificará completando y suscribiendo el formulario que para estos efectos se proporcionará por parte del App, así como su posterior envío, el cual se concretará por medio de hacer "click" el Usuario en el elemento respectivo dentro del App.
Clave Secreta.
Una vez registrado, el Usuario tendrá a su disposición un nombre de usuario y una contraseña o clave secreta, por medio de los cuales no sólo podrá ingresar al App y tener acceso a sus contenidos, sino también un acceso personalizado, confidencial y seguro. El Usuario tendrá la posibilidad de cambiar su contraseña o clave secreta, para lo cual existirá un procedimiento regulado dentro del App y su estructura.
El Usuario asume totalmente su responsabilidad por el mantenimiento de la confidencialidad de su contraseña o clave secreta registrada en el App. Dicha contraseña o clave es de uso personal, por lo que su entrega voluntaria a terceros por parte del Usuario, no acarrea ningún tipo de responsabilidad por parte de GOODMIND, ni de sus afiliados y representantes, en caso de uso malicioso.
Responsabilidad de los Usuarios.
GOODMIND entrega al Usuario un servicio caracterizado por la diversidad del contenido proporcionado. El Usuario asume su responsabilidad al ingresar al App, para realizar un correcto uso del mismo y sus contenidos. Así, esta responsabilidad se extenderá, de forma no taxativa, a:
a.- Usar la información, Contenidos y/o Servicios y datos ofrecidos por GOODMIND, sin que sea contrario a estos Términos y Condiciones, así como al Ordenamiento Jurídico Chileno y a la Moral y el Orden Público, o que de cualquier otra forma pudieran acarrear la vulneración de derechos de terceros, o el funcionamiento y operaciones normales del App.
b.- La veracidad y licitud de los datos e información aportados por el Usuario en los formularios de registro presentes en el App. En todo caso, el Usuario notificará de forma inmediata a GOODMIND acerca de cualquier hecho relacionado con el uso indebido de información registrada en dichos formularios, tales como, pero no sólo, robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.
GOODMIND se reserva el derecho de retirar todos aquellos comentarios e interacciones emanados de Usuarios que vulneren la ley, el respeto a la dignidad a la persona, que sean discriminatorios en base a raza, nacionalidad, sexo, orientación sexual, estirpe o condición, así como también aquellos que contengan contenido pornográfico o que constituyan mensajes conocidos como "spam", o que atenten contra la juventud o infancia, el orden, o la seguridad pública o que, a juicio de GOODMIND, no resulten apropiados para el App.
De todas maneras, GOODMIND no se hace responsable de las opiniones, de cualquier tipo, emitidas por los Usuarios mediante comentarios u herramientas o extensiones de blogging o microblogging.
El simple acceso a GOODMIND no supone una relación comercial entre GOODMIND y el Usuario.
Capacidad Legal.
El Usuario declara ser mayor de edad y, por lo tanto, tener la capacidad legal necesaria y suficiente para vincularse por los presentes Términos y Condiciones. Por lo tanto, GOODMIND no se dirige a menores de edad, declinando cualquier responsabilidad por el incumplimiento de este requisito.
Aún así, las reglas legales de capacidad establecidas en el ordenamiento jurídico regirán en todos aquellos casos donde su aplicación sea pertinente. Por tanto, si una persona no tiene capacidad legal para contratar, debe abstenerse de utilizar los Contenidos y Servicios que requieran de esta capacidad. GOODMIND podrá, en cualquier momento, en forma temporal o definitiva, suspender la participación de usuarios sobre los cuales se compruebe que carecen de capacidad legal para usar de los Servicios y Contenido que la requieran, o que proporcionen información falsa, inexacta o fraudulenta al App.
El App GOODMIND está dirigido principalmente a Usuarios residentes en la República de Chile. GOODMIND no asegura que el App cumpla, parcial o totalmente, con legislaciones de otros países. Si el Usuario reside o está domiciliado en un país extranjero, y decide acceder y/o navegar en este App, lo hará bajo su propia responsabilidad, asegurándose de que tal acceso y navegación cumpla con lo dispuesto en la legislación local que le sea aplicable, no asumiendo GOODMIND responsabilidad alguna que pueda derivar de dicho acceso.
CUARTO.- DERECHOS Y GARANTÍAS DEL USUARIO DEL SITIO.
El Usuario gozará de todos los derechos que le reconoce la legislación sobre protección al consumidor vigente en Chile, adicionalmente a los derechos que le otorgan estos Términos y Condiciones. Además, el Usuario dispondrá en todo momento de los derechos de información, rectificación y cancelación de los datos personales conforme a la Ley N° 19.628 sobre protección de datos personales.
Derecho de Retracto.
De conformidad al artículo 3 bis número 3 de la ley 19.496, se excluye por el presente acto la posibilidad de ejercerse cualquier forma de retracto por parte del Usuario respecto del Servicio o los Servicios contratados, una vez que estos ya han sido ejecutados.
Con todo, desde la contratación del Servicio y antes de que éste sea prestado, el Usuario tendrá un plazo de 10 días para terminar el contrato celebrado por medios electrónicos.
El ejercicio de este derecho debe utilizar los mismos medios empleados para celebrar el contrato, y siempre que GOODMIND hubiera enviado comunicación al Usuario, informando el perfeccionamiento del contrato y entregando una copia del mismo, así como acceso claro e inequívoco de los Términos y Condiciones Generales, así como la posibilidad de conservar o imprimir dichos documentos.
En caso que GOODMIND no hubiera dado cumplimiento íntegro a lo establecido en los párrafos anteriores de este acápite, el plazo con el que cuenta el Usuario para terminar el contrato, se ampliará a 90 días.
Si el Servicio se obtuvo por medio de un crédito, éste quedará sin efecto, pero los intereses serán de cargo del Usuario cuando se hubiera otorgado por un tercero.
GOODMIND estará obligado a devolver las sumas abonadas, sin retención de gastos, a la mayor brevedad posible y, en cualquier caso, antes de 45 días a la comunicación del retracto.
Garantías Legales.
En caso que el producto no cuente con las características informadas o publicitadas, si tuviera algún tipo de daño o le faltara algún componente, podrá ser cambiado inmediatamente. Si presenta fallas o defectos dentro de los 6 meses siguientes a la fecha de recepción, el Usuario puede optar por su reparación gratuita o, previa restitución, su cambio o bien la devolución del precio pagado, siempre que los daños o deterioros no hubieran sido por culpa del Usuario. La devolución puede realizarse en cualquier sucursal u oficina de GOODMIND, o bien en algún lugar acordado con algún representante del App.
Si de utilizarse esta garantía para proceder a la reparación del producto por daños o deterioros que lo hicieran inapto para su uso o consumo, y dentro del mismo plazo de 6 meses señalado en el párrafo anterior, se volviera a manifestar la misma deficiencia u otra distinta que también hiciera al producto inapto para su uso o consumo, se podrá nuevamente pedir la reparación, o bien se podrá optar por su cambio o la devolución del precio pagado, siempre que el nuevo deterioro o daño no haya sido culpa del Usuario.
Si se tratara de un producto que cuenta con garantía del fabricante, se aplicará el plazo de esa garantía, si es que éste fuera mayor al plazo de 6 meses como garantía legal. Sin embargo, si el producto es perecible o está destinado, por su naturaleza, a ser utilizado o consumido en un breve período de tiempo, el plazo para su devolución será el indicado en el producto o su empaque o envoltorio o, en su defecto, de 7 días, si nada se indicara. Todos estos plazos se suspenderán por el tiempo que el bien esté siendo reparado en ejercicio de la garantía, y hasta que se complete dicha reparación.
QUINTO.- CONTRATACIÓN.
Para realizar compras o contratar servicios en el App, se deben seguir los siguientes pasos, haciendo click cuando corresponda:
a.- Para dar inicio al proceso de contratación es necesario que se confirme haber leído y aceptado los presentes Términos y Condiciones.
b.- Seleccionar el producto o servicio que interesa y agregarlo al "carro de compra", u alguna opción similar con nombres parecidos ("canasto", "cesta", por nombrar algunos).
c.- Iniciar sesión en el sitio o ingresar correo electrónico y contraseña. En caso de no estar registrado y si se desea hacerlo, haga uso del ícono y menú que corresponda a esta opción.
d.- Seleccionar la modalidad de envío y entrega entre las alternativas disponibles en el sitio (link con las alternativas disponibles). Ante la eventualidad de no existir alternativas disponibles, seguir las instrucciones para la entrega de acuerdo a lo que se señale en el sitio.
e.- Seleccionar el medio de pago.
f.- Una vez que se ha realizado la orden de compra o de contratación de servicio, se desplegará en la pantalla la siguiente información, la cual debe aparecer antes de la selección del medio de pago:
I. Descripción del producto adquirido o servicio contratado.
II. Precio del producto o servicio.
III. Indicación del costo del envío, cuando corresponda.
IV. Fecha de entrega del producto adquirido, según el tipo de entrega escogido; o fecha de inicio del servicio contratado.
V. Medio de pago que escogerá el usuario.
VI. Valor total de la operación.
VII. Otras condiciones de la orden de producto o servicio adquirido.
VIII. Posibilidad de imprimir y conservar la orden, por parte del Usuario.
IX. Número de identificación único de la orden, con la cual el Usuario puede hacer seguimiento en línea de ella, o bien utilizarlo para identificarla al momento de realizarse la entrega o retiro.
g.- Envío de la información al correo electrónico registrado por el Usuario.
h.- La orden luego será enviada de forma automática a un proceso de confirmación de identidad, en el cual se resguardará siempre la seguridad y privacidad del usuario y del proceso mismo de contratación, disponibilidad, vigencia y cupo del medio de pago que se haya seleccionado.
i.- Una vez cumplido lo anterior, se perfecciona el contrato, realizándose el cargo en el medio de pago seleccionado. Posteriormente se realiza el envío del comprobante de compra con la boleta o factura que corresponda en formato electrónico y será despachado el producto, de acuerdo al modo de entrega seleccionado.
j.- No se verá afectado el comprador en sus derechos ni tampoco se le efectuarán cargos, sin que sea confirmada su identidad.
SEXTO.- MEDIOS DE PAGO.
A menos que se indique un medio distintos para casos u ofertas específicos, los productos y servicios que se informan y transan en este sitio sólo podrán ser pagados por medio de:
a.- Tarjeta de crédito bancarias Visa, Mastercard, Dinners Club International, American Express u otras habilitadas y válidamente emitidas en Chile o en el extranjero, siempre que mantengan un contacto vigente para este efecto con GOODMIND.
b.- Tarjetas de débito bancarias acogidas al sistema Redcompra o habilitadas para realizar pagos y transacciones a través del sistema WebPay, válidamente emitidas en Chile por bancos nacionales, que mantengan un contrato vigente para tales efectos con GOODMIND.
c.- Tranferencia bancaria, la cual se realizará a la cuenta N° 000080425490, la cual GOODMIND mantiene en el Banco Santander.
Otros medios de pago que pudieran ser anunciados y aceptados a futuro, los cuales serán informados pertinentemente por los canales y conductos que correspondan.
El pago con tarjetas de débito se realizará a través de WebPay, que es un sistema de pago electrónico que se encarga de hacer el cargo automático a la cuenta bancaria del usuario.
El Usuario declara que entiende que estos medios o portales de pago son de propiedad de terceras empresas o personas proveedoras de dichos servicios, independientes y no vinculadas a GOODMIND, por lo que la continuidad de su prestación de servicios en el tiempo, así como el correcto funcionamiento de sus herramientas y botones de pago en línea, son de exclusiva responsabilidad de las proveedoras de estos servicios y en ningún caso de GOODMIND.
SÉPTIMO.- RESPONSABILIDAD.
GOODMIND no responderá, en ningún caso, por los siguientes hechos:
a.- Uso indebido que Usuarios o visitantes al App realicen del contenido almacenado, o de los productos que adquirieran en el mismo, así como de los derechos de propiedad industrial o intelectual contenidos en el App, o en los productos o servicios.
b.- Daños y perjuicios, concretos o eventuales, causados a Usuarios derivados del funcionamiento de las herramientas de búsqueda del App, así como de errores generados por elementos técnicos del Sitio o del motor de búsqueda.
c.- Contenido de Sitios Web a las que los Usuarios puedan acceder con o sin autorización de GOODMIND.
d.- Acceso de personas que no cumplan con el límite de edad requerido para el uso del App, siguiendo los Términos y Condiciones así como la legislación vigente referida a la capacidad de ejercicio.
e.- Pérdida, mal uso o uso no autorizado de contraseña o códigos de validación, sea por parte del Usuario o de un tercero, de la forma expresada en estos Términos y Condiciones. De la misma forma, las partes reconocen y dejan constancia que el soporte computacional entregado por GOODMIND no es infalible, por lo tanto, pueden verificarse circunstancias ajenas a la voluntad de GOODMIND que puedan causar que el App o su plataforma no se encuentren operativos durante un cierto período de tiempo.
f.- Información referida a GOODMIND que se encuentre en Sitios Web distintos o ajenos a GOODMIND.
En caso de estar ante alguno de estos supuestos, GOODMIND tomará todas las medidas para reestablecer el correcto funcionamiento del App y de su sistema comunicacional lo más pronto posible, sin que pudiera imputársele algún tipo de responsabilidad por aquello.
GOODMIND no asegura disponibilidad ni continuidad de funcionamiento del App, y tampoco que en cualquier momento, los Usuarios puedan acceder a élo a las promociones y ofertas que estuvieran disponibles.
GOODMIND tampoco es responsable por la existencia de virus u otros elementos perjudiciales en los documentos o archivos almacenados en los sistemas informáticos de todo tipo de propiedad de los Usuarios. GOODMIND no responderá de perjuicios causados al Usuario, derivados del uso indebido de las tecnologías y plataformas puestas a su disposición, cualquiera sea la forma en que se utilicen inadecuadamente estos elementos tecnológicos. Asimismo, GOODMIND no responderá por daños producidos por el uso indebido o mala fe de los Usuarios al utilizar GOODMIND.
No obstante, en el caso de producirse un doble pago por algún Usuario en el App, GOODMIND realizará la devolución íntegra de la suma del sobrepago, dentro de los 7 días siguientes a la recepción del correspondiente reclamo realizado por el Usuario o sus representantes, el cual debe contar con un anexo que incluya los comprobantes de pago originales correspondientes al sobrepago realizado.
OCTAVO.- POLÍTICA DE SEGURIDAD DE DATOS.
GOODMIND adoptará todas las medidas necesarias para resguardar los datos de sus Usuarios y clave secreta, como sistemas de encriptado de información y otros semejantes o equivalentes que GOODMIND considere prudentes para estos efectos. En caso de realizarse cambios hechos por el Usuario en la información registrada o ingresada en el App, o bien, si se produce la detección de cualquier tipo de irregularidad atribuible al Usuario relacionada con la información entregada o con transferencias realizadas por el Usuario, así como con todo lo relacionado a la identificación en las mismas o el uso de medios de pago o simplemente como medida de protección de identidad, el personal del App se pondrá en contacto con el Usuario, sea por vía telefónica o por correo electrónico, para corroborar los datos y la información, así como para evitar la existencia de posibles fraudes.
En la eventualidad de no establecerse contacto en un plazo de 24 horas, y pensando en la seguridad del Usuario, cualquier compra de un producto o contratación de un servicio no será confirmada. Se informará al Usuario por vía telefónica o por correo electrónico el hecho de haber quedado sin efectos producto de no haber podido comprobarse su identidad o medio de pago utilizado. Adicionalmente, los comprobantes en que consten las gestiones realizadas para intentar contactarse con el Usuario con el objetivo de confirmar la transacción, quedarán a disposición de éste último por un plazo de 7 días, en caso que el Usuario quisiera confirmar la compra o contratación. Consultas adicionales pueden realizarse por las vías de contacto con el App establecidas en el párrafo relativo a la Información del App, presente en este mismo documento de Términos y Condiciones.
Con todo lo anterior, los Usuarios son plenamente responsables por el extravío o pérdida, mal uso o uso no autorizado que se diera del producto o servicio adquirido o contratado, sea que incurran ellos o terceros en los hechos descritos previamente, luego de realizada una compra o contratación de servicio siguiendo la forma estipulada en los presentes Términos y Condiciones.
Datos Personales.
Al acceder al App GOODMIND, los Usuarios o visitantes garantizan que la información que proporcionan para ingresar o para la compra de productos o contratación de servicios es veraz, completa, exacta y actualizada.
El Usuario debe tener en consideración que la sede de actividades del App se encuentra ubicado en Chile, fuera de la Unión Europea. En caso de circulación de información entre compañías ubicadas dentro de territorio chileno, esto sólo se realizará de la forma prevista en estos Términos y Condiciones, y de una forma que no vulnere el Reglamento General de Protección de Datos de la Unión Europea.
La ubicación donde se procesa la información y datos personales es la siguiente:
Santiago
De acuerdo a lo establecido en la Ley N° 19.628 de Protección de Datos Personales, los datos de este tipo que se suministren al App, pasan a formar parte de una base de datos perteneciente a GOODMIND y serán destinados única y exclusivamente para los fines que motivaron su entrega, especialmente para la comunicación entre GOODMIND y sus Usuarios, validar datos relativos a compras o contratación de servicios, concretar despachos, y responder consultas. Estos datos nunca serán comunicados o compartidos con otras empresas sin expresa autorización de su titular (el Usuario) ni serán transferidos internacionalmente.
GOODMIND jamás solicitará a sus Usuarios la entrega de datos personales o financieros a través de correos electrónicos.
GOODMIND presume que los datos incorporados por los Usuarios o por personas autorizadas por éstos son correctos y exactos. Los Usuarios, al aceptar los presentes Términos y Condiciones, manifiestan su conformidad con que los datos personales aportados al rellenar formularios presentes en GOODMIND puedan ser utilizados posteriormente para la elaboración y envío de ofertas que puedan diferir de las ofrecidas en el App.
Sin perjuicio de lo anterior, GOODMIND garantiza a todos sus Usuarios el libre ejercicio de los derechos contemplados en la Ley N° 19.628 de Protección de Datos Personales en lo relativo a la información, modificación, cancelación y bloqueo de sus datos personales. En consecuencia, los Usuarios podrán realizar requerimientos relacionados con los ya mencionados derechos, los que serán respondidos por GOODMIND en un plazo no superior a dos días corridos.
Documentos Electrónicos.
Los Usuarios, como receptores manuales de documentos electrónicos según lo establecido en la Resolución Exenta N° 11 del 14 de febrero de 2003, dictada por el Servicio De Impuestos Internos, la cual establece el procedimiento para que contribuyentes autorizados para emitir documentos electrónicos puedan también realizar su envío por estos mismos medios a los receptores manuales; declaran y aceptan que, al aprobar estos Términos y Condiciones, autorizan a GOODMIND, representada por VÍCTOR SALGADO, Cédula Nacional de Identidad número: 209484722, para que el documento tributario correspondiente a la transacción por compra de producto o contratación de servicio, le sea entregada únicamente a través de un medio electrónico. Igualmente, se autoriza que el aviso de publicación del documento tributario sea enviado a los Usuarios por correo electrónico.
De conformidad con la normativa ya mencionada, y en caso que el Usuario necesite respaldar su información contable, éste asumirá, en relación a los documentos tributarios ya mencionados, las siguientes obligaciones:
a.- Imprimir los documentos recibidos electrónicamente, para cada período tributario, inmediatamente luego de recibirlos de parte del emisor.
b.- Imprimir el documento en tamaño y forma original.
c.- Utilizar papel blanco tipo original de tamaño mínimo 21,5 cm x 14 cm (media carta) y de tamaño máximo 21,5 cm x 33 cm (oficio).
d.- Imprimir en una calidad que asegure la legibilidad del documento durante al menos seis años, según establece la legislación vigente. La impresión se realizará mediante métodos de láser o de inyección de tinta, a menos que se establezca un método distinto por una legislación o normativa en la materia dictada a futuro.
NOVENO.- COMUNICACIONES.
GOODMIND se obliga a, en caso de enviar cualquier tipo de comunicación e información, incluyendo publicidad o promociones, a cualquier medio de contacto proporcionado por el Usuario, incluyendo números telefónicos o correo electrónico, dicha comunicación contendrá al menos la siguiente información:
a.- Identificación del tipo de mensaje, dejando en claro al Usuario el tipo de información que se trata, especialmente si es un mensaje que contiene publicidad o promociones, todo lo cual figurará en el campo de asunto del mensaje (e-mail), o bien se informará en primer lugar (comunicación telefónica por voz o texto).
b.- Existencia del derecho del consumidor, reconocido por la normativa chilena, relacionado con la facultad que tiene el Usuario para solicitar el cese de este tipo de mensajes por parte de GOODMIND. Al mismo tiempo, se reconoce la obligación por parte de GOODMIND de suspender los envíos de información en caso de recibir la solicitud por parte del Usuario.
c.- La garantía de un proceso expedito, sencillo y efectivo para el caso que el Usuario quiera hacer la solicitud, para la cual el GOODMIND puede requerir algún tipo de información previo a llevarlo a cabo.
d.- En caso que se trate de publicidad o promociones provenientes de sitios externos, o de empresas, compañías o marcas asociadas con GOODMIND, el mensaje contendrá la información necesaria para identificar al anunciante, incluyendo su denominación comercial si la tuviera.
Las promociones que se ofrezcan por medio de este App no son necesariamente las mismas que ofrezcan otros canales de venta utilizados por las empresas, tales como locales físicos, anuncios por TV o radio, catálogos u otros, a menos que se señale expresamente en este sitio o en la publicidad que realicen las empresas de cada promoción.
</Text>
            </ScrollView>
      </View>
    );
  }

}

const { width , height } = Dimensions.get('window');

const styles = {

  container:{
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
      fontSize: 22,
      alignSelf: 'center'
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcP:{
      marginTop: 10,
      fontSize: 12
  },
  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7
  },

  button:{
      backgroundColor: '#136AC7',
      borderRadius: 5,
      padding: 10
  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}

export default Terms;