import toast from 'react-hot-toast';

const LoadToaster = (message,type)=>{
    switch(type){
        case "success":
            toast.success(message);
            break;
        case "failure":
            toast.error(message);
            break;
    }
}



export default LoadToaster;