$(() => {
    const project_pf = $('.project_pf');
    const info_pf = $('.info_pf');
    const projtab_pf = $('#projtab_pf');
    const infotab_pf = $('#infotab_pf');
    infotab_pf.children().hide()
    projtab_pf.children().hide()
    info_pf.click(() => {
        if (!info_pf.hasClass('activetab_pf')) {
            if (project_pf.hasClass('activetab_pf')) {
                project_pf.removeClass('activetab_pf')
            }
            info_pf.addClass('activetab_pf')
            projtab_pf.hide()
            projtab_pf.children().hide()
            infotab_pf.show()
            infotab_pf.children().show()
        }
    });
    project_pf.click(() => {

        if (!project_pf.hasClass('activetab_pf')) {
            if (info_pf.hasClass('activetab_pf')) {
                info_pf.removeClass('activetab_pf')
            }
            project_pf.addClass('activetab_pf')
            projtab_pf.children().show()
            projtab_pf.show()
            infotab_pf.children().hide()
            infotab_pf.hide()
        }
    });
    const data = {
        "projects" : [
            {
                "id" : 1,
                "name" : "Разработка языка программирования",
                "link" : "https://docs.google.com/document/d/1O-I7YTsoDMOxgAnB-PUNiTmaiRDIKpF6Qb4anGAgDq8/edit?usp=sharing"
            },
            {
                "id" : 2,
                "name" : "Создание макета для сайта инди-dev'а",
                "link" : "https://docs.google.com/document/d/16t98mTfqnxapVghV1UPc6R0vZA04PSAHEwoOFANqbds/edit?usp=sharing"
            },
            {
                "id" : 3,
                "name" : "Разработка спец-сайта для игры",
                "link" : "https://docs.google.com/document/d/1kmzx--fPoxdot4MyfC93ownWgCVh5J-rk-EBvIaW0Og/edit?usp=sharing"
            }
        ]
    }
        $.each(data.projects, function(index, element) {
            projtab_pf.html( projtab_pf.html()+`<div class="projectmin_pf">
                        <div class="prmid_pf" style="text-align: center;display: flex;align-items: center;"><p>${element.id}</p>
                        </div>
                        <div class="prmtitle_pf"><p>${element.name}</p></div>
                        <div style="display: flex; flex-direction: column; align-items: center; height: 100%;
    justify-content: center;">
                            <a href="${element.link}" id="more_${element.id}_pf" class="more_pf"><p
                                        style="text-align: center; width: 100%">
                                    Подробнее
                                </p>
                            </a>
                        </div>
                    </div>`);
        });
    projtab_pf.children().hide()
})