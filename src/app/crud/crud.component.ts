import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],  
})


export class CrudComponent {
  nome = '';
  anoNascimento = 0;
  email = '';
  cidade = '';
  user: any[] = [];

  adicionarUser() {
    if (this.nome 
      && this.anoNascimento 
      && this.email 
      && this.cidade) 
      {
      this.user.push({
            nome: this.nome,
            anoNascimento: this.anoNascimento,
            email: this.email,
            cidade: this.cidade,
      });
      this.limparFormulario();
    } else {
      alert('Preencha todos os campos');
    }
  }

  limparFormulario() {
    this.nome = '';
    this.anoNascimento = 0;
    this.email = '';
    this.cidade = '';
  }

  removerUser(index: number) {
    this.user.splice(index, 1);
  }
}
