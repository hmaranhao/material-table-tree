import React, { useState } from 'react';
import { IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';

import MyTable from '../../components/MyTable';
import AddOrEdit from './addOrEdit';

import { Container, TopBar, Title, List } from './styles'
import { isNull } from 'util';

interface Category {
  id: number;
  name: string;
  parent: any;
}

const dataMock = [
  {
    id: 1,
    name: 'Eletrônicos',
    parent: null
  },
  {
    id: 2,
    name: 'Smart-Phones',
    parent: { id: 1, name: 'Eletrônicos' }
  },
  {
    id: 3,
    name: 'LG',
    parent: { id: 2, name: 'Smart-Phones' }
  },
  {
    id: 4,
    name: 'Vestuário',
    parent: null
  },
  {
    id: 5,
    name: 'Camisas Masculinas',
    parent: { id: 4, name: 'Vestuário' }
  },
  {
    id: 6,
    name: 'Camisas Femininas',
    parent: { id: 4, name: 'Vestuário' }
  }
]

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(dataMock)
  const [addOrEdit, setAddOrEdit] = useState({ open: false })

  return (
    <Container>
      <TopBar>
        <Title>Categorias</Title>
        <IconButton onClick={() => setAddOrEdit({ open: true })}>
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
              return rows.find((category: Category) => category.id === row?.parent?.id)
            }
          }
          actions={
            [
              {
                icon: () => (<Edit />),
                tooltip: 'Editar',
                onClick: (event: any, rowData: Category) => {
                  // Do save operation
                }
              },
              {
                icon: () => (<DeleteOutline />),
                tooltip: 'Apagar',
                onClick: (event: any, rowData: Category) => {
                  // Do save operation
                }
              },

            ]
          }
        />
      </List>
      {addOrEdit.open && 
        <AddOrEdit 
          onHide={() => setAddOrEdit({ open: false })}
        />
      }
    </Container>
  );
}

export default Categories;