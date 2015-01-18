    $(function() {
        $('#carousel').carouFredSel({
            direction: 'up',
            items: {
                visible: 1
            },
            auto: false,
            scroll: {
                duration: 1000
            },
            pagination: {
                container: '#pager', 
                anchorBuilder: false
            }
        });
    });