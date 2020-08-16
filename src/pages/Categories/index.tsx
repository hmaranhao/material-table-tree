import React, { useState } from 'react';
import { IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

import MyTable from '../../components/MyTable';
import AddOrEdit from './addOrEdit';

import { Container, TopBar, Title, List } from './styles'

interface Category {
  id: number;
  name: string;
  parentId: any;
}

const dataMock = [
  {
    id: 1,
    name: 'Eletrônicos',
    parentId: null
  },
  {
    id: 2,
    name: 'Smart-Phones',
    parentId: 1
  },
  {
    id: 3,
    name: 'LG',
    parentId: 2
  },
  {
    id: 4,
    name: 'Vestuário',
    parentId: null
  },
  {
    id: 5,
    name: 'Camisas Masculinas',
    parentId: 4
  },
  {
    id: 6,
    name: 'Camisas Femininas',
    parentId: 4
  }
]

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(dataMock)
  const [addOrEdit, setAddOrEdit] = useState({ open: false, data: { id: 0,  name: '', parentId: 0 } })

  async function addOrEditCategory(verb: string, category: any){
    let response = dataMock
    
    if(verb === 'put'){
      response = await Promise.resolve(categories.map(c => {
        if(c.id === category.id){
          return category
        }
        return c
      }))
    }else if(verb === 'post'){
      response = await Promise.resolve([...categories, {...category, id: Number(new Date().getTime()) }])
    }
    setAddOrEdit({ open: false, data: { id: 0,  name: '', parentId: 0 } })
    setCategories(response)
  }

  async function deleteCategory(category:any) {
    const response = await Promise.resolve(categories.filter((c: any) => c.id !== category.id))
    setCategories(response)
  }

  return (
    <Container>
      <TopBar>
        <Title>Categorias</Title>
        <IconButton onClick={() => setAddOrEdit({ open: true, data: { id: 0,  name: '', parentId: 0 } })}>
          <Add style={{ color: '#FB7A00' }} />
        </IconButton>
      </TopBar>
      <List>
        <MyTable
          data={categories}
          columns={[
            {
              title: 'Categoria',
              field: 'name'
            }
          ]}
          parentChildData={
            (row: Category, rows: Category[]) => {
              return rows.find((category: Category) => category.id == row?.parentId)
            }
          }
          actions={
            [
              {
                icon: () => (<Add style={{ color: '#FB7A00' }} />),
                tooltip: 'Editar',
                onClick: (event: any, rowData: Category) => {
                  setAddOrEdit({ open: true, data: { id: 0, name: '', parentId: rowData.id } })
                }
              },
              {
                icon: () => (<Edit style={{ color: '#FB7A00' }} />),
                tooltip: 'Editar',
                onClick: (event: any, rowData: Category) => {
                  setAddOrEdit({ open: true, data: rowData })
                }
              },
              {
                icon: () => (<DeleteOutline style={{ color: '#FB7A00' }} />),
                tooltip: 'Apagar',
                onClick: (event: any, rowData: Category) => {
                  deleteCategory(rowData)
                }
              },

            ]
          }
        />
      </List>
      {addOrEdit.open && 
        <AddOrEdit 
          onHide={() => setAddOrEdit({ open: false, data: { id: 0,  name: '', parentId: 0 } })}
          addOrEditCategory={addOrEditCategory}
          categories={categories}
          data={addOrEdit.data}
        />
      }
    </Container>
  );
}

export default Categories;