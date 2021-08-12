import Header from "./header/Header"

function Layout({ children }) {
    return (
        <main className="w-full flex flex-col items-center">
            <Header menus={{
                '/': 'Giriş',
                '/projects': 'Fikirler',
                '/certificates': 'Sertifikalar',
                '/bookmarks': 'Yer İmleri'
            }}/>
            { children }
        </main>
    )
}

export default Layout