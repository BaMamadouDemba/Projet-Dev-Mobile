/*function ajouterElement()
{
    let task = document.getElementById('task');
    if (task.value.trim() != '') {
        //taskList.innerHTML + '<li>' + taskList.value + '</li>';
    //let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(task.value));
    //taskList.appendChild(listItem);


    $(listItem).on('swiperight', function(){
        if(listItem.className.indexOf('task-done') == -1)
        {
            //listItem.className += 'task-done';
            listItem.className = item.className.replace('done','').trim();
        }
        else
        {
            listItem.className = listItem.className.replace('task-done', '');
        }
    });

    $(listItem).on('swipeleft', function(){
        $(this).slideUp("slow", function(){
            $(this).remove();
            });
    
        })
        let taskList = document.getElementById('taskList');
        //taskList.appendChild(listitem);
        //task.value='';
        task.value = '';
        task.focus();
        $(taskList).listview('refresh');
    }
}
        //let deleteDirectly = true;
        //$(listItem).hide('slow', function(){
            //listItem.remove();
       /* if(listItem.className.indexOf('task-done') == -1){
            deleteDirectly = true;
        }
        else
        {
            deleteDirectly = confirm('Tâche non terminée. Supprimer ?');
        }
        if (deleteDirectly) 
        {
            $(listItem).hide('slow', function() {
                listItem.remove();
            });
        }
    });
    //});
    
    task.value = '';
    task.focus();
    $(taskList).listview('refresh');
    }

}*/ 

function ajouterElement(){
    let task = document.getElementById('task');
    if(task.value.trim() != ''){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(task.value));

        $(item).on('swiperight', function(){
            if(item.className.indexOf("done") != -1){
                item.className = item.className.replace('done','').trim();
            }
            else item.className += " done";
        });
        $(item).on('swipeleft', function(){
            $(this).slideUp("slow", function(){
                $(this).remove();
            });
        })
        let taskList = document.getElementById('taskList');
        taskList.appendChild(item);
        task.value='';
        $(taskList).listview('refresh');
    }
}