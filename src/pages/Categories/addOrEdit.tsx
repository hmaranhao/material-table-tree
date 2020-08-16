import React, { FunctionComponent, useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core'

import {
    Title,
    Input,
    Label,
    Select,
    DivInputBlock,
    Option,
    ButtonPrimary
} from './styles'

interface AddOrEditProps {
    onHide: FunctionStringCallback;
    categories: Array<object>;
    addOrEditCategory: Function;
    data?: any;
}

const AddOrEdit: React.FC<AddOrEditProps> = ({
    onHide,
    categories,
    addOrEditCategory,
    data
}) => {
    const [form, setForm] = useState({
        name: '',
        parentId: '',
        ...data
    })

    function save(){
        if(data && data?.id > 0){
            addOrEditCategory('put', form)
        }else {
            addOrEditCategory('post', form)
        }
    }
    
    return (
        <Dialog
            open
            onClose={onHide}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                style: {
                    background: '#323131',
                    color: '#FB7A00'
                }
            }}
        >
            <DialogTitle style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Title>Adicionar Categoria</Title>
            </DialogTitle>
            <DialogContent>
                <DivInputBlock>
                    <Label htmlFor="category">Nome da categoria</Label>
                    <Input
                        type="text"
                        id="category"
                        onChange={(e: any) => setForm({ ...form, name: e.target.value })}
                        value={form.name}
                    />
                </DivInputBlock>
                <DivInputBlock>
                    <Label htmlFor="parent">Categoria pai</Label>
                    <Select
                        id="parent"
                        onChange={(e: any) => setForm({ ...form, parentId: e.target.value })}
                        value={form.parentId || ''}
                    >
                        <Option value="">Selecione</Option>
                        {categories.map((category: any) => {
                            return (
                                <Option value={category.id} key={category.id}>{category.name}</Option>
                            )
                        })}
                    </Select>
                </DivInputBlock>
            </DialogContent>
            <DialogActions>
                <ButtonPrimary onClick={save}>Salvar</ButtonPrimary>
            </DialogActions>
        </Dialog>
    );
}

export default AddOrEdit;