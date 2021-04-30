import React, {useState} from 'react';

import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExportApp = () => {
    //const categories = ['One Punch', 'Sam X', 'DB'];
    const [categories, setCategories] = useState(['MK']);
    /*const handleAdd = () => {
        //setCategories([...categories, 'Hola'])
        setCategories(category => [...category, 'NuevoCI'])
    }*/
    return  <>
        <h2>GisExpoertApp</h2>
        <hr />
        <AddCategory  setCategories={setCategories} />
        <ol>
            {
                categories.map( category => (
                    <GifGrid
                        key={category} 
                        category={category}
                    />
                ))
            }
        </ol>
    </> ;
};

export default GifExportApp;