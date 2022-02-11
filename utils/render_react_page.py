from django.shortcuts import render


def render_react_page(request, element_id: str, page_context=None):
    return render(request, 'react-page.html', {
        'element_id': element_id,
        'page_context': page_context
    })
