interface imageState {  

        [x: string]: any;
        breakpoints: any;
        responsive: boolean;
        url: string;  
}


declare module 'cloudinary-react' {
    class Image extends CloudinaryComponent {
        //
        window (): Document['defaultView']

        componentWillReceiveProps(nextProps: any, nextContext: any)

        prepareState(props: any, context: any)
    } 
}