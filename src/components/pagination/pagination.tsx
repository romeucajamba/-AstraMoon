"use client"

import * as React from "react" // Importa todas as exportações de React
import {
    ChevronLeft,
    ChevronRight, 
    ChevronsLeft, 
    ChevronsRight,
} from "lucide-react" 

import {
    Select,
    SelectContent, 
    SelectItem,
    SelectTrigger, 
    SelectValue, 
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "react-router-dom" // Hook para manipular parâmetros de busca na URL

// Define as propriedades que o componente Pagination espera receber
interface PaginationProps {
    pages: number, // Total de páginas
    page: number // Página atual
    setRowsPerPage: (value: string) => void; // Função para definir a quantidade de linhas por página
    rowsPerPage: string // Quantidade de linhas exibidas por página
}

// Componente de Paginação
const Pagination = ({ page, pages, setRowsPerPage, rowsPerPage }: PaginationProps) => {
    const totalItems = 200 // Total de itens que será mostrado na paginação

    const [, setCurrentPage] = React.useState(1) // Estado para a página atual (não utilizado diretamente)
    const [, setSearchParams] = useSearchParams() // Hook para manipular os parâmetros de busca na URL

    // Função para ir para a primeira página
    function fisrtPage() {
        setSearchParams(params => {
            params.set('page', '1') // Define o parâmetro 'page' como '1'
            return params // Retorna os parâmetros atualizados
        })
    }

    // Função para ir para a página anterior
    function previusPage() { 
        if(page - 1 <= 0) { // Verifica se a página anterior é válida
            return // Se não for, sai da função
        }
        
        setSearchParams(params => {
            params.set('page', String(page - 1)) // Define o parâmetro 'page' como a página anterior
            return params // Retorna os parâmetros atualizados
        })
    }

    // Função para ir para a próxima página
    function nextPage() {
        setSearchParams(params => {
            params.set('page', String(page + 1)) // Define o parâmetro 'page' como a próxima página
            return params // Retorna os parâmetros atualizados
        })
    }

    // Função para ir para a última página
    function lastPage() {
        setSearchParams(params => {
            params.set('page', String(pages)) // Define o parâmetro 'page' como a última página
            return params // Retorna os parâmetros atualizados
        })
    }

    return (
        <div className="flex items-center justify-between px-2 py-6"> {/* Contêiner flexível para alinhar itens */}
            <div className="text-sm text-zinc-700 text-muted-foreground">
                Showing {rowsPerPage} of {totalItems} items {/* Exibe a quantidade de itens exibidos */}
            </div>
            <div className="flex items-center space-x-6"> {/* Contêiner flexível para botões e seleção */}
                <div className="flex items-center space-x-2">
                    <Select
                        value={rowsPerPage} // Valor atual do Select
                        onValueChange={(value) => {
                            setRowsPerPage(value) // Atualiza a quantidade de linhas por página
                            setCurrentPage(1) // Reseta a página atual para 1 ao mudar a quantidade de linhas
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px] text-slate-100 border-none bg-zinc-900">
                            <SelectValue placeholder={rowsPerPage} /> {/* Exibe o valor atual selecionado */}
                        </SelectTrigger>
                        <SelectContent side="top"> {/* Conteúdo do Select */}
                            {["5", "10", "20", "50"].map((pageSize) => ( // Mapeia as opções disponíveis
                                <SelectItem key={pageSize} value={pageSize} >
                                    {pageSize} {/* Exibe o valor da opção */}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-zinc-700">
                        Page {page} of 20 {/* Exibe a página atual e total de páginas */}
                    </span>
                    <div className="flex items-center space-x-1"> {/* Contêiner para botões de navegação */}
                        <Button
                            variant="outline"
                            size="icon" 
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            onClick={fisrtPage} // Chama a função para ir para a primeira página
                            disabled={page - 1 <= 0} // Desabilita o botão se já estiver na primeira página
                        >
                            <ChevronsLeft className="h-4 w-4 text-slate-100" />
                            <span className="sr-only">First page</span>
                        </Button>
                        <Button
                            variant="outline" // Estilo do botão
                            size="icon" // Tamanho do botão
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            onClick={previusPage} // Chama a função para ir para a página anterior
                             disabled={page - 1 <= 0} // Desabilita o botão se já estiver na primeira página
                        >
                            <ChevronLeft className="h-4 w-4 text-slate-100" /> {/* Ícone para a página anterior */}
                            <span className="sr-only">Previous page</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon" 
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            onClick={nextPage} // Chama a função para ir para a próxima página
                        >
                            <ChevronRight className="h-4 w-4 text-slate-100" /> {/* Ícone para a próxima página */}
                            <span className="sr-only">Next page</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            onClick={lastPage} // Chama a função para ir para a última página
                        >
                            <ChevronsRight className="h-4 w-4 text-slate-100" /> {/* Ícone para a última página */}
                            <span className="sr-only">Last page</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination; // Exporta o componente de paginação
