import DefaultCouple from './component/default-couple';
import TableMaterialUI from './component/table-material-ul';
import styleClasses from './main.module.css';



const Main = () => {

        return (
            <main className={styleClasses.main} >
                <DefaultCouple />  
                 <TableMaterialUI />
            </main >
        )
}

export default Main;