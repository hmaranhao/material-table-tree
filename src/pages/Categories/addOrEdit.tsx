import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@material-ui/core'

import { Title, Input, Label, Select, DivInputBlock, Option } from './styles'

interface AddOrEditProps {
    onHide: FunctionStringCallback;
}

const AddOrEdit: React.FC<AddOrEditProps> = ({
    onHide
}) => {
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
            <DialogTitle>
                <Title>Adicionar Categoria</Title>
            </DialogTitle>
            <DialogContent>
                <DivInputBlock>
                    <Label htmlFor="category">Nome da categoria</Label>
                    <Input type="text" id="category" />
                </DivInputBlock>
                <DivInputBlock>
                    <Label htmlFor="parent">Categoria pai</Label>
                    <Select
                        id="parent"
                    >
                        <Option value="">Selecione</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                    </Select>
                </DivInputBlock>
            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    );
}

export default AddOrEdit;