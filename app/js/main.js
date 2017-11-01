(function(){
  var makeTree = function(obj) {
    var list = document.createElement('ul');

    for (var prop in obj) {
      if (!obj.hasOwnProperty(prop)) continue;
      var item = document.createElement('li');
      item.classList.add('tree-item');
      if (obj[prop] instanceof Object) {
        item.textContent = prop;
        item.appendChild(makeTree(obj[prop]));
      }
      if (!item.innerHTML) item.textContent = prop;
      list.appendChild(item);
    }
    return list;
  };

  var list = makeTree({
    Developers: {
      FrontEnd: {
        Ilya: null,
        Michael: null,
        Curry: null
      },
      Backend: {
        Dima: null,
        Carl: null
      },
      Desktop: {
        ClientSide: {
          Michael: null,
          Katya: null
        },
        ServerSide: {
          Vadim: null,
          Sonya: null
        }
      }
    },
    DevOps: {
      Daniel: null
    }
  });

  document.body.append(list);
  list.addEventListener('click', function(e) {
    var el = document.elementFromPoint(e.clientX, e.clientY);
    var innerList = el.querySelector('ul');
    if (innerList !== null) {
      var title = el.childNodes[0];
      var span = document.createElement('span');
      span.textContent = title.textContent;
      title.remove();
      el.insertBefore(span, el.firstChild);

      if (document.elementFromPoint(e.clientX, e.clientY) === span) {
        innerList.classList.toggle('hidden');
      }

      span.remove();
      el.insertBefore(title, el.firstChild);
    }
  });
})();