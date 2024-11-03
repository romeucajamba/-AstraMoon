"use client"

import * as React from "react"
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
import { useSearchParams } from "react-router-dom"

interface PaginationProps {
    pages: number,
    items: number,
    page: number
}
const Pagination = ({ page,  pages }: PaginationProps) => {
    const totalItems = 200

    const [, setCurrentPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState("10")
    const [, setSearchParams] = useSearchParams()


    function fisrtPage() {
        setSearchParams(params => {
            params.set('page', '1')

            return params
        })
    }

    function previusPage() { 
        if(page - 1 <= 0) {
            return
        }
        
        setSearchParams(params => {
            params.set('page', String(page - 1))

            return params
        })
    }

    function nextPage() {
        setSearchParams(params => {
            params.set('page', String(page + 1))

            return params
        })
    }

    function lastPage() {
        setSearchParams(params => {
            params.set('page', String(pages))

            return params
        })
    }


    return (
        <div className="flex items-center justify-between px-2">
            <div className="text-sm text-zinc-700 text-muted-foreground">
                Showing 10 of {totalItems} items
            </div>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <span className="text-sm">Rows per page</span>
                    <Select
                        value={rowsPerPage}
                        onValueChange={(value) => {
                            setRowsPerPage(value)
                            setCurrentPage(1)
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px] text-slate-100 border-none bg-zinc-900">
                            <SelectValue placeholder={rowsPerPage} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {["5", "10", "20", "50", "100"].map((pageSize) => (
                                <SelectItem key={pageSize} value={pageSize} >
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-zinc-700">
                        Page {page} of 20
                    </span>
                    <div className="flex items-center space-x-1">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            onClick={fisrtPage}
                            disabled={page - 1 <= 0}
                        >
                            <ChevronsLeft className="h-4 w-4 text-slate-100" />
                            <span className="sr-only">First page</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            onClick={previusPage}
                             disabled={page - 1 <= 0}
                        >
                            <ChevronLeft className="h-4 w-4 text-slate-100" />
                            <span className="sr-only">Previous page</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            onClick={nextPage}
                        >
                            <ChevronRight className="h-4 w-4 text-slate-100" />
                            <span className="sr-only">Next page</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-zinc-900 hover:bg-zinc-800 border-none"
                            // disabled={currentPage === totalPages}
                            onClick={lastPage}
                        >
                            <ChevronsRight className="h-4 w-4 text-slate-100" />
                            <span className="sr-only">Last page</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination