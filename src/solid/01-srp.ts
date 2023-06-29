(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    class ProductService {

        private httpAadapter: any;

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }

    }

    class MailService {
        private email: string = 'test@mailinator.com';
        
        
        sendEmails(emailsList: string[], template: string) {
            console.log('Enviando correo a los clientes',emailsList,template);
        }
    }


    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        private productService: ProductService;
        private mailService: MailService;

        constructor( productService: ProductService, mailService: MailService ) {
            this.productService = productService;
            this.mailService = mailService;
        }


        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailService.sendEmails(['test1', 'test2'], 'Template');
        }

    
    }

    class CartBloc {

        private items: Object[] = [];

        addToCart( productId: number ) {
                      // Agregar al carrito de compras
                      console.log('Agregando al carrito ', productId );
                    }
    }
    

    const productService = new ProductService();
    const emailService = new MailService();

    const productBloc = new ProductBloc( productService, emailService );

    const cartbloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartbloc.addToCart(10);








})();