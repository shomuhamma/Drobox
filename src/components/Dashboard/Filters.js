import React from 'react';
import { useFile } from '../../hooks/useFile';

import Search from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import gridView from '../../assets/svg/grid_view.svg';

import {
    FilterContainerFlex,
    BoxInputSearch,
    BoxFilter,
    SelectFilter,
    LabelSearch,
    ImgIcon,
} from './style';
import { Input } from '../UI';

export default function Filters({ isGrid, setIsGrid }){
    const { setFilterFile, setFilterType } = useFile();

    function filterFiles(e){
        const filterValue = e.target.value;

        setFilterType('select');
        setFilterFile(filterValue);
    }

    function searchInputFile(e) {
        const valueSearch = e.target.value;
        console.log(valueSearch)
        
        setFilterType('input');
        setFilterFile(valueSearch);
    }

    return(
        <FilterContainerFlex>
                <BoxInputSearch>
                    <Input
                        id="search"
                        type="text"
                        placeholder="Search..."
                        onChange={searchInputFile}
                    />

                    <LabelSearch htmlFor="search">
                        <Search />
                    </LabelSearch>
                </BoxInputSearch>

                <BoxFilter>
                    <SelectFilter  
                        onClick={filterFiles}
                        name="filter_files"
                    >
                        <option value="photos">Fotos</option>
                        <option value="videos">Videos</option>
                        <option value="audios">Audios</option>
                        <option value="documents">Documents</option>
                        <option value="others">Others</option>
                    </SelectFilter>

                    {
                        isGrid ? (
                            <ViewList
                                style={{ cursor: 'pointer', fontSize: '32px' }}
                                onClick={() => setIsGrid(!isGrid)}
                            />
                        ) : (
                            <ImgIcon
                                src={gridView}
                                alt="Icon of a grid layout illustration"
                                onClick={() => setIsGrid(!isGrid)}
                            />
                        )
                    }
                    
                </BoxFilter>
        </FilterContainerFlex>
    );
}