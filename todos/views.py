from utils.render_react_page import render_react_page


def index_view(request):
    if request.method == 'GET':
        todos = [
            {
                "id": 1,
                "title": "hello"
            },
            {
                "id": 2,
                "title": "world"
            },
            {
                "id": 3,
                "title": "'\"</script><script>alert(1)</script>"
            }
        ]
        return render_react_page(request, 'todos-index', {'todos': todos})
