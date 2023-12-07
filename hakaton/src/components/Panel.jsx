function Panel() {
    function exit() {
        // Set the expiration date to a past date to remove the cookie
        document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.reload();
    }

    return (
        <div className="panel">
            <button onClick={exit}>Выйти</button>
        </div>
    );
}

export default Panel;
