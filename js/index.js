function changeTheme(month) {
    const body = document.body;

    body.classList.remove(
        'january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'
    );

    body.classList.add(month);
}

