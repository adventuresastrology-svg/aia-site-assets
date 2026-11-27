/* Chart Design Station (cds) v1.1 | Adventures In Astrology | ES5. Mount with <div id="cds-mount"></div> or window.CDS_MOUNT(el, {clients, brand, current}). */
/* Chiron table: geocentric apparent longitude, 5-day steps, 1920-2080, from Swiss Ephemeris seas_18 */
(function(r){var A='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',s='hChZhviDiYiqi9jNjdjrj3kDkMkVkbkgkkkmkmklkikekZkSkJj/j1jnjbjMi7iriZiHhzhehKg1gggKf0fefKe0egeNd7dpdZdLc/c0crckcgcececgclcsc1dBdPdddueBeVepe/fVfsgEgagxhIhfhziJidiujBjRjhjuj6kFkOkWkckikkklkmklkhkdkXkQkHj9jxjljXjJi4iniViChuhbhFgwgbgFfvfafEewebeJd2dldWdHc7cxcpcjcecdcecgcmcuc3dEdRdhdzeFeZevfEfbfygJghg3hOhkh5iOiii0jFjWjkjxj+kIkRkYkekjklknkmkkkhkdkWkOkGj7jvjjjVjFi1ijiSh+hrhWhBgsgWgAfrfUfAereXeEdxdhdSdEc4cucmcgcdcccdchcmcvc6dGdUdkd3eKeeezfKfhf4gPgng9hUhqh/iUini5jLjajpj2kBkLkUkbkhklknkoknklkikckWkOkFj6jujhjTjDiyihiPh7hnhSg+gngSf8fmfQe7emeSd/dtdddNdAc1cqckcecbcacdcgcncwc7dIdXdod6eOeje5fPfnf9gWgshEhahxiFiaiti/jQjfjuj6kGkQkXkfkkknkqkqkpknkjkdkXkOkFj5jujgjRjCiwifiMh5hkhPg6gkgOf4fhfMe3eheOd6dpdYdJc8cxcncgcbcZcZcbcgcncxc8dKdZdrd+eSeoe9fVfsgEgbgzhKhhh3iMigizjFjWjljzkAkKkVkckjkokqktktkskqkkkfkYkQkGj6jujfjSjAiwieiKh3hihMg3ghgKf0fefIeyedeJd2dkdUdEc4csckcdcYcWcXcacfcncwc9dMdcdteBeWesfDfafxgKghg5hRhoh9iSini6jLjcjrj6kFkQkakhkokskwkwkykvkskokikbkRkIj7jvjhjSjBiwidiJh2hghLg1gegIfwfafEeueZeFdxdfdPdBczcocfcZcVcUcUcYcdcmcxc9dNdddweEeaewfGfff3gQgnhAhXhuiEiZiujAjTjjjyj/kMkWkgknkukxk1k2k2k0kxkrkmkekVkKj/jxjjjTjCixidiKh1hghKgzgdgFfufYfAereUeBdtdbdKc7cvcjcbcVcRcQcRcVccckcwc9dNdfdyeGedezfLfkf8gVgthGheh0iLigi1jIjZjqj5kHkTkdknktk0k4k7k8k8k5k3kxkrkikZkPkCj1jmjWjFizifiMh2hghKgygcgEfsfVe+eneSd8dodXdFc3cqcecWcQcNcMcNcScZcicuc9dMdfdzeIefe3fOfogBgagzhMhkh7iSioi7jPjhjykBkOkbklkuk1k8k/lClDlDlBk8k4kxkpkfkUkIj6jqjbjJi2ijiOh4hihLgzgcgEfrfUe7eleOd5dkdSdBcxclcZcRcLcIcGcJcOcWcfcrc7dLdfdzeJehe4fSfsgFgfg4hRhriCiYivjDjXjpj6kJkXkjkuk2k+lElIlLlLlLlJlFlAk5kwknkckOkBjxjhjPi7ioiSh8hlhOg2gdgEfsfTe6ejeMd1dhdOc8ctcfcTcMcFcCcBcEcIcRcbcoc4dJdddyeKehe6fUfugJgjg9hXhwiJifi3jKjfjykCkSkgksk3lBlHlOlSlVlVlVlTlPlKlCk7kwklkXkKj6jpjWjDiuiZiChrhSg5ghgHftfUe6eieKd0dedKc3cocacOcFb+b8b6b+cDcKcWcjc0dGdadweIege7fVfwgLgnhBhch2iOini9jTjoj6kLkckqk2lClLlTlZldlglilglflblWlOlGk9kwkjkVkFj0jgjNi4iiiKhyhag/gmgMfwfXe8ejeKdydcdHc0cjcUcIb+b4b0b0b1b7cEcPcdcudAdWdseFefe5fVfxgNgphFhgh6iVitjEjbjwkDkWklk1lClNlXlflmlrltlvlvltlplklelUlLk/kykjkTkBjvjajEiuiWh9hjhJgugTf3fcfAemeMdydcdFcwcfcPcCb4bwbsbrbtbyb7cGcVcmc5dPdneAeae3fTfwgNgqhGhkh+iaizjLjjj5kMkgkwlAlPlalklul0l6l9l/l/l+l6l2lulnlclRlEk1klkTj/jsjVi9imiLhyhWg6gegBfkfIereQd2dcdFcwcccKb8bxbpbjbhbjbobwb8cKcbcwdGded5eUewfPfsgMgphHhkiCidi4jSjqkBkWkqk8lMlclol0l9mFmLmPmRmTmRmPmKmEl8lylnlalLk7kpkWkBjqjTi6igiEhohLgugQfxfTe1eZd8dhdIcwcacIb4bqbhbabXbXbcbjbvb8cPcjc5dTdteKeofHfmgGgmhFhkiCifi8jXjwkJkfk0lIlZlql3mEmPmXmfmjmnmompmmmjmdmVmNmCl1lnlWlFkykdkGjujUi6ieiBhihEglgEflfGemeHdrdOc1cdcIb0bmbabRbMbLbNbVbfbsb+cRcpdDded8ebe6fcf9geg/hgh/ifi9jaj1kOkok+lTlml4mHmWmimrm0m6nAnCnCnCnAm6m1msmimWmIl5lolUlAkpkRj3jcjAihiDhihCggf/fde8ebd6dcdAckcMb3bjbVbJbCa/a+bEbMbYbqb8cUctdJdoeIepfLfugRg0hWh5iai6jZj2kTktlFldlzmGmXmnm2nBnLnUnanenhningndnYnRnIm+mxmimRmAlrlVk9kkkIjsjNitiMhqhHgkgAfce4eVd0dTc1cYb+bobVbFa6azawaya4bCbQbib5cSctdMdtePe0fXf8ghhGhriPiwjTjykSkulLljl8mRmmm5nInXnjnun3n9oBoFoEoFoBn7n1nrngnUnEmzmgmLl0lblBkjkFjljEigh8hXgxgLfle+eZd1dRcxcSb3bebJa5asalahajapa1bEbYbvcKcodJdseQe2fcgFgrhSh4iejEjmkIkolHlll/mZmwnFnYnrn5oHoTobokoposouotoqomogoWoLn/nvnfnLm2memElqlLkskKjnjCidh1hMgkf7fSepeCdbc3cWb3bcbDaxaiaYaTaUaZakazbHbfb6cac9dheHevfYgCgrhVh9iljMjykWk5lZl4mWmxnKnin2oKoboqo3pDpLpSpXpZpbpZpVpQpIo+ozojoToBnsnUm6mfmBlhk/kaj0jNikh6hPgif3fLegd2dOcncFblbJayaeaRaIaGaIaQadawbHbicCckdJdyeafGfwgdhIh0iejIjwkXk9lgmCminAnbn2oNojo3pHpYplpwp5qAqFqHqJqGqDp9p1pqpepOo9oqoTn7ngnCmjmCldk2kPjki6iMhfgwgBfSeld5dOclcBbebCaoaVaGZ+Z7Z+aGaVapbBbfcAckdLd1ehfOf7gphWiEiwjbkGktlVl6mdm+ndn6oVovpEpaprp9qKqXqgqnquqxqyqwquqnqgqWqJp6popVo+oloKnrnLmomElckykHjZirh8hLgafoe5eLddcycKblbGaraVaEZ4Z1Z2Z+aLada2bTb0cZdAdreXfFf0gihSiAiujbkHkwlZmAmlnHnooGojo+pWprqAqRqhquq5rCrIrOrPrPrNrIrBq3qsqdqMp4pipLouoRnxnNmpmBlYkrj+jOifhsg7gIfXemd4dKcgb4bXa4afaLZ8Z1Z0Z3aCaSanbDbhcEcrdUeAetfcgLg6hpiYjHjykelIlvmXm6ndn9obo3pRppp+qRqiqxq9rIrQrWrZrarZrVrPrHq8quqfqMp2pfpFoooInmnCmblylHkajri8iKhZgmf0fEeUdmc6cSbtbNawaaaJZ8Z4Z4Z+aLacazbPbvcSc5djeOe7fpgYhGh0ijjPj8kllPl2mbm/ngn/odo4pRpop9qOqfqtq4rCrIrMrQrPrMrIq/q2qqqaqKp0pepFopoLnqnHmhl6lQklj3jIiahpg4gIfXepd7dRcncDbhbEaraZaKaBZ/aCaLaZarbEbfcAckdJdyedfJf1gjhPh8iojUj+kmlOl0mXm5nan2oTotpEpapsp+qMqYqjqpqvqyqzqwqtqlqcqQqCpxpepIovoVn3nYm2mSlslEkajvjDiVhmg5gKfdeveEdbc0cQbvbTa7anaYaPaKaMaSadaubCbcb4cac8dheKeyfdgIgyheiIiyjckCkplPlxmTmznQnroGodoypFpWpkpxp7qCqIqKqLqJqEp+p0pppapLo3ohoJnwnSm1mUlwlMkmj+jViqh/hUgof8fSeneAdYc1cUb1babEayalacaXaZaeapa4bLbib9ccc8dfeEerfTf8gkhMh2idjFjqkQkylVl1mTmwnKnjn6oNohovo9pJpSpZpdpfpfpcpXpQpGo5oroaoHnynZm/mjmGlllDkgj7jViuiFhdg0gLfje7eUdvdNcscOb0bcbIa6auaoalaoaua5bJbcbycMcpdIdqeNexfXf+gkhLhxiXi7jgkCkklElhl/mZmynJndnwoAoPobokosoxo0o1ozouopofoVoHn4nmnSm8mkmJlulPkxkPjsjJikh/hagygMfnfBeed6dZc6cecEbubZbLa/a3a0a0a5bBbObfbzcJcjc/ded/ehfDfogMgwhVh5ici/jhkBkgk9lZlzmMmim2nJnZnnnzn9oEoKoMoOoMoIoCn6nwnjnUnDmxmbmElslRk0kXj4jXi2iThwhMgpgFfhe+edd8dedAclcOb4bmbYbMbFbBbBbFbNbZbnb5cPcndAded7ece9fegBgjhHhoiLirjLjqkIklk/lYlvmFmZmqm5nHnTnbnjnnnqnrnpnlnfnWnMnAmxmhmOl6lklMkykXj7jci+ieh+hcg6gZf3fWe2eWd4dbdBcocRb/btbhbXbQbNbObSbbblbzcFcYcwdKdkeBefe/ffgAgghChiiCiijAjej6kVkulGlclwmCmTmhmum4nAnGnKnNnLnKnEm/m2mrmemQl/lulZlDkrkTj5jdjAiiiEhlhGglgGfmfHepeLdwdVc9cmcTcBbzbnbfbabZbabgbnbzcCcTcnc9dWdweMeqfHfmgGglhEhkiCigi9jYj0kMkkk7lPlilymCmOmamimqmumxmymxmtmomhmXmMl/lxlflMk5kjkMj0jZi/ijiHhphLgsgPfxfTe2eZd/dldNc3cicRcDb2bsbnbjbjbmbtb2cDcRckc3dOdmeAebe4fUfzgQgvhNhqiIiji/jZjzkJkgk0lHlYlnl1mAmJmRmWmambmbmYmUmNmGl6lvlilRlBkukZkEjtjUi7ihiFhqhOgxgTf3fbe/ekeJdxdZdDcwcecPcCb4bxbubsbubyb7cGcTcjc1dKdhd4eTetfIfmgCggg8hYh2iRirjFjdj1kLkekylClRlglql0l8mCmGmHmImGmBl8l1lrlglUlEk0kjkQj7jljOi2idiDhohOgygWf7fffFeqeRd5didNc6cocZcMcDb6b2b1b1b5cBcJcWclc1dJded1eOenfBfdf4gVgwhNhoiCici2jOjkj6kOkgkxlAlNlZlilrlwl1l2l3l2lylslmldlSlGk5kpkYkFjyjejHiwiYh/hlhMgxgXf8fifIeveWd+dpdUdBcwchcVcKcDb+b8b8b/cGcPcZcoc3dKded0eLeke9fXfzgNgphDheh5iSiqjBjYjtkAkTkjkxk/lLlUlblilmlolololklflYlQlGk6ktkekOj8jqjUjAiqiSh7hihIgwgVf8fjfJexeZeDdtdZdHc2cocbcRcJcFcCcDcFcLcTcecrc7dMdfd0eLeje7fVfugKgjg+hYhxiKihi5jPjij2kIkYkmk0k+lIlPlWlZlclclblXlTlNlEk7kvkjkUkEjzjhjNi4ijiMh2hdhFgtgTf6fifKeyebeEdxdcdLc6ctcgcXcPcKcIcHcLcRcYcicvc+dPdid2eMeje7fUftgHggg7hThtiFibiyjIjcjuj/kPkdkqk1k+lFlLlPlRlRlQlNlJlCk6kwkmkYkLj7jrjYjFiyiciHhvhZhAgpgRf4fgfJexeceFdydedOc+cvclcacUcPcMcNcQcVcccnc0dCdSdld4ePeke9fUftgHgfg5hShpiBiZiujCjWjoj6kIkWkiktk2k9lClGlIlIlHlEk/k4kxknkckQkCjzjijRi+iqiWiAhqhTg9gkgNf1fefHewebeFdzdfdPdAcycncecYcScRcRcUcZcicrc3dGdWdpd8eRene/fWfvgHgfg5hRhph/iWirjAjSjkj1kDkRkcknkvk1k7k/lAlBk+k8k3kwkpkfkTkIj6jrjbjJi3ijiPh6hkhOg3gggJfyfbfEeueaeEdydgdPdBc0cpchcZcWcUcVcYcdcmcvc8dKdadseAeVerfBfZfxgJghg6hRhph/iViqi+jQjhjxkAkNkXkikqkwk1k5k5k6k4k0kwkokhkYkMkBjyjkjTjDiwiciJh0hehIgzgbgEfufXfCereXeDdxdfdPdBc1cqcjcccYcXcYcbchcpczdAdPdedxeEeYevfFfcf0gMgkg7hThqiAiViqi9jPjgjvj+kJkVkekmkrkwkzk1k0kxkvkpkikbkQkGj5jsjdjMi8ipiXiChuhYhDgtgWgAfqfTe+eoeVeBdudedOdBc1crcjcdcbcZcbceckctc3dEdTdjd1eIedezfJfgf4gPgng/hVhsiCiWiri9jPjgjuj8kIkSkbkjkokskvkwkvkskpkkkckVkLj/jzjljXjGi2ijiQh8hohTg9gogRf7flfPe6eleRd+dsdcdOc/c1crcjcfcbcbcdchcocwc7dIdXdod5eNeie3fOflf8gTgrhChZhviEiYiti+jQjgjuj8kGkRkakgkmkpkrkskrkpkkkfkYkPkFj6jtjgjQjBivieiKh2hjhNg3gigMf3fgfKe2eheOd7dqdadLc+c0cqckcfcdcccfckcqc0c/dMdbdrd/eRene8fTfqgAgYgwhGhchziHicivjAjSjhjvj7kHkQkZkfkkknkokqknklkhkakUkKkBj1jojajLi7iqiYiFhxhchIgygdgHfxfbfHexedeKd4dmdXdJc9cycqcjcgcdcechclcuc2dCdQdgdweDeXerfCfYfvgGgdg0hLhhh2iLifiyjEjTjjjwj9kHkRkYkekjklkoknklkikdkXkQkGj8jxjkjWjGi2iliSiAhshXhCgtgYgBfsfXfBeteZeGd0djdVdGc7cwcpcjcfcecfcicncwc6dFdUdkd1eHecexfHfdf1gLgjg5hQhmh7iQiji1jGjXjljzj+kIkSkYkekjklklkmkjkgkbkUkNkDj5jtjgjRjCiyigiOh6hnhSg9gogSf9fnfSe9eoeUeCdxdgdQdEc4cvcncicfcdcgcjcqcyc8dJdYdod5eNehe2fNfjf6gRgog/hVhriAiVini6jKjajoj1kBkKkTkZkfkjklklklkikekakSkKkBj1jqjcjOi+iuiciJh2hihNg5gjgNf4fifNe4ekeQd+dsdcdNdBc2csclchcececgckcrc0c/dNdbdrd+eSeme8fSfpgAgXguhEhbhxiFiaisi+jPjejrj5kDkMkVkckgkjkmklklkikekXkRkJj+j0jnjZjLi7iqiYiFhyhehJg0gfgIfzfefIezefeMd5dodYdKc9czcqcjcfcdcdchclcsc2dBdPdfdweCeXerfBfYfvgFgdg1hKhhh3iLifixjDjUjijvj8kHkQkXkekiklknknkkkikekXkRkHj9jyjljYjIi4iniViChvhahFgwgagEfvfYfEeueaeId0dkdUdGc6cvcnchcdcccdcgclctc4dEdSdhd0eHebewfHfdf0gMgkg6hRhnh8iRili3jIjZjnj0kBkKkTkbkhkkkokokpkmkjkekYkQkHj9jxjkjWjHi2iliSh/hshWhCgsgWgAfqfUe/eqeWeCdwdfdQdCc2csckcfcbcacbcfcmcuc4dGdUdld3eLefe2fMfjf6gSgphBhXhuiCiYiqi9jPjejsj5kFkPkYkekkkokrkrkrkoklkgkZkRkIj8jxjkjWjFi1ijiRh9hphUg+gpgSf9fmfQe6eleSd9dsdadMc9cycochcbcZcYcaceclcuc6dHdWdnd7eOeke6fRfogAgYgwhHheh0iJieixjDjUjkjyj/kKkUkdkjkoktkukukuksknkikbkTkJj+jyjkjWjFi1iiiQh7hnhSg8gmgPf5fjfMe2eheNd5dmdXdGc5cuckcdcYcVcVcYcdckcuc6dIdYdpd+eReoe+fWfugGgeg1hOhkh7iPili3jKjbjqj4kGkQkakikoktkxkzk0kxkwkrklkekWkLkBjzjmjXjGi1iiiQh7hmhQg6gkgNf2fffJeyedeId1didRdCc0cpcfcZcUcScScVcbcjctc5dJdZdreAeVerfDfafzgLgkg8hThriBiXiri/jRjhjxkAkLkXkgkpkuk0k2k5k4k3k1kvkqkikakPkEj2jpjZjIi3ijiQh8hmhQg5gigLf0fdfFeveZeEdwdddNc9cvckcbcUcPcOcOcScZcgcsc4dJdZdteBeXevfGfff3gRgphChahxiIieiyjGjZjpj4kHkTkekokvk2k6k+k/k/k9k6k2kvkokfkUkIj7jtjcjMi5iniSh9hnhQg6gigKfyfbfDeseVeBdrdZdIc3crcecWcOcLcJcLcOcUcecpc4dHdZdteDeZexfJfif8gVgvhIhgh4iPili6jNjgjxkBkOkckmkvk4k+lClGlGlHlFlCk9k3kukmkbkOkBjyjijQi/iqiViAhqhTg7gigLfyfZfCepeTd9dodVdCczclcZcQcJcFcEcFcKcQcacmc1dFdYdteDeaeyfMfmf/gag0hNhmh/iVisjCjVjpj5kJkXkkkwk5lAlHlMlPlQlQlOlLlGlAk3kukjkXkIj6jpjYjEiwibiGhthXg+glgMfzfafBeoeRd7dkdRc+cucgcTcKcDb/b+b/cDcMcVcicxdCdVdseBebezfNfogDgdg5hShsiEidi0jJjejwkCkTkhkuk5lDlLlSlWlalblalalWlRlKlCk5kukhkSkEjzjgjNi5ijiMh0hdhDgpgQf2fcfCeoeRd4djdNc6cpcbcNcEb9b4b2b5b9cFcOcccsc+dSdoeAeZezfNfqgEggg8hXhxiLiji7jRjmj6kLkcksk4lFlOlXldljlmlololmljlelYlQlFk7kukgkQj/jsjZjEiuiWh+hkhLgxgWf7fgfFereRd5dhdLc3clcWcHb9b2bwbvbxb1b8cHcVclc4dMdkd7eWexfMfpgFgjg+hah2iQipjCjZjukDkVknk3lElQlclklrlxl0l3l3l2lylulolflXlLk+kwkgkOj9jnjTi7ikiLhxhXg7gfgDfofLeveVd6didLc1cicRcCb3bubobmbnbsbzb+cLcccvdFdcd1eResfJfngEgig/hdh5iUivjIjgj3kMkgkxlClRlflplzl6mBmFmImJmHmGmBl7lzlqlflSlEk0kjkQj7jmjOi2iciChmhKgtgQfyfVe4ebeAdldNc1cgcOb9bxbmbgbdbdbgbnbycAcRcjc6dSdseIelfDfigAggg+hdh6iXizjOjnj+kVkqk+lOlflsl5mDmMmTmYmcmdmdmbmYmRmLmCl4lqldlNk8kpkUj+jnjOiziZh7hfhAgigDfkfFemeKdtdSc4chcNb7brbgbXbSbRbUbabkbxcBcWcrdEdfd8eae5fYf6gZg6hah6iXi1jRjskGkdk0lIlbltl8mJmVmfmomumym0m2m1mymtmnmemVmJl7lslblIk0kdkGjtjSi1iZh7hbg7gbf6fZe5eZd7dcdBcncPb7bobbbPbJbFbFbLbTbfbvcCcYcydNdqeKepfLfugPgxhTh0iUi0jSjvkKkjk9lSlol6mLmbmpmzm+nFnLnQnSnRnRnNnInBm4msmgmSmClulblFktkVj5jdi/igiAheg9gZf3fUezeQdwdQczcZcAbqbZbKbAa6a3a5bAbKbZbrcAcZc1dSdzeTe3faf9gihGhpiMitjOjtkLknlBlblxmHmbmrm8nInWnennnsnxnznznynunonhnYnMm+mwmemLl2lflGkrkPjxjSiwiOhqhHgif8fXezeOdtdKcrcPb0bfbLa8axaqapasaza/bObjb6cVcydTd1eZe9fkgJgvhWh6ifjDjkkFkklClel3mQmmm7nMndnsn4oDoLoSoWoZoZoZoVoPoIn/nznmnWnFmwmbmElqlNkxkQjwjNioiDhdg1gOfme/eXdydOcscNbvbXbCaxakadaaacakavbAbVbtcKcpdLdweVe8fkgNg1hdiFirjRj1kXk5lYl1mSmrnDnZnsn/oPocoooxo6o/pDpFpEpBo+o2ouoioWoGn2nhnMm0mZl+lfk/kcj4jTiriDhZgvgEfaeweGdfc5cWb2bZbAasacaSaNaMaRadasbBbZb1cWc5deeHevfZgDgvhZiDisjUj7khlEllmFmknAnanyoIocovo+pMpXphpopvpxpzpxpvpqpipZpMo/ouocoHnwnWm5mcl8lZkzkNjli8iPhjg2gJfbeveDdYcxcLbrbMayaeaOaEaAaBaHaUana9bYb3cac/dpeSe+fqgWhEhxicjHjxkZlAlkmImonInloAoZowpEpYpnp3qCqMqUqbqeqgqeqcqXqPqGp6prpapHoyoan/nhnDmhl9lWkukDjYiqh8hLgcfse9eOdic3cPbsbLawaZaIZ8Z4Z4Z+aKaca0bQbvcUc6dkeQe8frgZhIh2ikjQj7kllOl0mZm7ncn6oXoxpKpfpzqGqUqiqtq2q9rCrErErBq+q2quqiqTqDpwpbpDoooLnrnJmkl+lUkpj8jNiehsg7gJfXeod4dMcgb7bXa5agaLZ9Z1ZzZ3aBaRambBbfcDcpdSd+erfagJg4hniXjEjxkblGlumUm5nan7oZo1pPpmp8qPqgqvq7rGrNrUrYrYrYrUrOrGq8qvqeqMp4pgpHoqoKnpnFmel2lKkdjvi/iOhcgpf4fGeWdnc7cSbtbMawaYaGZ7Z1Z1Z8aHaaawbNbtcSc4dieOe8fqgZhJh3imjTj/kqlTl6mhnEnloFoio+pYptqDqVqlq0q/rIrQrVrXrXrVrQrJrAqzqlqTqApppRo1oXn2nTmumGlckxkCjVikhzhCgPfgeveBdVcrcEbibDaraVaHZ9Z7Z9aFaTama/bbb8cgdGdwecfIf1gjhRh/isjYkDkslUl6mfnBnhoAoco3pOpkp4qJqYqlqvq3q9rBrBrBq8q2qtqiqUqEpxpbpDoqoMnsnLmnmBlZkukDjWinh5hJgZfre8ePdkc8cVbzbVa7amaVaKaFaFaLaVala6bTbwcRc0daeDetfZgEgvhciIiyjdkFkslTl2mZm6nXn1oOooo9pRpipyp/qKqSqYqcqdqdqYqTqKp/pxpipQo6ojoKnunPmumMlnlBkZjvjDiYhrg/gRfle5ePdndAccb8bgbGazaiaYaRaRaWaeata/bWbwcPcvdTd4egfJfygbhFhviYjBjnkOkylVl3mXm0nQnpoBoXoqo7pKpWphpppupxpypxptpmpepSpEo1ojoNn2ndnBmkmEljk+kaj0jLijh5hPglf7fSepeCddc6cab8bjbMa6atakafafakaua7bMbjb7cZc3dZd8eifHfvgXg9hliMizjYj7kfk/lgl9mamznMnin2oJoXomowo6pApEpHpGpDo+o3otohoToCnvnanCmpmNlwlRkwkOjpjFifh4hRgpgCfbe2eQdtdLctcQb3bgbObAa1avatava1bBbPbhb3cQcrdLdqeMewfUf5gfhDhpiOiyjUj3kWk2lTlwmJmgm3nLndntn7oFoQoWobododoboXoQoHn8nunfnNm5mjmLlxlVk4kaj5jXi0iRhthJgjf+fae3eUdzdTc2cccDbvbcbPbEa9a7a8bBbLbXbob7cScrdHdleFemfHfrgOgyhUh4iai7jcj7kZk1lQlqmAmWmpm7nKnXninrnyn2n5n4n3nynrninYnLm7mqmXmClrlSk4kcj+jgjAieh+hbg5gWf0fRexeQdydVc5cgcKb3bnbabQbKbIbJbPbXbjbycFcbcydMdpeGemfGfngJgqhMhtiOitjNjqkHkik7lTlpl+mQmgmum7nFnNnTnXnYnYnVnRnKnAm1mpmZmJl1lhlKkykZj+jhjEimiGhnhGglgFflfFeleIdsdRc4chcNb8btbibabVbUbWbcblbwcBcScmc/dXdzePesfMfsgLgshLhriLiojGjhj9kXkulFlZlsl9mNmZmkmtm0m5m8m9m7m3mymrmhmWmIl5lnlVlBkqkSj5jgjEiniKhshNgvgQfxfTe1eYd9djdKczcfcOb+bxbpbibfbfbjbpb0cAcPcic3dNdmeBece5fXf2gUgzhRhwiMiqjFjgj5kRknk8lPlhlvl9mJmSmamfmjmkmkmhmdmXmNmEl4lplalIk1khkLjzjajBimiKhuhRg0gWf5fcfAekeJdvdYdCctcccMb/b1bubqbobrbvb4cDcQcgc0dIdfd4eSetfJfngDghg/hch4iUivjJjjj5kQklk3lIlZlllyl7mDmKmNmPmQmNmKmEl9lzlolblMk8kqkXkCjrjVi8iiiIhthSg2gaf+fhfHeseSd5didMc5cncXcKcAb4bzbybyb2b9cGcTciczdGdcdzeMelfBfcf4gVgxhNhpiEifi4jQjoj9kSkkk2lFlSlelplwl3l6l+l+l8l5l0ltlklalNlAkvkgkMj5jkjNi2ieiFhrhQg1gbgAflfLexeXeBdpdVdBcvcgcUcIcBb8b5b5b9cCcLcXckc1dGdbdxeIeie7fVfxgMgohDheh4iSisjDjZjvkDkVkmk2lClPlYlhlnlrlulultlqlmlflXlMlBk0klkUkDjwjbjHiviZh/hohOg0gagAfmfNe0ebeFdudbdHc2cncbcQcIcCcAcAcCcJcQcacoc3dIdcdxeIefe4fSfsgHghg8hXhwiJiii5jOjkj4kJkakok3lBlLlUlZlelglilgldlZlSlLlAk2kpkakLj5jnjUi+ipiTh7hjhKgxgYf/fmfOe1edeIdydedLc7ctcgcWcOcIcGcGcIcNcVcfcrc6dLdedyeIege3fQfqgEgeg4hRhqiDibiyjHjbjukBkQkfkrk3lBlIlOlTlVlWlUlSlOlHlAk2krkekRkBjxjejMi3ijiMh1hehGgugVf9fkfNe1eeeJd0dgdPc/cwckcacTcOcLcKcNcScacjcvc+dPdgd1eJehe4fQfqgCgcg2hOhnh/iWisjCjVjoj5kJkXkjkvk3k/lFlJlMlMlLlHlEk9k2ktkhkVkIj4jpjWjEiwibiGhwhYhCgpgSf6fifLe0eeeJd0didQdBczcocdcXcRcPcPcScWcecoczdCdSdkd3eNeje6fRfqgDgcg1hOhlh8iUipi9jRjjj0kDkRkdkokwk4k9lBlDlDlDk/k7k1kskkkZkNj/jwjgjPi8ipiVh/hqhTg9glgNf3fffIezeceId0didSdCc0cqcgcacVcScTcVcbcicsc3dGdWdod7eQele9fUftgEgdg1hOhlh8iSini8jOjgjwj/kMkYkikrkxk3k6k8k9k7k3kzktklkckRkFj3jpjZjHi1ijiOh5hkhNg3gggKfyfcfFeweaeHdzdhdRdDc2crcicccXcWcWcZcecmcwc8dKdadsd/eUeqfAfXfvgHggg3hPhlh9iSini6jNjejuj8kJkUkekmktkxk1k2k2k1kxkskmkekVkKj+jwjhjSjBiuiciHhzhehIgygbgEfufYfCeteYeEdydgdRdCc2cscjcecacXcZcdcicpc0dAdPdfdweEeXeufEfbfzgLgig6hRhoh+iTini6jNjdjtj6kHkRkbkjkpktkwkykxkvkrkmkgkYkPkDj3jqjbjLi6ioiViChthYhCgsgWgAfqfUe9eqeVeCdvdfdPdCc2csckcecccacccfclctc4dEdTdjd1eIedeyfJfff3gPgmg9hUhriAiVipi7jNjejsj5kGkQkZkgkmkqksktktkrkmkikakSkJj+jxjkjVjFi0iiiPh7hnhTg8gogQf7flfQe6eleSd+dudcdOdBc1csckcgcccccdcicpcxc7dIdYdnd6eNeie3fOfkf8gTgqhBhYhuiDiYiri9jPjejsj6kFkPkYkfkjkokpkrkpkmkjkdkWkNkEj4jsjfjPjAiuiciKh1hihNg3ghgMf2fhfKe2eieOd7dqdadMc/c1crckcgcdcecgckcrc0c/dNdbdsd/eSene8fTfpgBgYgvhGhchyiHibiui/jRjgjuj6kGkPkXkdkjkmknkokmkkkfkZkSkKj/j0jnjZjLi6ipiXiEhwhdhHgygcgHfxfbfHexeeeKd4dndXdKc9czcqckcgcececicmcuc3dDdQdgdxeDeXesfCfYfvgGgdg1hKhhh3iLieiyjCjUjijvj8kHkQkXkdkiklkmkmkkkhkdkWkPkGj7jwjjjVjGi2ikiSh/hrhXhCgtgYgBftfWfCeteZeGd0dkdUdHc7cxcpcjcgcecfcjcocwc7dGdUdkd1eJecexfIfdf1gMgig6hQhmh7iQiji1jGjXjljyj+kIkRkYkekikkklklkjkgkakUkMkDj5jsjgjRjBiyigiNh7hmhTg9gogTf8fnfSe9epeUeCdxdgdRdEc4cvcncicgcecfckcqcyc9dJdYdod6eNeie2fNfkf6gSgog/hWhriBiUioi6jKjajpj1kAkLkSkakfkiklkmkkkikfkZkSkKkBj2jpjdjOi+iuiciJh3hihOg4gkgNf4fjfNe4ekeQd+dsdcdNdBc2csclchcececgckcrc1c/dMdcdsd+eSeme8fTfpgAgYguhFhbhyiGiZiti+jPjfjsj5kDkNkVkckhkkklkmklkikfkYkRkJj/j0jojajLi7iriZiGhyhehKg0gfgJfzfefJezefeMd5dodYdKc9cycqcjcfcdcdcfclcsc2dBdPdfdweCeWesfBfYfvgHgdg0hMhhh3iMifiyjEjUjjjwj9kHkRkYkekjkmknkokmkikfkYkRkJj+jyjnjYjJi5ioiWiDhvhbhGgwgbgFfvfZfDeveaeHd1djdUdGc5cvcncgcdcbcccfckctc3dDdSdhdzeHebewfHfdf1gMgjg7hShnh9iSimi3jJjajoj1kBkMkUkckhkmkpkqkpkokkkgkZkRkJj+jyjmjXjIi3imiUiAhthXhDgtgXgAfrfVe/eqeVeDdwdedQdBc1crcjcecacZcaceclctc4dEdUdkd2eLeee1fMfjf7gSgphBhYhuiEiYiri+jQjfjtj7kGkQkakgklkqksktkskqknkhkbkTkJj/jzjljXjIi2iliSh/hqhWg/gqgTf9fnfRe6emeRd+drdadKc9cxcncfcacXcXcYcdcjctc4dGdWdmd5eOeje6fQfogBgYgwhHheh1iKifiyjEjWjlj0kAkMkWkeklkrkukwkxkwkukpklkdkVkMkAj1jmjYjHi3iliRh9hphUg9gogQf6fjfNe3eheMd5dndVdGc4cscicccWcUcTcWcbcictc3dHdWdpd8eReme+fVfugGgdg2hOhlh7iRimi5jLjcjtj6kHkSkckkkrkwkzk2k2k1kxkukokikYkPkDj2jpjajJi3imiRh+hohTg8glgPf3fhfJezedeId1dhdRdAczcocecXcScPcQcUcYcgcrc4dGdYdpd+eUeqfCfZfzgLgjg9hUhriCiYitjAjSjkjzkCkOkZkjkrkxk3k6k7k8k7k3k0ktkmkdkTkHj6jsjdjMi6iniTh/hphSg8glgNf1fefHeweaeEdwdddMc7cucjcZcRcOcLcMcQcVcecpc2dGdXdreAeVetfFfef3gQgphChahziJifi0jHjbjrj7kJkWkhkrkyk5k+lClDlDlBk/k6kzktkjkYkNkAjxjhjQi+iqiWiBhrhUg9glgNf0fdfFeteXeAdtdYdHc3cpcdcTcNcIcHcHcLcScacnc0dEdXdqeBeXevfIfhf7gUgvhIhgh5iQimi8jPjij0kDkRkfkqkzk7lClHlKlLlMlKlHlCk8k0krkgkUkHj3jojWjDiwiaiFhvhXg/gngOf1fcfEeseUd+dpdVdCcyckcXcOcHcDcAcCcGcNcXcicxdCdVdqeAeXewfKfkf+gZgzhNhnh/iXitjDjYjqj9kMkakokzk+lFlLlRlUlWlWlUlQlNlGk+k0kqkdkQkAjwjejLi3iiiLh0hchDgrgRf3fefEereUd8dmdRc/ctcfcScHcBb8b6b8cAcHcRcdctc/dRdnd/eXewfLflgBgcg3hShsiFidi1jLjgjzkFkWklkyk9lIlRlXlclglhlilgldlZlRlLlAk2kpkbkMj7jpjVjBiriUh8hkhKgwgWf7fhfHeteUd7dldPc7cpcZcNcBb6b1bzb1b4cAcKcXcnc5dNdjd7eVevfKfmgCgeg6hWhxiKiki8jSjoj9kPkfkwk9lJlUldlklplulvlwlulslnlhlZlPlEk4kqkakKj2jjjOi3ihiHhuhUg5gfgCfnfLexeWd9dkdOc5cmcVcHb7bybubrbsbvb3cCcPcfcxdGddd2eQesfHflgBgfg8hZh0iPipjDjajwkGkYkrk7lJlWlilqlzl5l8mAmAl/l9l4lzlqlilXlKk8kskbkJj1jejIiwiXh9hihGgqgNfxfUe3ebeBdndOc4ckcRcCb1bsblbibhbmbtb2cEcUcoc9dUdueJelfDfhf/gdg7hah2iTiujIjgj5kOkjk2lGlXlklwl6mDmJmPmSmTmTmRmNmImBl3ltlhlSlEkxkfkLj1jejFisiQh1hYg7gdf+fgfDeleIdsdTc5ckcQb+bvblbcbYbXbabfbqb3cHcacwdIdid/ebe7fZf5gZg5hXh3iUiwjNjnj/kXkslBlTlklzmAmLmWmcmjmnmpmqmpmmmgmbmSmIl8lulflOk8knkRj6jgjHiriPhwhSgzgTfzfTe0eVd4dbc/cncRb8btbebUbObLbMbSbZbmb2cJcgc3dSdweNeufOfvgQgyhShziTixjOjqkFkek2lLlflymCmRmempmym5m/nCnFnEnCm/m5mxmomdmRmBlxlflKk1kdkFjpjOiwiShxhSgwgOftfLepeKdpdMcxcXb/bsbbbObEbAa9bBbIbTbhb0cJchc9dbd5ebe8ffgCgmhIhqiMitjNjqkHkjk8lVlql/mRmimxm+nInSnZneninknjngndnWnPnEm5mrmbmKl3lhlKkxkXj6jci+ich7hZg1gRftfJemeDdidCclcKbybdbLa/a1axawa0a8bJbabucFchc+deeAejfHfsgQg3hbh+ijjEjlkFkik/lalymKmemynDnSnfnsn0n9oBoGoHoHoFoAn7nynoncnOm+mrmXmClplPkzkVj3jViyiPhqhEgef4fRereGdidAcgcDbobTbAaxanahaialaua8bNbkb9cZc5dbd/ekfLfygZhBhniOiyjXj5kbk6lYl0mPmmm9nSnkn1oDoPoaoiopotowowovorolodoUoIn5nqnXnDmsmUl5lck9kcj7jWixiJhig5gQfme+eVdudJcmcFbobOa5aoacaUaSaVadara8bSbscKcrdPd0ebfFftgYhAhqiTi6jhkFkplLlrmJmmm/nYnuoDoVolo0o/pJpSpXpbpdpcpapWpPpGo7ouofoMn5njnKmvmTlzlTkukKjji6iRhlg6gNfie2eLdic6cWb0bWa8anaXaLaFaFaKaWala6bTbxcRc3dceGevfbgGgzheiKizjdkFkrlPlzmSmznPnroDoZovpCpSpgptp2p/qGqIqLqKqIqDp7pzpnpZpJo2oioKnwnUm2mVlylNklj8jSikh4hIgbfre9eQdjc6cTbwbQa0adaMaBZ7Z6aAaMada0bObtcQc2dfeKe2fjgRg/hsiajFjwkZlClnmMmunOnsoJojo6pQpkp2qFqSqdqmqtqxq0qzqxqtqnqdqSqEp0phpNo0oan9nfm8mZlylKkfjzjFiVhlg0gDfTejd1dIceb5bWa4afaLZ9Z2Z0Z4aCaSaobDbhcDcqdUd/esfagJg5hniWjDjvkalElsmRm2nWn3oVowpKphp1qJqaqoq1q+rGrMrQrQrPrMrGq+qzqmqWqEpwpYo+oioCnim9mXlulDkXjoi4iHhVgjfyfAeQdhc2cNbobIaraUaDZ4ZzZ1Z7aHabazbQbwcVc9doeUfCfxgfhQh/itjakGkwlamCmmnKnroLoopDpbpyqHqZqpq3rCrLrSrXrarZrXrSrLrBq2qmqVqCprpSo3oYn3nVmvmHldkwkEjUijhyhAgOfcetd9dRcmcAbda+alaRaCZ5Z3Z7aDaRana/bdb/cjdMd2eifQf+gshbiJi3jjkNk4lgmGmrnMnuoMoopDpZpwqEqUqkqwq7rCrJrMrOrLrIrBq5qvqgqPp9popPo2oXn5nWmzmMljk4kMjfiwh/hQgefve/eSdlc7cUbxbTa3ahaRaFaAaBaFaRaha3bRbvcRc1dceHexfdgKg3hjiRi8jmkQk4lemDmmnGnloDodo2pLpgpyqCqPqaqjqpqtqvquqrqlqdqSqGp2pjpPo3ofoCnjnDmgl7lVkrkAjVioh7hNgefwfDeYdudFcgb+bgbGawafaTaMaLaQaXama4bPbrcJcrdPd1effHfygchIhyidjFjukUk6lfmAmhm/nbn3oOolo4pLpapnpyp7qBqFqGqGqCp9p0pqpcpOo7onoQn3ncm+mel8lZkzkNjki6iPhlg5gOfje4eQdpdEchcCbmbOa6arafaaaYadakaybCbZbxcOcudPdzeafAfpgQg6hiiKiyjXj9khlDlkmDmhm7nVnsoCoUolo0pApKpSpXpapapapVpOpGo6otodoKn2nfnGmrmOlvlNkrkHjii7iThrhDgafxfKejd9dac5cab/blbRbAa0arananasa2bDbVbpcCcdc8dcd+eifIftgUg5hgiGirjQjykUk0lTlxmLmlm8nSnmn2oFoSodomorovowowosonofoVoIn6npnWnAmqmPl1lYk5kZj2jUiwiLhlhAgZfzfPeqeHdldFcpcOb2bibRbEa8a1a1a4bAbKbabrcBcac2dTdyeUe2fZf+gihGhriNixjSjzkSkwlNlnmAmXmsm+nQnfnsn1n/oEoIoKoIoGoBn6nwnjnWnGm0mfmKlxlXk8kfkAjhi/idh7hXg0gQftfKeoeIdodKcwcWcBbtbdbSbIbEbCbFbLbWbjb0cIcfc4dUdyeQexfTf0gXg5hch9iei/jej8kZkzlOlll7mPmimxm/nMnWndnjnmnnnmnjnenWnNnBmzmkmRl+lplRk4kekCjljGiniHhmhEgjgCfgfAegeCdldKcxcZcGb0bnbbbTbQbPbSbZbibwcAcTcqdBdcd3eWe1fUf1gVg2hXh3iWi1jTjvkKklk8lSlol6mLmamomxm7nCnHnInKnHnEm+m2msmgmSmClxldlIkxkZj/jkjHiriMhuhPgugPfwfReyeVd5dddGcucacHb4btbjbdbabbbfbmbxb+cPchc3dPdpeDege+fdf7gbg6hZh4iWizjOjqkDkckylHlalrl7mImUmemlmqmvmvmvmsmnmhmYmOmBlyljlRk9kokRj5jhjGiqiOhxhTg2gXf6fce+ejeHdtdVc+cpcYcIb6bxbpbmbkbnbsb0cAcOcfcydHdfd5eTevfMfpgHgmhDhhh+iai2jQjqkBkYkslAlRlhlvl7mFmMmTmXmZmZmXmUmNmGl8lxlklUlEkykekJjyjbjBioiNhxhVg5gcgAfjfHeseRd4dhdKc2ckcUcHb8b0bwbtbubzb5cDcQcfcwdFdadyeLemfBfdf5gXgzhQhtiIiii9jVjtkDkYkqk8lMlalmlwl4l+mDmGmGmEmCl8l2lslilVlIk4kmkUkAjqjUi8ikiKhvhUg6gegDfnfMeyeYeAdpdUc/cucecRcFb+b4b2b1b5b/cHcUchcxdEdYdveGege6fVfwgNgohEhfh6iViujGjdjykIkakrk6lJlUlflnltlyl0l2l1lyltlmlelUlJk7kskckKj2jjjMi2ieiFhthSg4gegDfqfPe1edeFdwdadGc1cmcYcOcGb/b9b8b/cFcMcXckczdFdZdueEede2fQfrgFghg7hXhwiKiji6jSjmj6kMkektk6lGlQlZlfljlnlnlmlklglZlRlIk8kwkhkSkAjujZjGiviYiAhohPg2gdgCfpfRe3egeJdydfdMc6cscfcTcMcGcDcDcEcKcRcccnc3dGdbdueFece0fNfogCgcg2hQhqiDiaiyjIjdjwkCkTkikuk7lElNlTlXlalblblYlTlNlGk8kyklkXkIj3jljSi9ioiSh7hjhLgzgZgBfpfPe4eheKd2dhdQc+cwckcZcRcLcIcIcKcPcWcfcsc6dKdddweGede0fNfmgAgZg0hMhmh9iVisjCjWjoj6kLkZklkyk6lDlJlNlPlRlQlNlJlDk7kykokbkOj/jujcjKi2iiiLh1hehHgugXf+fmfOe3eheLd2dkdRdCczcncdcVcQcNcMcPcTcbckcwc9dOdgdzeJeee2fOfnf/gZgyhLhjh7iRioi9jRjjj0kEkSkfkpkzk7lAlElHlIlGlElAk6kykpkfkSkFj2jmjVjCiviaiFhvhZhBgqgTf7fjfNe1egeKd3dkdTdDc1cqcgcZcTcRcRcScYcfcoc0dCdSdkd2eMehe5fQfogBgZgyhLhih5iQimi6jNjgjvkAkNkZkjktk0k5k9k/lAk/k8k3kykqkgkXkKj9jujejOi7iniUh/hphTg8gmgOf3fgfKezeeeKd1dkdTdFc2cscicbcXcUcUcXcbcjctc4dHdWdnd7ePele8fTfrgDgbgzhMhih6iPili4jMjdjtj8kJkUkfkokuk0k3k5k5k4k1kwkrkikakOkDj1jnjYjGi0ihiNh5hjhNg3ghgJfzfdfGeweceId1djdSdEc4ctcjcecYcXcYcacfcncxc9dKdbdsd/eTepfAfWfugGgfg1hOhkh6iQili4jLjbjsj6kGkSkbkkkqkvkyk0kzkzkvkqkkkbkTkIj8jvjgjQjAitibiHhyhehIgxgcgFfufZfCeueZeFdzdhdSdEc4csclcfcbcZcacdcjcrc1dBdOdgdweEeYetfEfbfygKghg5hQhnh8iSimi5jKjcjrj4kFkQkZkgknkrkukwkvktkqkkkfkWkNkCj1jpjajKi5iniViBhshYhCgsgXgAfqfUe/eqeWeCdxdgdQdDc3ctclcgcccbcdcgcmcuc4dFdUdjd1eJedeyfJfff2gOgmg8hUhpiAiUini7jMjbjrj5kEkOkYkeklkokrkskrkpkmkgkZkRkHj9jwjjjUjEi0ihiPh7hnhSg9gngSf7flfQe6eneSd/dudedOdCc2cscmcgcdcdcecjcpcxc8dJdYdod6eNeie3fNflf7gTgqhAhYhtiDiXiqi9jNjejsj4kEkOkXkekikmkpkpkokmkikckVkMkDj4jrjejPi/iuiciJh2hihMg4ghgNf2fhfLe2eiePd8drdadMdAc1csclcgcececgclcrc0dAdNdcdsd+eTene8fTfpgBgYguhGhchxiHiaiui/jQjfjuj6kFkOkWkdkiklknknkmkjkfkZkRkJj/jzjnjZjKi6iqiXiEhwhchIgygdgHfxfcfGeyeeeLd4dndYdKc9czcrckcgcecfchcnctc4dDdQdgdxeDeXesfCfYfvgGgdg0hLhgh3iLieixjDjTjijvj7kHkPkXkdkikkkmkmkkkhkckWkPkGj8jvjjjVjGi2iliSh/hshXhDgtgXgCftfXfBeueZeGd1dkdUdHc7cwcpcjcgcecfcicocwc6dGdUdkd1eIecexfHfef0gMgjg5hQhmh7iQiji1jHjWjljyj+kIkRkYkekiklklklkkkfkbkUkMkEj4jtjgjRjDixihiOh7hnhSg+gogTf9fofSe9eoeVeCdwdgdRdDc4cvcmcicececfcjcpcyc8dJdXdod5eNehe2fNfjf7gRgohAhVhsiBiUioi6jLjajpj1kBkLkTkakfkjklkmkmkikfkakTkLkBj3jqjdjPi/iuidiKh3hjhOg5gkgOf4fjfNe4ejeRd9dsdcdMdAc1csckcgcdcdcfcjcqczc/dLdbdrd+eReme8fSfpgAgXgvhFhchxiGibiti/jPjfjtj5kFkOkVkdkhklknknklkkkfkZkSkKkAj1jpjbjMi9iriaiHhzhfhKg1gggJf0fefIe0efeLd4dodXdJc8cycocicecbccceckcrc0dAdOdedueCeWerfBfXfvgGgeg0hMhih3iNifizjFjVjjjyj9kJkSkZkgkkknkpkokokkkgkakSkKkAj0jnjajLi6ipiXiFhwhchHgxgbgFfwfZfEeuebeGd0djdTdFc4ctcmcfcbcZcbcdcjcrc2dCdQdgdyeFebevfHfdf0gMgkg7hShoh+iSimi5jLjajpj3kDkNkWkdkjkokqkskrkqkmkhkckTkKkAj1jnjZjKi5ioiWiChthZhEgugYgCfrfVe/ereVeCdvdedPdAc0cpcicccYcXcZcccjcrc2dDdSdjd1eJeee0fMfif6gTgphChYhviEiaisi/jRjgjwj8kIkSkbkjknkskukwkuktkpkkkdkWkMkBj1jojajKi5iniUiBhshXhCgrgVf+fofRe7emeRd9drdZdKc7cwcmcdcYcVcVcWcbcicqc2dEdUdld4eMeie5fQfogAgYgwhIhfh1iLigi0jGjXjnj1kDkOkZkgkoktkxkzk0kzkwktkokgkYkPkEj3jqjbjKi6ioiUiAhrhWhAgpgTf7flfOe3eieNd5dmdUdFc3crchcZcVcScRcTcZcgcqc2dEdUdnd6eQele9fUftgGgeg2hOhmh8iSini6jNjfjuj9kJkVkfknkukzk3k5k5k5k1kyksklkckTkHj7jsjejNi7ipiViBhshWg/gogRf5fifLe0efeId1didQdAcycmcccVcQcNcOcRcWcdcoc1dEdWdnd8eSeofBfZfxgKgkg8hVhsiDiZiujCjVjlj2kEkRkdkmkuk1k7k+k/lAk/k8k4kykrkhkYkMkAjxjhjQi/isiYiChthXg/gpgQf4fhfJeyebeFdxdddLc8ctchcXcQcLcJcJcNcScbcmczdDdVdod9eTerfE',v=[2543/1000],c=2543,i,x;for(i=0;i<s.length;i+=2){x=(A.indexOf(s.charAt(i))<<6)+A.indexOf(s.charAt(i+1))-2048;c+=x;v.push(((c%360000)+360000)%360000/1000);}r.CDS_CHIRON={start:2422319.5,step:5,lon:v};})(typeof window!=='undefined'?window:globalThis);

/* Astrological glyph outlines from Noto Sans Symbols (SIL Open Font License), normalized to a 100-unit box */
window.CDS_GLYPHS={"Aries":"M-4.2 43.8V-15.2Q-4.2 -25.3 -9.1 -30.9Q-14 -36.4 -22.8 -36.4Q-28.1 -36.4 -32.4 -33.8Q-36.6 -31.2 -39 -26.8Q-41.4 -22.4 -41.4 -16.7Q-41.4 -11.5 -39.1 -7.4Q-36.8 -3.3 -32.9 -0.9Q-29 1.5 -24.2 1.5V8.8Q-31.6 8.8 -37.5 5.5Q-43.4 2.2 -46.7 -3.5Q-50 -9.2 -50 -16.7Q-50 -24.8 -46.6 -30.9Q-43.2 -36.9 -37.1 -40.3Q-30.9 -43.8 -22.8 -43.8Q-13.9 -43.8 -8.3 -39.8Q-2.8 -35.8 0 -27.1Q2.8 -35.8 8.4 -39.8Q14 -43.8 22.8 -43.8Q30.9 -43.8 37 -40.3Q43.1 -36.9 46.6 -30.9Q50 -24.8 50 -16.7Q50 -9.2 46.7 -3.5Q43.4 2.2 37.6 5.5Q31.8 8.8 24.2 8.8V1.5Q29.1 1.5 33 -0.9Q37 -3.3 39.2 -7.4Q41.4 -11.5 41.4 -16.7Q41.4 -22.4 39 -26.9Q36.6 -31.3 32.4 -33.9Q28.3 -36.4 22.8 -36.4Q14 -36.4 9.1 -30.8Q4.2 -25.2 4.2 -15.2V43.8Z","Taurus":"M0 49.3Q-6.9 49.3 -13 46.6Q-19.1 43.9 -23.8 39.3Q-28.4 34.7 -31.1 28.6Q-33.7 22.5 -33.7 15.6Q-33.7 6.4 -29.2 -1.3Q-24.7 -9 -16.9 -13.6Q-25.8 -19.5 -30.1 -27.9Q-33.1 -33.8 -35.5 -36.7Q-38 -39.5 -41.3 -40.4Q-44.5 -41.3 -50 -41.3V-49.3Q-44.1 -49.3 -39 -48.6Q-33.9 -48 -30.2 -44.2Q-28.4 -42.4 -26.8 -40.2Q-25.3 -38.1 -24 -35.5Q-21.4 -30.5 -18.1 -26.2Q-14.8 -21.8 -10.3 -20Q-5.5 -18.2 0 -18.2Q5.3 -18.2 10.2 -20.4Q15.1 -22.6 18.4 -26.8Q20.1 -29 21.5 -31.1Q22.9 -33.3 24.1 -35.6Q26.4 -40.3 30.3 -44.2Q34.2 -48.1 39.5 -48.6Q42.1 -48.9 44.7 -49.1Q47.4 -49.3 50 -49.3V-41.3Q44.7 -41.3 41.4 -40.4Q38.2 -39.5 35.7 -36.7Q33.2 -33.9 30.2 -28.1Q25.8 -19.6 16.8 -13.6Q24.7 -9 29.2 -1.3Q33.7 6.4 33.7 15.6Q33.7 22.6 31.1 28.7Q28.4 34.8 23.8 39.5Q19.1 44.1 13 46.7Q6.9 49.3 0 49.3ZM0 39.6Q6.6 39.6 12.1 36.4Q17.6 33.1 20.8 27.6Q24.1 22.1 24.1 15.6Q24.1 8.9 20.8 3.5Q17.6 -2 12.1 -5.3Q6.6 -8.5 0 -8.5Q-6.5 -8.5 -12 -5.3Q-17.6 -2 -20.8 3.5Q-24.1 8.9 -24.1 15.6Q-24.1 22.1 -20.8 27.6Q-17.6 33.1 -12 36.4Q-6.5 39.6 0 39.6Z","Gemini":"M-45 50V42.5Q-41 41 -36.9 39.8Q-32.9 38.6 -28.6 37.7V-37.7Q-33.7 -38.8 -37.8 -40Q-41.9 -41.2 -45 -42.5V-50Q-25.5 -42.1 0 -42.1Q25.5 -42.1 45 -50V-42.5Q38 -39.5 28.6 -37.6V37.7Q32.9 38.6 36.9 39.8Q40.9 41 45 42.5V50Q34.1 45.8 23.3 43.9Q12.5 42.1 0 42.1Q-12.2 42.1 -23 43.9Q-33.9 45.8 -45 50ZM-20.2 36.2Q-15.4 35.3 -10.3 35Q-5.3 34.6 0 34.6Q5.3 34.6 10.3 35Q15.4 35.3 20.2 36.2V-36Q10.3 -34.6 0 -34.6Q-10.2 -34.6 -20.2 -36Z","Cancer":"M-25.4 4.6Q-36.7 4.6 -43.3 -1.2Q-50 -7 -50 -16.6Q-50 -29.6 -38 -35.9Q-25.6 -42.4 1.2 -42.4Q9.3 -42.4 18.1 -41.1Q26.9 -39.8 35.3 -37.5Q43.6 -35.2 50 -32.2V-23.9Q39.4 -29 26.5 -31.7Q13.6 -34.4 1.2 -34.4Q-7.7 -34.4 -12.3 -33.3Q-7.4 -32.5 -4.1 -27.9Q-0.8 -23.4 -0.8 -16.6Q-0.8 -7 -7.4 -1.2Q-14.1 4.6 -25.4 4.6ZM-25.4 -3Q-18.4 -3 -14.1 -6.7Q-9.9 -10.3 -9.9 -16.6Q-9.9 -22.9 -14.1 -26.6Q-18.4 -30.3 -25.4 -30.3Q-32.6 -30.3 -36.7 -26.6Q-40.8 -22.9 -40.8 -16.6Q-40.8 -10.3 -36.6 -6.7Q-32.4 -3 -25.4 -3ZM-1.2 42.4Q-9.8 42.4 -19.1 41Q-28.4 39.5 -36.5 37.1Q-44.6 34.7 -50 32.2V23.9Q-39.4 28.8 -26.8 31.6Q-14.2 34.4 -1.2 34.4Q8.3 34.4 12.3 33.3Q7.6 32.7 4.2 28.1Q0.8 23.5 0.8 16.6Q0.8 7.1 7.5 1.2Q14.2 -4.6 25.4 -4.6Q36.7 -4.6 43.3 1.2Q50 7 50 16.6Q50 29.3 38.1 35.8Q26.1 42.4 -1.2 42.4ZM25.4 30.3Q32.6 30.3 36.7 26.6Q40.8 22.8 40.8 16.6Q40.8 10.5 36.8 6.7Q32.8 3 25.4 3Q18.1 3 14 6.7Q9.9 10.5 9.9 16.6Q9.9 22.8 14.1 26.6Q18.3 30.3 25.4 30.3Z","Leo":"M25.4 50Q18.3 50 14.2 45.5Q10.1 41 10.1 33.1Q10.1 28.1 11.8 22.1Q13.4 16 16.5 8.9Q22.8 -5.7 22.8 -19.1Q22.8 -26.4 20.4 -31.7Q17.9 -37 13.7 -39.9Q9.5 -42.7 4 -42.7Q-4 -42.7 -8.9 -37.4Q-13.7 -32.1 -13.7 -22.8Q-13.7 -18.2 -12.6 -14.1Q-7.5 -13.5 -3.7 -10.6Q0.2 -7.7 2.4 -3.5Q4.6 0.7 4.6 5.7Q4.6 11.1 1.9 15.7Q-0.8 20.2 -5.3 22.9Q-9.8 25.6 -15.3 25.6Q-20.8 25.6 -25.3 22.9Q-29.9 20.2 -32.6 15.7Q-35.3 11.1 -35.3 5.7Q-35.3 -1 -31.2 -6.4Q-27.2 -11.8 -20.7 -13.6Q-22 -17.7 -22 -22.6Q-22 -30.6 -18.6 -36.7Q-15.3 -42.8 -9.3 -46.4Q-3.4 -50 4.5 -50Q12.6 -50 18.5 -46.2Q24.5 -42.4 27.8 -35.6Q31 -28.7 31 -19.4Q31 -14.7 30.4 -9.9Q29.9 -5 28.2 0.8Q26.4 6.6 23.2 14.3Q18.4 25.9 18.4 33Q18.4 37.3 20.7 39.6Q22.9 42 26.5 42Q30.1 42 32.7 40.5L35.3 47.4Q30.8 50 25.4 50ZM-15.3 17.5Q-12.1 17.5 -9.4 15.9Q-6.7 14.3 -5.1 11.6Q-3.5 8.9 -3.5 5.7Q-3.5 2.5 -5.1 -0.3Q-6.7 -3 -9.4 -4.6Q-12.1 -6.2 -15.3 -6.2Q-18.4 -6.2 -21.2 -4.5Q-23.9 -2.9 -25.5 -0.2Q-27.2 2.5 -27.2 5.7Q-27.2 8.9 -25.6 11.5Q-24 14.2 -21.3 15.9Q-18.5 17.5 -15.3 17.5Z","Virgo":"M19.7 50Q15.3 46.5 13.4 37.4Q4.9 42 -3.3 43.3V36.3Q4.9 35 12.3 30.7Q11.9 27.2 11.9 23.4V-30.2Q11.9 -34.1 11.1 -38.1Q10.2 -42.1 8.7 -44.5Q7.2 -43.2 5 -40.3Q2.8 -37.4 0.7 -33.9Q-1.4 -30.5 -3 -27.4Q-4.6 -24.3 -4.8 -22.6V27.5H-12.4V-28.6Q-12.4 -32.6 -13.1 -36.6Q-13.9 -40.7 -15.6 -44.5Q-17.2 -43.2 -19.3 -40.3Q-21.5 -37.4 -23.6 -33.9Q-25.7 -30.5 -27.3 -27.4Q-28.9 -24.3 -29.1 -22.6V27.5H-36.7V-29.5Q-36.7 -37.2 -41.6 -50H-35.8Q-34.3 -47.6 -32.7 -43.9Q-31.2 -40.1 -29.8 -34.9Q-28.8 -36.8 -26.8 -39.6Q-24.8 -42.4 -22.5 -45.3Q-20.2 -48.2 -18.2 -50H-11.8Q-9.9 -47.2 -8.1 -42.8Q-6.3 -38.4 -5.6 -34.9Q-4.7 -36.9 -2.6 -39.6Q-0.5 -42.4 1.9 -45.2Q4.3 -48 6.3 -50H12.7Q16.4 -45 18 -40.1Q19.5 -35.2 19.5 -29.8V-20.8Q21 -23.6 23.6 -26.8Q26.2 -29.9 28.3 -31.7H34.6Q37.8 -28 39.7 -21.3Q41.6 -14.6 41.6 -6.5Q41.6 5.4 36.2 15.6Q30.7 25.8 20.3 33.2Q21.1 38.1 22.8 42.1Q24.5 46.2 27.8 50ZM19.5 25.4Q26.5 19.3 30.2 11.1Q34 2.9 34 -6.5Q34 -18.9 30.5 -26.1Q28.8 -24.4 26.5 -21.2Q24.2 -18 22.3 -14.7Q20.4 -11.3 19.5 -9.3Z","Libra":"M-50 13.8V5.4H-18.2Q-22.6 1.9 -25.3 -3.5Q-28 -9 -28 -14.2Q-28 -21.9 -24.3 -28.1Q-20.6 -34.2 -14.2 -37.9Q-7.8 -41.6 0 -41.6Q7.8 -41.6 14.1 -37.9Q20.5 -34.2 24.2 -28.1Q28 -21.9 28 -14.2Q28 -9.1 25.4 -3.7Q22.8 1.7 18.2 5.4H50V13.8H5.6V4.5Q11.7 2.5 15.7 -2.8Q19.6 -8 19.6 -14.2Q19.6 -19.9 17 -24.3Q14.5 -28.7 10 -31.3Q5.6 -33.9 0 -33.9Q-5.6 -33.9 -10 -31.2Q-14.5 -28.6 -17 -24.2Q-19.6 -19.7 -19.6 -14.2Q-19.6 -7.9 -15.6 -2.6Q-11.6 2.6 -5.6 4.5V13.8ZM-50 41.6V33.3H49.9V41.6Z","Scorpio":"M32 50 34.1 41.9H29.2Q21.1 41.9 16.4 38.6Q11.6 35.3 9.5 28.2Q7.4 21 7.4 9.4V-29.9Q7.4 -33.9 6.5 -37.9Q5.6 -41.9 4.1 -44.4Q2.5 -43 0.3 -40.1Q-1.9 -37.2 -4 -33.6Q-6.2 -30.1 -7.8 -27Q-9.4 -23.8 -9.6 -22.2V28.9H-17.3V-28.2Q-17.3 -32.3 -18.1 -36.4Q-18.9 -40.5 -20.7 -44.4Q-22.2 -43 -24.4 -40.1Q-26.6 -37.2 -28.8 -33.6Q-30.9 -30.1 -32.5 -27Q-34.1 -23.8 -34.4 -22.2V28.9H-42.1V-29.1Q-42.1 -37 -47.1 -50H-41.2Q-39.7 -47.6 -38.1 -43.8Q-36.5 -39.9 -35 -34.6Q-34 -36.5 -32 -39.4Q-29.9 -42.3 -27.6 -45.2Q-25.3 -48.1 -23.3 -50H-16.8Q-14.8 -47.1 -13 -42.7Q-11.2 -38.2 -10.5 -34.6Q-9.5 -36.6 -7.4 -39.4Q-5.3 -42.3 -2.8 -45.1Q-0.3 -48 1.7 -50H8.2Q11.9 -44.9 13.5 -39.9Q15.1 -35 15.1 -29.4V9.4Q15.1 19.3 16.5 24.9Q17.9 30.4 21 32.8Q24.1 35.1 29.2 35.1H34.1L32 27L47.1 38.5Z","Sagittarius":"M-43.5 49.9 -50 43.2 -18.3 11.3 -37.5 -7.6 -31 -14.1 -11.9 4.9 33.3 -40.6H-14V-49.9H47.1L50 -47.1V13.8H40.6V-34.4L-5.2 11.5L14.1 30.8L7.6 37.4L-11.8 18Z","Capricorn":"M-17.4 50V43.9Q-10 43.9 -4.2 39.4Q1.5 34.9 6.6 24.5Q3.8 20.1 2.8 14.5Q1.8 8.8 1.8 2.2V-28.3Q1.8 -33.4 0.6 -36.9Q-0.7 -40.3 -3.5 -44.4Q-5.1 -42.9 -7.2 -39.4Q-9.3 -35.9 -11.7 -31.1Q-14.1 -26.4 -16.4 -21Q-18.7 -15.7 -20.6 -10.5Q-22.5 -5.3 -23.6 -1Q-24.7 3.2 -24.7 5.8V28.8H-32.5V-11.3Q-32.5 -18.2 -32.8 -23.2Q-33.1 -28.1 -34 -31.2Q-35.7 -37.4 -39 -40.2Q-42.4 -42.9 -47.7 -42.9V-50Q-36.1 -50 -30.6 -42Q-25.2 -34 -25.1 -16.2V-15.9Q-24.1 -19.9 -21.9 -25.2Q-19.6 -30.5 -16.9 -35.7Q-14.1 -40.8 -11.6 -44.8Q-9.2 -48.7 -7.7 -50H2Q4 -47.7 5.7 -44.2Q7.4 -40.7 8.4 -37.1Q9.5 -33.4 9.5 -30.2V1.9Q9.5 12.8 11.6 17.1Q16.2 10.6 20.8 8.1Q25.3 5.6 30.7 5.6Q38.4 5.6 43 9.5Q47.7 13.5 47.7 20.3Q47.7 27.9 42.5 32.2Q37.4 36.5 28.5 36.5Q23.7 36.5 19.9 35.2Q16.1 33.8 11.7 30.1Q7.4 39.5 -0.3 44.8Q-8.1 50 -17.4 50ZM28.5 29.7Q34.1 29.7 37.4 27.1Q40.6 24.5 40.6 20.3Q40.6 17 37.9 14.6Q35.2 12.3 30.8 12.3Q26.6 12.3 22.7 14.8Q18.9 17.4 15.1 23.4Q17.1 25.9 21 27.8Q24.9 29.7 28.5 29.7Z","Aquarius":"M-46.4 -5.6 -50 -12.3 -20.8 -29.7 -13.6 -16.2 8.8 -30.2 16.4 -16.2 38.8 -30.2 50 -9.4 43.6 -5.6 36.1 -19.4 13.6 -5.6 6 -19.4 -16.4 -5.6 -24 -19.4ZM-46.4 30.2 -50 23.5 -20.8 6.1 -13.6 19.5 8.8 5.6 16.4 19.5 38.8 5.6 50 26.3 43.6 30.2 36.1 16.3 13.6 30.2 6 16.3 -16.4 30.2 -24 16.3Z","Pisces":"M-42.1 50Q-24.9 26.9 -23.6 4.7H-47.4V-3.9H-23.6Q-25.2 -26.7 -42.2 -50H-32.4Q-15.1 -29.1 -13.8 -3.9H13.8Q15.4 -29.7 32.4 -50H42.2Q24.9 -27 23.6 -3.9H47.4V4.7H23.6Q25.1 27 42.1 50H32.4Q15 29.7 13.8 4.7H-13.8Q-15.1 29.9 -32.4 50Z","Moon":"M-18.2 50Q-26.4 50 -33.1 48.1V43.4Q-20.4 43.4 -11 37.9Q-1.5 32.4 3.7 22.6Q8.9 12.8 8.9 0Q8.9 -12.8 3.7 -22.6Q-1.5 -32.4 -10.9 -37.9Q-20.2 -43.4 -33.1 -43.4V-48.1Q-26.4 -50 -18.2 -50Q-3.1 -50 8.4 -43.7Q20 -37.5 26.5 -26.2Q33.1 -15 33.1 0Q33.1 14.7 26.5 26Q20 37.3 8.4 43.7Q-3.1 50 -18.2 50ZM-18.1 45.7Q-8.6 45.7 -0.4 42.1Q7.9 38.5 13.9 32.2Q20 25.9 23.3 17.7Q26.7 9.4 26.7 0Q26.7 -9.5 23.3 -17.8Q20 -26.1 13.9 -32.3Q7.9 -38.6 -0.4 -42.1Q-8.6 -45.7 -18.1 -45.7Q-8 -43.5 -0.5 -37Q7 -30.4 11.1 -20.9Q15.2 -11.4 15.2 0Q15.2 11.2 11.1 20.8Q7 30.4 -0.5 36.9Q-8 43.4 -18.1 45.7Z","Mercury":"M-3.3 50V36.7H-17.8V30.9H-3.3V20.1Q-9.6 19.2 -14.6 15.7Q-19.7 12.1 -22.6 6.6Q-25.6 1.2 -25.6 -5.4Q-25.6 -12.2 -21.9 -18.2Q-18.2 -24.2 -12.2 -27.5Q-18.3 -30.9 -22 -37Q-25.6 -43 -25.6 -50H-19.4Q-19.4 -44.7 -16.8 -40.3Q-14.1 -35.9 -9.7 -33.2Q-5.3 -30.6 0 -30.6Q5.4 -30.6 9.8 -33.2Q14.3 -35.9 16.9 -40.3Q19.4 -44.7 19.4 -50H25.6Q25.6 -42.9 22 -36.8Q18.3 -30.8 12.2 -27.5Q18.3 -24.2 22 -18.3Q25.6 -12.4 25.6 -5.4Q25.6 1 22.6 6.5Q19.7 12 14.7 15.6Q9.7 19.2 3.3 20.1V30.9H17.8V36.7H3.3V50ZM0 14.1Q5.3 14.1 9.7 11.4Q14.1 8.8 16.8 4.4Q19.4 -0.1 19.4 -5.4Q19.4 -10.5 16.8 -14.8Q14.1 -19.1 9.7 -21.8Q5.3 -24.4 0 -24.4Q-5.3 -24.4 -9.7 -21.8Q-14.1 -19.2 -16.8 -14.9Q-19.4 -10.6 -19.4 -5.4Q-19.4 -0.2 -16.8 4.2Q-14.1 8.7 -9.7 11.4Q-5.3 14.1 0 14.1Z","Venus":"M-4.1 50V33.5H-22.1V26.3H-4.1V12.9Q-11.9 11.8 -18.2 7.4Q-24.4 3 -28.1 -3.9Q-31.8 -10.8 -31.8 -18.7Q-31.8 -27.3 -27.4 -34.4Q-23.1 -41.5 -15.8 -45.7Q-8.5 -50 0 -50Q8.7 -50 16 -45.7Q23.2 -41.5 27.5 -34.4Q31.8 -27.3 31.8 -18.7Q31.8 -10.9 28.1 -4Q24.4 2.8 18.2 7.3Q12.1 11.8 4.1 12.9V26.3H21.1V33.5H4.1V50ZM0 5.4Q6.6 5.4 12.1 2.1Q17.6 -1.1 20.8 -6.6Q24.1 -12.1 24.1 -18.7Q24.1 -25.1 20.8 -30.5Q17.6 -35.8 12.1 -39.1Q6.6 -42.4 0 -42.4Q-6.6 -42.4 -12.1 -39.1Q-17.6 -35.8 -20.8 -30.5Q-24.1 -25.1 -24.1 -18.7Q-24.1 -12.1 -20.8 -6.6Q-17.6 -1.1 -12.1 2.1Q-6.6 5.4 0 5.4Z","Mars":"M-9.3 50Q-19.8 50 -28.7 44.8Q-37.5 39.5 -42.9 30.6Q-48.2 21.7 -48.2 11Q-48.2 0.6 -42.9 -8.1Q-37.5 -16.9 -28.7 -22.1Q-19.8 -27.3 -9.3 -27.3Q3.1 -27.3 14 -19.7L31.4 -39.1L16.6 -46.4L48 -50L48.2 -18.4L39 -32.4L21.3 -12.5Q29.7 -2.2 29.7 11Q29.7 21.7 24.4 30.6Q19.2 39.5 10.3 44.8Q1.4 50 -9.3 50ZM-9.3 40.6Q-1.2 40.6 5.5 36.6Q12.3 32.6 16.3 25.8Q20.3 19.1 20.3 11Q20.3 3.2 16.3 -3.5Q12.3 -10.1 5.5 -14Q-1.2 -18 -9.3 -18Q-17.3 -18 -24.1 -14Q-30.8 -10.1 -34.8 -3.5Q-38.9 3.2 -38.9 11Q-38.9 19.1 -34.8 25.8Q-30.8 32.6 -24.1 36.6Q-17.3 40.6 -9.3 40.6Z","Jupiter":"M30.9 50V23.7H-40.2V14.6H-33.4Q-21.3 14.6 -12.6 10.2Q-3.9 5.8 0.8 -1.9Q5.6 -9.6 5.6 -19.3Q5.6 -29.9 0.4 -35.4Q-4.7 -40.9 -12.7 -40.9Q-20.5 -40.9 -25.7 -35.6Q-30.9 -30.3 -30.9 -21H-40.9Q-40.9 -29.5 -37.5 -36Q-34.1 -42.5 -27.7 -46.2Q-21.3 -50 -12.7 -50Q0.6 -50 8.1 -41.8Q15.5 -33.6 15.5 -20.1Q15.5 -14 13.7 -7.6Q11.8 -1.1 7.6 4.6Q3.5 10.3 -3.9 14.6H30.9V-48.3H40.9V50Z","Saturn":"M-22.9 50V-30H-32.9V-37.1H-22.9V-50H-13.7V-37.1H10.7V-30H-13.7V-18Q-13.7 -15.1 -13.9 -12.8Q-14.1 -10.4 -14.3 -8.3H-13.6Q-10.3 -13.6 -4.5 -16.4Q1.3 -19.2 8.6 -19.2Q21.3 -19.2 27.1 -12.8Q32.9 -6.4 32.9 5.5Q32.9 11.7 28.9 20.8Q24.9 29.9 24.9 33.9Q24.9 38 26.4 42.6Q28 47.1 29.9 50H19.9Q18 47.1 16.6 42.4Q15.3 37.6 15.3 33.4Q15.3 28.3 19.2 19.2Q23.3 9.7 23.3 5.5Q23.3 -3.4 19.2 -7.3Q15.1 -11.2 7 -11.2Q-3.4 -11.2 -8.6 -4.7Q-13.7 1.8 -13.7 16.1V50Z","Uranus":"M0.2 50Q-4.6 50 -8.6 47.7Q-12.5 45.3 -14.8 41.4Q-17.2 37.4 -17.2 32.6Q-17.2 26.7 -13.6 22Q-10 17.3 -4.5 15.9V-10.8H-23.5V20.8H-46V11.7H-33.2V-40.9H-46V-50H-23.5V-19.5H-4.5V-50H4.5V-19.5H23.5V-50H46V-40.9H33.2V11.7H46V20.8H23.5V-10.8H4.5V15.8Q10.3 17.3 13.9 22.1Q17.6 26.8 17.6 32.6Q17.6 37.3 15.3 41.2Q13 45.2 9.1 47.6Q5.2 50 0.2 50ZM0.2 41.6Q4.1 41.6 6.6 39Q9.2 36.5 9.2 32.6Q9.2 28.9 6.6 26.3Q3.9 23.7 0.2 23.7Q-3.7 23.7 -6.2 26.2Q-8.8 28.8 -8.8 32.6Q-8.8 36.5 -6.2 39Q-3.7 41.6 0.2 41.6Z","Neptune":"M-3.6 50V35.7H-19.2V29.5H-3.6V19Q-19.4 18 -27.8 7.8Q-36.2 -2.4 -36.2 -21.1V-27.7L-46.9 -26L-32.9 -41.5L-18.9 -26L-29.6 -27.7V-21.1Q-29.6 -5.9 -22.8 2.7Q-16 11.3 -3.6 12.4V-36.1L-14.3 -34.4L0 -50L14.3 -34.4L3.6 -36.1V12.4Q16 11.3 22.8 2.7Q29.6 -5.9 29.6 -21.1V-27.7L18.9 -26L32.9 -41.5L46.9 -26L36.2 -27.7V-21.1Q36.2 -2.4 27.8 7.8Q19.4 18 3.6 19V29.5H19.2V35.7H3.6V50Z","Pluto":"M-27.7 50V-50H-8.4Q10.4 -50 19 -43.3Q27.7 -36.7 27.7 -22.1Q27.7 -7.6 18.3 -1Q8.8 5.6 -10.8 5.6H-17.9V41.3H26.3V50ZM-17.9 -3.1H-9.2Q17.6 -3.1 17.6 -22.1Q17.6 -31.5 11.4 -36.4Q5.2 -41.3 -6.6 -41.3H-17.9Z","Chiron":"M0 50Q-12.9 50 -20.6 45.9Q-28.3 41.7 -28.3 35.2Q-28.3 29.2 -21.6 25.3Q-14.9 21.3 -3.8 20.5V-50H3.8V-30.2L18.3 -44.7L23.2 -39.8L3.8 -20.5L23.2 -1.2L18.3 3.7L3.8 -10.7V20.5Q15.1 21.3 21.7 25.3Q28.3 29.3 28.3 35.2Q28.3 41.4 20.6 45.7Q12.9 50 0 50ZM0 42.4Q9.4 42.4 14 40.4Q18.8 38.3 18.8 35.2Q18.8 31.8 13.9 30Q8.6 28.1 0 28.1Q-4.9 28.1 -8.4 28.6Q-12 29.1 -14.3 30.2Q-18.7 32.3 -18.7 35.2Q-18.7 38.3 -14 40.4Q-9.2 42.4 0 42.4Z","Lilith":"M-3.7 50V33.5H-21.6V26.4H-3.7V13Q-12 8.1 -16.7 0.6Q-21.3 -6.9 -21.3 -15.5Q-21.3 -25.2 -15.9 -32.9Q-10.5 -40.7 -0.8 -45.4Q8.8 -50 21.6 -50V-48.8Q14.3 -47.7 8.5 -42.8Q2.6 -37.8 -0.8 -30.6Q-4.3 -23.5 -4.3 -15.5Q-4.3 -7.6 -0.8 -0.4Q2.7 6.9 8.6 11.7Q14.5 16.6 21.6 17.7V18.9Q11.9 18.9 4.6 16.5V26.4H21.5V33.5H4.6V50Z","NNode":"M-27.7 48.8Q-33.1 48.8 -37.7 46.2Q-42.2 43.5 -45 39Q-47.8 34.4 -47.8 28.7Q-47.8 20.4 -41.8 14.4Q-50 1.8 -50 -10.3Q-50 -21.7 -44.1 -30.4Q-38.3 -39 -27.1 -43.9Q-15.9 -48.8 0 -48.8Q15.9 -48.8 27.1 -43.9Q38.3 -39 44.1 -30.3Q50 -21.6 50 -10.3Q50 1.7 41.8 14.2Q44.6 17 46.2 20.7Q47.8 24.5 47.8 28.7Q47.8 34.4 45 39Q42.2 43.5 37.7 46.2Q33.1 48.8 27.7 48.8Q22.2 48.8 17.6 46.2Q13.1 43.5 10.3 39Q7.5 34.4 7.5 28.7Q7.5 23 10.3 18.4Q13.1 13.8 17.6 11.2Q22.2 8.5 27.7 8.5Q31.1 8.5 35 9.9Q38.3 5 39.9 -0.1Q41.4 -5.2 41.4 -10.3Q41.4 -23.6 30.7 -31.9Q19.9 -40.3 0 -40.3Q-13.2 -40.3 -22.5 -36.4Q-31.7 -32.6 -36.6 -25.9Q-41.4 -19.1 -41.4 -10.3Q-41.4 -5.4 -39.9 -0.3Q-38.3 4.7 -35 9.9Q-31.5 8.5 -27.7 8.5Q-22.2 8.5 -17.6 11.2Q-13.1 13.8 -10.3 18.4Q-7.5 23 -7.5 28.7Q-7.5 34.4 -10.3 39Q-13.1 43.5 -17.6 46.2Q-22.2 48.8 -27.7 48.8ZM-27.7 40.7Q-22.6 40.7 -19.1 37.2Q-15.7 33.7 -15.7 28.7Q-15.7 23.6 -19.1 20.2Q-22.5 16.7 -27.7 16.7Q-32.7 16.7 -36.2 20.2Q-39.6 23.6 -39.6 28.7Q-39.6 33.7 -36.1 37.2Q-32.6 40.7 -27.7 40.7ZM27.7 40.7Q32.7 40.7 36.2 37.2Q39.6 33.7 39.6 28.7Q39.6 23.6 36.2 20.2Q32.7 16.7 27.7 16.7Q22.6 16.7 19.1 20.1Q15.7 23.5 15.7 28.7Q15.7 33.7 19.1 37.2Q22.6 40.7 27.7 40.7Z","SNode":"M0 48.8Q-15.9 48.8 -27.1 43.9Q-38.3 39 -44.1 30.3Q-50 21.6 -50 10.3Q-50 -2 -41.8 -14.4Q-47.8 -20.4 -47.8 -28.7Q-47.8 -34.3 -45.1 -38.8Q-42.4 -43.4 -37.8 -46.1Q-33.2 -48.8 -27.7 -48.8Q-22.1 -48.8 -17.5 -46.1Q-12.9 -43.4 -10.2 -38.8Q-7.5 -34.3 -7.5 -28.7Q-7.5 -23.1 -10.2 -18.5Q-12.9 -14 -17.5 -11.2Q-22.1 -8.5 -27.7 -8.5Q-29.6 -8.5 -31.4 -8.9Q-33.2 -9.3 -35 -9.9Q-38.3 -4.8 -39.9 0.3Q-41.4 5.4 -41.4 10.3Q-41.4 23.6 -30.6 31.9Q-19.8 40.3 0 40.3Q13.4 40.3 22.5 36.4Q31.7 32.6 36.6 25.9Q41.4 19.1 41.4 10.3Q41.4 5.1 39.9 0.1Q38.3 -5 35 -9.9Q33.1 -9.3 31.3 -8.9Q29.4 -8.5 27.7 -8.5Q22.1 -8.5 17.5 -11.2Q12.9 -14 10.2 -18.5Q7.5 -23.1 7.5 -28.7Q7.5 -34.3 10.2 -38.8Q12.9 -43.4 17.5 -46.1Q22.1 -48.8 27.7 -48.8Q33.2 -48.8 37.8 -46.1Q42.4 -43.4 45.1 -38.8Q47.8 -34.3 47.8 -28.7Q47.8 -20.2 41.8 -14.2Q50 -1.8 50 10.3Q50 21.6 44.1 30.3Q38.3 39 27.1 43.9Q15.9 48.8 0 48.8ZM-27.7 -16.7Q-22.6 -16.7 -19.1 -20.2Q-15.7 -23.6 -15.7 -28.7Q-15.7 -33.7 -19.1 -37.2Q-22.6 -40.7 -27.7 -40.7Q-32.7 -40.7 -36.2 -37.1Q-39.6 -33.6 -39.6 -28.7Q-39.6 -23.6 -36.2 -20.2Q-32.7 -16.7 -27.7 -16.7ZM27.7 -16.7Q32.7 -16.7 36.2 -20.2Q39.6 -23.6 39.6 -28.7Q39.6 -33.7 36.1 -37.2Q32.6 -40.7 27.7 -40.7Q22.6 -40.7 19.1 -37.2Q15.7 -33.7 15.7 -28.7Q15.7 -23.6 19.1 -20.2Q22.6 -16.7 27.7 -16.7Z","Sun":"M0-50A50 50 0 1 1 0 50A50 50 0 1 1 0-50ZM0-38A38 38 0 1 0 0 38A38 38 0 1 0 0-38ZM0-11A11 11 0 1 1 0 11A11 11 0 1 1 0-11Z","Fortune":"M0-50A50 50 0 1 1 0 50A50 50 0 1 1 0-50ZM0-40A40 40 0 1 0 0 40A40 40 0 1 0 0-40ZM-32.8-24.3L-24.3-32.8L0-8.5L24.3-32.8L32.8-24.3L8.5 0L32.8 24.3L24.3 32.8L0 8.5L-24.3 32.8L-32.8 24.3L-8.5 0Z"};

/* Built-in city list (GeoNames, CC BY 4.0), used when the online place search is unavailable */
(function(r){r.CDS_CITIES={z:["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Bamako","Africa/Brazzaville","Africa/Cairo","Africa/Casablanca","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Harare","Africa/Johannesburg","Africa/Kampala","Africa/Khartoum","Africa/Kinshasa","Africa/Lagos","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ouagadougou","America/Anchorage","America/Argentina/Buenos_Aires","America/Argentina/Cordoba","America/Bahia","America/Bogota","America/Boise","America/Caracas","America/Chicago","America/Ciudad_Juarez","America/Denver","America/Detroit","America/Edmonton","America/Fortaleza","America/Guayaquil","America/Halifax","America/Havana","America/Indiana/Indianapolis","America/Kentucky/Louisville","America/La_Paz","America/Lima","America/Los_Angeles","America/Manaus","America/Mexico_City","America/New_York","America/Phoenix","America/Recife","America/Regina","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Tijuana","America/Toronto","America/Vancouver","America/Winnipeg","Asia/Aden","Asia/Almaty","Asia/Baghdad","Asia/Baku","Asia/Bangkok","Asia/Beirut","Asia/Damascus","Asia/Dhaka","Asia/Dubai","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Jakarta","Asia/Kabul","Asia/Karachi","Asia/Kolkata","Asia/Manila","Asia/Novosibirsk","Asia/Phnom_Penh","Asia/Pyongyang","Asia/Riyadh","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Taipei","Asia/Tashkent","Asia/Tehran","Asia/Tokyo","Asia/Urumqi","Asia/Yangon","Australia/Adelaide","Australia/Brisbane","Australia/Hobart","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Berlin","Europe/Bucharest","Europe/Budapest","Europe/Dublin","Europe/Istanbul","Europe/Kyiv","Europe/London","Europe/Madrid","Europe/Minsk","Europe/Moscow","Europe/Paris","Europe/Rome","Europe/Stockholm","Europe/Vienna","Europe/Warsaw","Pacific/Auckland","Pacific/Honolulu"],c:"Shanghai, China|31.222|121.458|80\nBeijing, China|39.907|116.397|80\nShenzhen, China|22.546|114.068|80\nGuangzhou, China|23.117|113.250|80\nKinshasa, Democratic Republic of the Congo|-4.328|15.314|15\nIstanbul, Turkey|41.014|28.950|98\nLagos, Nigeria|6.454|3.395|16\nHo Chi Minh City, Vietnam|10.823|106.630|68\nChengdu, China|30.667|104.067|80\nLahore, Pakistan|31.558|74.351|72\nMumbai, India|19.073|72.883|73\nS\u00e3o Paulo, Brazil|-23.547|-46.636|54\nMexico City, Mexico|19.428|-99.128|47\nKarachi, Pakistan|24.861|67.010|72\nTianjin, China|39.142|117.177|80\nDelhi, India|28.652|77.231|73\nWuhan, China|30.583|114.267|80\nMoscow, Russia|55.752|37.618|103\nDhaka, Bangladesh|23.710|90.407|66\nSeoul, South Korea|37.566|126.978|79\nTokyo, Japan|35.690|139.692|85\nDongguan, China|23.018|113.749|80\nCairo, Egypt|30.063|31.250|6\nXi\u2019an, China|34.258|108.929|80\nJohannesburg, South Africa|-26.202|28.044|12\nNanjing, China|32.062|118.778|80\nHangzhou, China|30.294|120.161|80\nFoshan, China|23.027|113.131|80\nLondon, United Kingdom|51.509|-0.126|100\nNew York City, NY, USA|40.714|-74.006|48\nJakarta, Indonesia|-6.215|106.845|70\nBengaluru, India|12.972|77.594|73\nHanoi, Vietnam|21.024|105.841|63\nTaipei, Taiwan|25.053|121.526|82\nLima, Peru|-12.043|-77.028|44\nBogot\u00e1, Colombia|4.610|-74.082|29\nChongqing, China|29.560|106.558|80\nHong Kong, Hong Kong|22.278|114.175|69\nBaghdad, Iraq|33.341|44.401|61\nWuzhong, China|37.987|106.201|80\nQingdao, China|36.065|120.380|80\nTehran, Iran|35.694|51.422|84\nShenyang, China|41.792|123.433|80\nHyderabad, India|17.384|78.456|73\nRio de Janeiro, Brazil|-22.906|-43.182|54\nSuzhou, China|31.304|120.595|80\nPuxi, China|31.244|121.466|80\nAhmedabad, India|23.026|72.587|73\nAbidjan, Ivory Coast|5.354|-4.002|0\nPudong, China|31.240|121.501|80\nSydney, Australia|-33.868|151.207|93\nSingapore, Singapore|1.290|103.850|81\nMelbourne, Australia|-37.814|144.963|91\nDar es Salaam, Tanzania|-6.823|39.270|10\nSaint Petersburg, Russia|59.939|30.314|103\nAlexandria, Egypt|31.202|29.916|6\nHarbin, China|45.750|126.650|80\nBangkok, Thailand|13.754|100.501|63\nHefei, China|31.864|117.281|80\nDalian, China|38.912|121.602|80\nKano, Nigeria|12.000|8.517|16\nSantiago, Chile|-33.457|-70.648|52\nCape Town, South Africa|-33.926|18.423|12\nPeshawar, Pakistan|34.008|71.578|72\nChangchun, China|43.880|125.323|80\nJeddah, Saudi Arabia|21.490|39.186|78\nChennai, India|13.088|80.278|73\nKolkata, India|22.563|88.363|73\nXiamen, China|24.480|118.082|80\nSurat, India|21.196|72.830|73\nYangon, Myanmar|16.805|96.156|87\nBao'an, China|22.552|113.883|80\nKabul, Afghanistan|34.528|69.172|71\nNairobi, Kenya|-1.283|36.817|23\nWuxi, China|31.569|120.289|80\nGiza, Egypt|30.009|31.209|6\nJinan, China|36.668|116.997|80\nTaiyuan, China|37.869|112.560|80\nZhengzhou, China|34.758|113.649|80\nBamako, Mali|12.609|-7.975|4\nRiyadh, Saudi Arabia|24.688|46.722|78\nNew Taipei City, Taiwan|25.062|121.457|82\nNew Territories, Hong Kong|22.424|114.111|69\nShijiazhuang, China|38.041|114.479|80\nChattogram, Bangladesh|22.338|91.832|66\nAddis Ababa, Ethiopia|9.025|38.747|2\nKunming, China|25.039|102.718|80\nZhongshan, China|22.523|113.379|80\nNanning, China|22.817|108.317|80\nShantou, China|23.355|116.679|80\nLos Angeles, CA, USA|34.052|-118.244|45\nFaisalabad, Pakistan|31.416|73.090|72\nDubai, United Arab Emirates|25.077|55.309|67\nYokohama, Japan|35.433|139.650|85\nFuzhou, China|26.061|119.306|80\nNingbo, China|29.878|121.549|80\nCasablanca, Morocco|33.588|-7.611|7\nIbadan, Nigeria|7.378|3.906|16\nPuyang, China|29.457|119.889|80\nAnkara, Turkey|39.920|32.854|98\nShiyan, China|32.648|110.778|80\nBerlin, Germany|52.524|13.411|94\nTangshan, China|39.644|118.183|80\nRawalpindi, Pakistan|33.597|73.048|72\nL\u00fcliang, China|37.519|111.144|80\nDurban, South Africa|-29.858|31.029|12\nChangzhou, China|31.774|119.954|80\nBusan, South Korea|35.102|129.030|79\nMadrid, Spain|40.416|-3.703|101\nPyongyang, North Korea|39.034|125.754|77\nZibo, China|36.791|118.063|80\nPune, India|18.520|73.855|73\nBursa, Turkey|40.196|29.060|98\nChangsha, China|28.199|112.971|80\nQuezon City, Philippines|14.649|121.051|74\nJaipur, India|26.920|75.788|73\nGuiyang, China|26.583|106.717|80\n\u00dcr\u00fcmqi, China|43.801|87.600|86\nSurabaya, Indonesia|-7.249|112.751|70\nIncheon, South Korea|37.456|126.705|79\nLanzhou, China|36.057|103.840|80\nCaracas, Venezuela|10.488|-66.879|31\nKyiv, Ukraine|50.455|30.524|99\n\u0130zmir, Turkey|38.413|27.138|98\nHuizhou, China|23.111|114.415|80\nBuenos Aires, Argentina|-34.613|-58.377|26\nHaikou, China|20.034|110.347|80\nTaichung, Taiwan|24.147|120.684|82\nKanpur, India|26.465|80.350|73\nToronto, Canada|43.706|-79.399|56\nQuito, Ecuador|-0.230|-78.525|38\nBrisbane, Australia|-27.468|153.028|89\nLuanda, Angola|-8.837|13.234|18\nOsaka, Japan|34.694|135.501|85\nLinyi, China|35.063|118.343|80\nBaoding, China|38.873|115.462|80\nKaohsiung, Taiwan|22.616|120.313|82\nBrooklyn, NY, USA|40.650|-73.950|48\nGuayaquil, Ecuador|-2.196|-79.886|38\nBelo Horizonte, Brazil|-19.921|-43.938|54\nMinhang, China|31.109|121.375|80\nBazhong, China|31.869|106.744|80\nSalvador, Brazil|-12.976|-38.491|28\nAbuja, Nigeria|9.058|7.495|16\nGazipur, Bangladesh|23.998|90.422|66\nChicago, IL, USA|41.850|-87.650|32\nWenzhou, China|27.999|120.667|80\nBekasi, Indonesia|-6.235|106.990|70\nDakar, Senegal|14.694|-17.444|9\nHaiphong, Vietnam|20.865|106.683|63\nYunfu, China|22.928|112.038|80\nNavi Mumbai, India|19.037|73.016|73\nMogadishu, Somalia|2.037|45.344|21\nKumasi, Ghana|6.688|-1.624|1\nBandung, Indonesia|-6.922|107.607|70\nGujranwala, Pakistan|32.156|74.187|72\nHuai'an, China|33.589|119.019|80\nMedan, Indonesia|3.583|98.667|70\nLucknow, India|26.839|80.923|73\nOuagadougou, Burkina Faso|12.366|-1.534|24\nNagpur, India|21.146|79.085|73\nFortaleza, Brazil|-3.717|-38.543|37\nCali, Colombia|3.431|-76.520|29\nPerth, Australia|-31.952|115.861|92\nDaegu, South Korea|35.870|128.591|79\nAlgiers, Algeria|36.732|3.087|3\nNanchang, China|28.684|115.853|80\nBaku, Azerbaijan|40.378|49.892|62\nHohhot, China|40.811|111.652|80\nNagoya, Japan|35.181|136.906|85\nRome, Italy|41.892|12.511|105\nQueens, NY, USA|40.681|-73.837|48\nHouston, TX, USA|29.763|-95.363|32\nMashhad, Iran|36.298|59.606|84\nShaoxing, China|30.002|120.579|80\nNantong, China|32.030|120.875|80\nBaoshan, China|31.408|121.490|80\nKowloon, Hong Kong|22.317|114.183|69\nYantai, China|37.476|121.441|80\nGaziantep, Turkey|37.059|37.383|98\nLubumbashi, Democratic Republic of the Congo|-11.661|27.479|19\nManaus, Brazil|-3.102|-60.025|46\nLusaka, Zambia|-15.407|28.287|20\nBras\u00edlia, Brazil|-15.780|-47.930|54\nZhuhai, China|22.277|113.568|80\nSanto Domingo, Dominican Republic|18.472|-69.892|53\nLom\u00e9, Togo|6.129|1.222|17\nMultan, Pakistan|30.197|71.478|72\nHavana, Cuba|23.133|-82.383|40\nDepok, Indonesia|-6.400|106.819|70\nBaotou, China|40.652|109.844|80\nParis, France|48.853|2.349|104\nCoimbatore, India|11.006|76.966|73\nQingyang, China|35.710|107.645|80\nPort Harcourt, Nigeria|4.777|7.013|16\nPretoria, South Africa|-25.745|28.188|12\nC\u00f3rdoba, Argentina|-31.406|-64.189|27\nMbuji-Mayi, Democratic Republic of the Congo|-6.136|23.590|19\nAleppo, Syria|36.201|37.161|65\nKunshan, China|31.378|120.954|80\nAl Maw\u015fil al Jad\u012bdah, Iraq|36.333|43.106|61\nWeifang, China|36.710|119.102|80\nZunyi, China|27.687|106.907|80\nAl Ba\u015frah al Qad\u012bmah, Iraq|30.503|47.815|61\nLa Paz, Bolivia|-16.500|-68.150|43\nLianyungang, China|34.598|119.216|80\nMedell\u00edn, Colombia|6.245|-75.572|29\nIndore, India|22.718|75.833|73\nBrazzaville, Republic of the Congo|-4.266|15.283|5\nTashkent, Uzbekistan|41.265|69.216|83\nGanzhou, China|25.847|114.933|80\nAlmaty, Kazakhstan|43.252|76.912|60\nKhartoum, Sudan|15.552|32.532|14\nHamburg, Germany|53.551|9.993|94\nSapporo, Japan|43.067|141.350|85\nSongjiang, China|31.034|121.223|80\nAccra, Ghana|5.556|-0.197|1\nCuritiba, Brazil|-25.428|-49.273|54\nOrdos, China|39.609|109.782|80\nSanaa, Yemen|15.355|44.206|59\nConakry, Guinea|9.538|-13.677|8\nTangerang, Indonesia|-6.178|106.630|70\nTijuana, Mexico|32.503|-117.004|55\nHyderabad, Pakistan|25.397|68.377|72\nBeirut, Lebanon|33.893|35.502|64\nJieyang, China|23.542|116.366|80\nJilin, China|43.847|126.561|80\nJiading, China|31.386|121.245|80\nBucharest, Romania|44.432|26.106|95\nCamayenne, Guinea|9.535|-13.688|8\nKakamega, Kenya|0.284|34.752|23\nShangqiu, China|34.414|115.656|80\nNanchong, China|30.795|106.085|80\nTainan, Taiwan|22.991|120.213|82\nDatong, China|40.094|113.291|80\nKaduna, Nigeria|10.526|7.439|16\nOmdurman, Sudan|15.645|32.478|14\nDavao, Philippines|7.073|125.613|74\nTh\u0101ne, India|19.197|72.964|73\nIztapalapa, Mexico|19.355|-99.062|47\nDiyarbak\u0131r, Turkey|37.914|40.217|98\nSanta Cruz de la Sierra, Bolivia|-17.786|-63.181|43\nVadodara, India|22.299|73.208|73\nAdana, Turkey|36.986|35.325|98\nNanyang, China|33.005|112.547|80\nAbu Dhabi, United Arab Emirates|24.451|54.397|67\nPalembang, Indonesia|-2.917|104.746|70\nSharjah, United Arab Emirates|25.334|55.412|67\nBhopal, India|23.255|77.403|73\nJiangmen, China|22.583|113.083|80\nBenin City, Nigeria|6.338|5.626|16\nJiangyin, China|31.911|120.263|80\nFuyang, China|32.900|115.817|80\nMontr\u00e9al, Canada|45.509|-73.588|56\nBayan Nur, China|40.741|107.386|80\nMaracaibo, Venezuela|10.642|-71.611|31\nChaozhou, China|23.654|116.623|80\nMinsk, Belarus|53.900|27.567|102\nBudapest, Hungary|47.498|19.040|96\nQingyuan, China|23.700|113.033|80\nTai\u2019an, China|36.185|117.120|80\nRasap\u016bdipalem, India|17.733|83.316|73\nPimpri-Chinchwad, India|18.619|73.804|73\nCaloocan, Philippines|14.650|120.968|74\nWarsaw, Poland|52.230|21.012|108\nSoweto, South Africa|-26.268|27.858|12\nSemarang, Indonesia|-6.993|110.421|70\nPuebla, Mexico|19.048|-98.207|47\nVienna, Austria|48.208|16.372|107\nBarcelona, Spain|41.389|2.159|101\nPatna, India|25.594|85.136|73\nMosul, Iraq|36.335|43.119|61\nKallakurichi, India|11.734|78.959|73\nKampala, Uganda|0.316|32.582|13\nXining, China|36.626|101.757|80\nChangshu, China|31.646|120.742|80\nHuainan, China|32.626|116.997|80\nRabat, Morocco|34.013|-6.833|7\nRecife, Brazil|-8.054|-34.881|50\nPhoenix, AZ, USA|33.448|-112.074|49\nSuzhou, China|33.636|116.979|80\nEcatepec de Morelos, Mexico|19.605|-99.061|47\nLu\u2019an, China|31.736|116.517|80\nValencia, Venezuela|10.162|-68.000|31\nLudhiana, India|30.912|75.854|73\nYancheng, China|33.358|120.157|80\nNovosibirsk, Russia|55.023|82.932|75\nErbil, Iraq|36.191|44.009|61\nFukuoka, Japan|33.600|130.417|85\nTaizhou, China|32.491|119.908|80\nDaqing, China|46.583|125.000|80\nManila, Philippines|14.604|120.982|74\nWuhu, China|31.353|118.429|80\nSantiago de Quer\u00e9taro, Mexico|20.588|-100.388|47\nDazhou, China|31.211|107.463|80\nYangzhou, China|32.397|119.436|80\nLe\u00f3n de los Aldama, Mexico|21.122|-101.683|47\nMakkah, Saudi Arabia|21.427|39.826|78\nPhiladelphia, PA, USA|39.952|-75.164|48\nPhnom Penh, Cambodia|11.562|104.916|76\nGuilin, China|25.280|110.296|80\nDamascus, Syria|33.510|36.291|65\nQuetta, Pakistan|30.184|67.001|72\nZhaoqing, China|23.049|112.461|80\nOnitsha, Nigeria|6.150|6.786|16\nMianyang, China|31.468|104.682|80\nAuckland, New Zealand|-36.849|174.763|109\nIsfahan, Iran|32.652|51.675|84\nWanzhou, China|30.765|108.396|80\nAstana, Kazakhstan|51.180|71.446|60\nHarare, Zimbabwe|-17.828|31.053|11\nMonrovia, Liberia|6.301|-10.797|22\nPutian, China|25.439|119.010|80\nKawasaki, Japan|35.521|139.717|85\nGoi\u00e2nia, Brazil|-16.679|-49.254|54\nSan Antonio, TX, USA|29.424|-98.494|32\nKobe, Japan|34.691|135.183|85\nStockholm, Sweden|59.329|18.069|106\nCiudad Ju\u00e1rez, Mexico|31.720|-106.461|33\nC\u1ea7n Th\u01a1, Vietnam|10.037|105.788|68\nMunich, Germany|48.137|11.575|94\nKhulna, Bangladesh|22.810|89.564|66\nManhattan, NY, USA|40.783|-73.966|48\nAdelaide, Australia|-34.929|138.599|88\nSan Diego, CA, USA|32.716|-117.165|45\nThe Bronx, NY, USA|40.850|-73.866|48\nDallas, TX, USA|32.783|-96.807|32\nCalgary, Canada|51.050|-114.085|36\nBirmingham, United Kingdom|52.481|-1.900|100\nDublin, Ireland|53.333|-6.249|97\nOttawa, Canada|45.411|-75.698|56\nEdmonton, Canada|53.550|-113.469|36\nJacksonville, FL, USA|30.332|-81.656|48\nFort Worth, TX, USA|32.725|-97.321|32\nSan Jose, CA, USA|37.339|-121.895|45\nAustin, TX, USA|30.267|-97.743|32\nColumbus, OH, USA|39.961|-82.999|48\nCharlotte, NC, USA|35.227|-80.843|48\nIndianapolis, IN, USA|39.768|-86.158|41\nSan Francisco, CA, USA|37.775|-122.419|45\nSeattle, WA, USA|47.606|-122.332|45\nWinnipeg, Canada|49.884|-97.147|58\nDenver, CO, USA|39.739|-104.985|34\nMississauga, Canada|43.579|-79.658|56\nWashington, DC, USA|38.895|-77.036|48\nNashville, TN, USA|36.166|-86.784|32\nOklahoma City, OK, USA|35.468|-97.516|32\nEl Paso, TX, USA|31.759|-106.487|34\nVancouver, Canada|49.250|-123.119|57\nBrampton, Canada|43.683|-79.766|56\nBoston, MA, USA|42.358|-71.060|48\nPortland, OR, USA|45.523|-122.676|45\nDetroit, MI, USA|42.331|-83.046|35\nLas Vegas, NV, USA|36.175|-115.137|45\nNew South Memphis, TN, USA|35.087|-90.057|32\nGold Coast, Australia|-28.000|153.431|89\nMemphis, TN, USA|35.150|-90.049|32\nGlasgow, United Kingdom|55.865|-4.258|100\nLouisville, KY, USA|38.254|-85.759|42\nBaltimore, MD, USA|39.290|-76.612|48\nSouth Boston, MA, USA|42.333|-71.049|48\nHamilton, Canada|43.250|-79.850|56\nManchester, United Kingdom|53.481|-2.237|100\nSurrey, Canada|49.106|-122.825|57\nAlbuquerque, NM, USA|35.084|-106.651|34\nMilwaukee, WI, USA|43.039|-87.906|32\nSheffield, United Kingdom|53.383|-1.466|100\nTucson, AZ, USA|32.222|-110.926|49\nFresno, CA, USA|36.748|-119.772|45\nLeeds, United Kingdom|53.796|-1.548|100\nQu\u00e9bec, Canada|46.812|-71.215|56\nSacramento, CA, USA|38.582|-121.494|45\nEdinburgh, United Kingdom|55.952|-3.196|100\nAtlanta, GA, USA|33.749|-84.388|48\nNewcastle, Australia|-32.930|151.780|93\nLiverpool, United Kingdom|53.411|-2.978|100\nMiami, FL, USA|25.774|-80.194|48\nOmaha, NE, USA|41.256|-95.940|32\nRaleigh, NC, USA|35.772|-78.639|48\nBristol, United Kingdom|51.455|-2.597|100\nKansas City, MO, USA|39.100|-94.579|32\nLong Beach, CA, USA|33.767|-118.189|45\nMesa, AZ, USA|33.422|-111.823|49\nHalifax, Canada|44.643|-63.577|39\nStaten Island, NY, USA|40.562|-74.140|48\nColorado Springs, CO, USA|38.834|-104.821|34\nVirginia Beach, VA, USA|36.853|-75.978|48\nLaval, Canada|45.570|-73.692|56\nLondon, Canada|42.983|-81.233|56\nOakland, CA, USA|37.804|-122.271|45\nChristchurch, New Zealand|-43.533|172.633|109\nTampa, FL, USA|27.948|-82.458|48\nTulsa, OK, USA|36.154|-95.993|32\nMinneapolis, MN, USA|44.980|-93.264|32\nSunshine Coast, Australia|-26.657|153.080|89\nWichita, KS, USA|37.692|-97.338|32\nArlington, TX, USA|32.736|-97.108|32\nWellington, New Zealand|-41.287|174.776|109\nBakersfield, CA, USA|35.373|-119.019|45\nCardiff, United Kingdom|51.480|-3.180|100\nLeicester, United Kingdom|52.639|-1.132|100\nCanberra, Australia|-35.283|149.128|93\nBradford, United Kingdom|53.794|-1.752|100\nCleveland, OH, USA|41.499|-81.695|48\nEtobicoke, Canada|43.644|-79.570|56\nNew Orleans, LA, USA|29.955|-90.075|32\nManukau City, New Zealand|-36.993|174.880|109\nAurora, CO, USA|39.729|-104.832|34\nHonolulu, HI, USA|21.307|-157.858|110\nAnaheim, CA, USA|33.835|-117.915|45\nBelfast, United Kingdom|54.597|-5.925|100\nCentral Coast, Australia|-33.430|151.371|93\nCoventry, United Kingdom|52.407|-1.512|100\nLogan City, Australia|-27.639|153.109|89\nWest Raleigh, NC, USA|35.787|-78.664|48\nMarkham, Canada|43.867|-79.266|56\nOrlando, FL, USA|28.538|-81.379|48\nBrent, United Kingdom|51.553|-0.302|100\nBirkenhead, United Kingdom|53.393|-3.015|100\nNottingham, United Kingdom|52.954|-1.150|100\nVaughan, Canada|43.836|-79.498|56\nLexington, KY, USA|37.989|-84.478|48\nIslington, United Kingdom|51.536|-0.103|100\nReading, United Kingdom|51.456|-0.971|100\nRiverside, CA, USA|33.953|-117.396|45\nCorpus Christi, TX, USA|27.801|-97.396|32\nLexington-Fayette, KY, USA|38.050|-84.459|48\nKingston upon Hull, United Kingdom|53.745|-0.335|100\nPreston, United Kingdom|53.763|-2.705|100\nCincinnati, OH, USA|39.127|-84.514|48\nSanta Ana, CA, USA|33.746|-117.868|45\nStockton, CA, USA|37.958|-121.291|45\nPittsburgh, PA, USA|40.441|-79.996|48\nSaint Paul, MN, USA|44.944|-93.093|32\nSouth Dublin, Ireland|53.290|-6.342|97\nSwansea, United Kingdom|51.621|-3.943|100\nNewcastle upon Tyne, United Kingdom|54.973|-1.614|100\nGatineau, Canada|45.477|-75.702|56\nSouthend-on-Sea, United Kingdom|51.538|0.714|100\nLincoln, NE, USA|40.800|-96.667|32\nVictoria, Canada|48.436|-123.352|57\nAnchorage, AK, USA|61.218|-149.900|25\nMeads, KY, USA|38.413|-82.709|48\nHenderson, NV, USA|36.040|-114.982|45\nGreensboro, NC, USA|36.073|-79.792|48\nBrighton, United Kingdom|50.828|-0.139|100\nPlano, TX, USA|33.020|-96.699|32\nGeelong, Australia|-38.147|144.361|91\nNewark, NJ, USA|40.736|-74.172|48\nMadison, WI, USA|43.073|-89.401|32\nWollongong, Australia|-34.424|150.893|93\nSt. Louis, MO, USA|38.627|-90.198|32\nDerby, United Kingdom|52.923|-1.477|100\nSouthampton, United Kingdom|50.904|-1.404|100\nSaskatoon, Canada|52.132|-106.669|51\nChula Vista, CA, USA|32.640|-117.084|45\nToledo, OH, USA|41.664|-83.555|48\nJersey City, NJ, USA|40.728|-74.078|48\nReno, NV, USA|39.530|-119.814|45\nWolverhampton, United Kingdom|52.585|-2.123|100\nChandler, AZ, USA|33.306|-111.841|49\nFort Wayne, IN, USA|41.131|-85.129|41\nPlymouth, United Kingdom|50.372|-4.143|100\nNorth Shore, New Zealand|-36.800|174.750|109\nStoke-on-Trent, United Kingdom|53.004|-2.185|100\nBuffalo, NY, USA|42.886|-78.878|48\nDurham, NC, USA|35.994|-78.899|48\nSt. Petersburg, FL, USA|27.771|-82.679|48\nIrvine, CA, USA|33.669|-117.823|45\nKitchener, Canada|43.425|-80.511|56\nMilton Keynes, United Kingdom|52.042|-0.756|100\nLaredo, TX, USA|27.506|-99.508|32\nHobart, Australia|-42.879|147.329|90\nBurnaby, Canada|49.266|-122.953|57\nLubbock, TX, USA|33.578|-101.855|32\nCity of Westminster, United Kingdom|51.498|-0.136|100\nGilbert, AZ, USA|33.353|-111.789|49\nNorthampton, United Kingdom|52.250|-0.883|100\nTri-Cities, WA, USA|46.245|-119.196|45\nWinston-Salem, NC, USA|36.100|-80.244|48\nGlendale, AZ, USA|33.539|-112.186|49\nNorfolk, VA, USA|36.847|-76.285|48\nOldham, United Kingdom|53.541|-2.118|100\nHialeah, FL, USA|25.858|-80.278|48\nGarland, TX, USA|32.913|-96.639|32\nScottsdale, AZ, USA|33.509|-111.899|49\nIrving, TX, USA|32.814|-96.949|32\nBoise, ID, USA|43.614|-116.203|30\nChesapeake, VA, USA|36.819|-76.275|48\nNorth Las Vegas, NV, USA|36.199|-115.118|45\nFremont, CA, USA|37.548|-121.989|45\nWindsor, Canada|42.300|-83.017|56\nSpokane, WA, USA|47.660|-117.429|45\nLongueuil, Canada|45.515|-73.468|56\nBexley, United Kingdom|51.442|0.149|100\nBaton Rouge, LA, USA|30.443|-91.187|32\nUpper West Side, NY, USA|40.787|-73.975|48\nRichmond, VA, USA|37.554|-77.460|48\nRegina, Canada|50.450|-104.618|51\nLuton, United Kingdom|51.880|-0.417|100\nCork, Ireland|51.898|-8.471|97\nParadise, NV, USA|36.097|-115.147|45\nTacoma, WA, USA|47.253|-122.444|45\nBarking, United Kingdom|51.533|0.083|100\nJamaica, NY, USA|40.691|-73.806|48\nSan Bernardino, CA, USA|34.108|-117.290|45\nArchway, United Kingdom|51.567|-0.134|100\nSalt Lake City, UT, USA|40.761|-111.891|34\nHuntsville, AL, USA|34.730|-86.586|32\nDes Moines, IA, USA|41.601|-93.609|32\nOakville, Canada|43.450|-79.683|56\nFontana, CA, USA|34.092|-117.435|45\nModesto, CA, USA|37.639|-120.997|45\nRichmond, Canada|49.170|-123.137|57\nRochester, NY, USA|43.155|-77.616|48\nMaryvale, AZ, USA|33.502|-112.178|49\nPortsmouth, United Kingdom|50.799|-1.091|100\nArlington, VA, USA|38.881|-77.104|48\nOxnard, CA, USA|34.197|-119.177|45\nColumbus, GA, USA|32.461|-84.988|48\nWorcester, MA, USA|42.263|-71.802|48\nMoreno Valley, CA, USA|33.938|-117.231|45\nLittle Rock, AR, USA|34.746|-92.290|32\nRichmond Hill, Canada|43.871|-79.437|56\nFayetteville, NC, USA|35.053|-78.878|48\nHuntington Beach, CA, USA|33.660|-117.999|45\nTallahassee, FL, USA|30.438|-84.281|48\nSwindon, United Kingdom|51.558|-1.781|100\nTownsville, Australia|-19.266|146.806|89\nYonkers, NY, USA|40.930|-73.898|48\nGlendale, CA, USA|34.143|-118.255|45\nCypress, TX, USA|29.969|-95.697|32\nAurora, IL, USA|41.761|-88.320|32\nAmarillo, TX, USA|35.222|-101.831|32\nAkron, OH, USA|41.081|-81.519|48\nVancouver, WA, USA|45.639|-122.661|45\nBirmingham, AL, USA|33.521|-86.802|32\nMontgomery, AL, USA|32.367|-86.300|32\nGrand Rapids, MI, USA|42.963|-85.668|35\nPeoria, AZ, USA|33.581|-112.237|49\nProvidence, RI, USA|41.824|-71.413|48\nKnoxville, TN, USA|35.961|-83.921|48\nSunrise Manor, NV, USA|36.211|-115.073|45\nGrand Prairie, TX, USA|32.746|-96.998|32\nShreveport, LA, USA|32.525|-93.750|32\nBrownsville, TX, USA|25.902|-97.497|32\nOverland Park, KS, USA|38.982|-94.671|32\nNewport News, VA, USA|36.980|-76.430|48\nMobile, AL, USA|30.694|-88.043|32\nFort Lauderdale, FL, USA|26.122|-80.143|48\nSanta Clarita, CA, USA|34.392|-118.543|45\nChattanooga, TN, USA|35.046|-85.310|48\nEast Flatbush, NY, USA|40.654|-73.930|48\nSpring Valley, NV, USA|36.108|-115.245|45\nSanta Rosa, CA, USA|38.440|-122.714|45\nEugene, OR, USA|44.052|-123.087|45\nTempe, AZ, USA|33.415|-111.909|49\nOceanside, CA, USA|33.196|-117.379|45\nSalem, OR, USA|44.943|-123.035|45\nGarden Grove, CA, USA|33.774|-117.941|45\nRancho Cucamonga, CA, USA|34.106|-117.593|45\nCape Coral, FL, USA|26.563|-81.950|48\nEast New York, NY, USA|40.667|-73.882|48\nSioux Falls, SD, USA|43.544|-96.728|32\nOntario, CA, USA|34.063|-117.651|45\nFort Collins, CO, USA|40.585|-105.084|34\nSpringfield, MO, USA|37.215|-93.298|32\nHollywood, CA, USA|34.098|-118.327|45\nElk Grove, CA, USA|38.409|-121.372|45\nClarksville, TN, USA|36.530|-87.359|32\nPembroke Pines, FL, USA|26.003|-80.224|48\nDeer Valley, AZ, USA|33.684|-112.135|49\nMurfreesboro, TN, USA|35.846|-86.390|32\nPort Saint Lucie, FL, USA|27.294|-80.350|48\nCorona, CA, USA|33.875|-117.566|45\nMcKinney, TX, USA|33.198|-96.615|32\nLancaster, CA, USA|34.698|-118.137|45\nCary, NC, USA|35.792|-78.781|48\nAlexandria, VA, USA|38.805|-77.047|48\nTempe Junction, AZ, USA|33.414|-111.943|49\nPalmdale, CA, USA|34.579|-118.116|45\nHayward, CA, USA|37.669|-122.081|45\nSalinas, CA, USA|36.678|-121.656|45\nSunnyvale, CA, USA|37.369|-122.036|45\nFrisco, TX, USA|33.151|-96.824|32\nSpringfield, MA, USA|42.101|-72.590|48\nEast Chattanooga, TN, USA|35.065|-85.249|48\nPasadena, TX, USA|29.691|-95.209|32\nJackson, MS, USA|32.299|-90.185|32\nPomona, CA, USA|34.055|-117.752|45\nKansas City, KS, USA|39.114|-94.627|32\nWashington Heights, NY, USA|40.850|-73.935|48\nLakewood, CO, USA|39.705|-105.081|34\nEscondido, CA, USA|33.119|-117.086|45\nAstoria, NY, USA|40.772|-73.930|48\nHollywood, FL, USA|26.011|-80.149|48\nBorough Park, NY, USA|40.634|-73.997|48\nValencia, CA, USA|34.444|-118.610|45\nRockford, IL, USA|42.271|-89.094|32\nEast Hampton, VA, USA|37.037|-76.332|48\nJoliet, IL, USA|41.525|-88.083|32\nSavannah, GA, USA|32.084|-81.100|48\nPaterson, NJ, USA|40.917|-74.172|48\nBridgeport, CT, USA|41.179|-73.189|48\nNaperville, IL, USA|41.786|-88.147|32\nGainesville, FL, USA|29.652|-82.325|48\nMesquite, TX, USA|32.767|-96.599|32\nSyracuse, NY, USA|43.048|-76.147|48\nTorrance, CA, USA|33.836|-118.341|45\nSurprise, AZ, USA|33.631|-112.333|49\nMetairie Terrace, LA, USA|29.979|-90.164|32\nColumbia, SC, USA|34.001|-81.035|48\nPasadena, CA, USA|34.148|-118.145|45\nOrange, CA, USA|33.788|-117.853|45\nFullerton, CA, USA|33.870|-117.925|45\nKilleen, TX, USA|31.117|-97.728|32\nMcAllen, TX, USA|26.203|-98.230|32\nBellevue, WA, USA|47.610|-122.201|45\nMetairie, LA, USA|29.984|-90.153|32\nHampton, VA, USA|37.030|-76.345|48\nMiramar, FL, USA|25.987|-80.232|48\nVan Nuys, CA, USA|34.187|-118.449|45\nWest Valley City, UT, USA|40.692|-112.001|34\nDayton, OH, USA|39.759|-84.192|48\nOlathe, KS, USA|38.881|-94.819|32\nWarren, MI, USA|42.490|-83.013|35\nThornton, CO, USA|39.868|-104.972|34\nCarrollton, TX, USA|32.954|-96.890|32\nCharleston, SC, USA|32.776|-79.933|48\nMidland, TX, USA|31.997|-102.078|32\nWaco, TX, USA|31.549|-97.147|32\nSterling Heights, MI, USA|42.580|-83.030|35\nDenton, TX, USA|33.215|-97.133|32\nCedar Rapids, IA, USA|42.008|-91.644|32\nNew Haven, CT, USA|41.308|-72.928|48\nRoseville, CA, USA|38.752|-121.288|45\nVisalia, CA, USA|36.330|-119.292|45\nCoral Springs, FL, USA|26.271|-80.271|48\nThousand Oaks, CA, USA|34.171|-118.838|45\nColumbia, MO, USA|38.952|-92.334|32\nElizabeth, NJ, USA|40.664|-74.211|48\nStamford, CT, USA|41.053|-73.539|48\nConcord, CA, USA|37.978|-122.031|45\nNorman, OK, USA|35.223|-97.439|32\nAlhambra, AZ, USA|33.498|-112.134|49\nAthens, GA, USA|33.961|-83.378|48\nKent, WA, USA|47.381|-122.235|45\nSimi Valley, CA, USA|34.269|-118.781|45\nEast Los Angeles, CA, USA|34.024|-118.172|45\nSanta Clara, CA, USA|37.354|-121.955|45\nSunset Park, NY, USA|40.645|-74.012|48\nTopeka, KS, USA|39.048|-95.678|32\nAbilene, TX, USA|32.449|-99.733|32\nKoreatown, CA, USA|34.058|-118.301|45\nSheepshead Bay, NY, USA|40.591|-73.945|48\nAmherst, NY, USA|42.978|-78.800|48\nVictorville, CA, USA|34.536|-117.291|45\nVallejo, CA, USA|38.104|-122.257|45\nLafayette, LA, USA|30.224|-92.020|32\nChico, CA, USA|39.728|-121.837|45\nNorth Stamford, CT, USA|41.138|-73.543|48\nHartford, CT, USA|41.764|-72.685|48\nBerkeley, CA, USA|37.872|-122.273|45\nWest Palm Beach, FL, USA|26.715|-80.053|48\nAllentown, PA, USA|40.608|-75.490|48\nEvansville, IN, USA|37.975|-87.556|32\nPalm Bay, FL, USA|28.034|-80.589|48\nFargo, ND, USA|46.877|-96.790|32\nClearwater, FL, USA|27.966|-82.800|48\nIndependence, MO, USA|39.091|-94.416|32\nBillings, MT, USA|45.783|-108.501|34\nAnn Arbor, MI, USA|42.278|-83.741|35\nEl Monte, CA, USA|34.069|-118.028|45\nHarlem, NY, USA|40.808|-73.945|48\nWestminster, CO, USA|39.837|-105.037|34\nRound Rock, TX, USA|30.508|-97.679|32\nWilmington, NC, USA|34.236|-77.946|48\nEast Harlem, NY, USA|40.795|-73.942|48\nArvada, CO, USA|39.803|-105.087|34\nBeaumont, TX, USA|30.086|-94.102|32\nProvo, UT, USA|40.234|-111.659|34\nPeoria, IL, USA|40.694|-89.589|32\nCarlsbad, CA, USA|33.158|-117.351|45\nOdessa, TX, USA|31.846|-102.368|32\nSpringfield, IL, USA|39.802|-89.644|32\nDowney, CA, USA|33.940|-118.133|45\nElmhurst, NY, USA|40.736|-73.878|48\nCosta Mesa, CA, USA|33.641|-117.919|45\nMiami Gardens, FL, USA|25.942|-80.246|48\nNorth Peoria, IL, USA|40.718|-89.584|32\nFairfield, CA, USA|38.249|-122.040|45\nLansing, MI, USA|42.733|-84.556|35\nBushwick, NY, USA|40.694|-73.919|48\nGravesend, NY, USA|40.598|-73.965|48\nRochester, MN, USA|44.022|-92.470|32\nElgin, IL, USA|42.037|-88.281|32\nWest Jordan, UT, USA|40.610|-111.939|34\nInglewood, CA, USA|33.962|-118.353|45\nTuscaloosa, AL, USA|33.210|-87.569|32\nRichardson, TX, USA|32.948|-96.730|32\nLowell, MA, USA|42.633|-71.316|48\nEast Independence, MO, USA|39.096|-94.355|32\nGresham, OR, USA|45.498|-122.431|45\nAntioch, CA, USA|38.005|-121.806|45\nCambridge, MA, USA|42.375|-71.106|48\nHigh Point, NC, USA|35.956|-80.005|48\nManchester, NH, USA|42.996|-71.455|48\nTemecula, CA, USA|33.494|-117.148|45\nMurrieta, CA, USA|33.554|-117.214|45\nCentennial, CO, USA|39.579|-104.877|34\nRichmond, CA, USA|37.936|-122.348|45\nCorona, NY, USA|40.747|-73.860|48\nPueblo, CO, USA|38.254|-104.609|34\nPearland, TX, USA|29.564|-95.286|32\nWaterbury, CT, USA|41.558|-73.052|48\nGreeley, CO, USA|40.423|-104.709|34\nWest Covina, CA, USA|34.069|-117.939|45\nEnterprise, NV, USA|36.025|-115.242|45\nNorth Charleston, SC, USA|32.855|-79.975|48\nEverett, WA, USA|47.979|-122.202|45\nCollege Station, TX, USA|30.628|-96.334|32\nPompano Beach, FL, USA|26.238|-80.125|48\nSouth Fulton, GA, USA|33.593|-84.673|48\nNorwalk, CA, USA|33.902|-118.082|45\nBoulder, CO, USA|40.015|-105.271|34\nBroken Arrow, OK, USA|36.053|-95.791|32\nDaly City, CA, USA|37.706|-122.462|45\nSandy Springs, GA, USA|33.924|-84.379|48\nBurbank, CA, USA|34.181|-118.309|45\nGreen Bay, WI, USA|44.519|-88.020|32\nSanta Maria, CA, USA|34.953|-120.436|45\nUniversal City, CA, USA|34.139|-118.353|45\nWichita Falls, TX, USA|33.914|-98.493|32\nLakeland, FL, USA|28.039|-81.950|48\nClovis, CA, USA|36.825|-119.703|45\nLewisville, TX, USA|33.046|-96.994|32\nTyler, TX, USA|32.351|-95.301|32\nEl Cajon, CA, USA|32.795|-116.963|45\nSan Mateo, CA, USA|37.563|-122.326|45\nBrandon, FL, USA|27.938|-82.286|48\nRialto, CA, USA|34.106|-117.370|45\nDavenport, IA, USA|41.524|-90.578|32\nEdison, NJ, USA|40.519|-74.412|48\nHillsboro, OR, USA|45.523|-122.990|45\nLas Cruces, NM, USA|32.312|-106.778|34\nSouth Bend, IN, USA|41.683|-86.250|41\nAlbany, NY, USA|42.653|-73.756|48\nNew Bedford, MA, USA|41.635|-70.927|48\nVista, CA, USA|33.200|-117.243|45\nDavie, FL, USA|26.063|-80.233|48\nChinatown, CA, USA|37.797|-122.409|45\nRenton, WA, USA|47.483|-122.217|45\nRoanoke, VA, USA|37.271|-79.941|48\nCitrus Heights, CA, USA|38.707|-121.281|45\nBellingham, WA, USA|48.760|-122.488|45\nFolsom, CA, USA|38.678|-121.176|45\nDavis, CA, USA|38.545|-121.741|45\nSanta Cruz, CA, USA|36.974|-122.031|45\nOlympia, WA, USA|47.045|-122.902|45\nRoseville, MI, USA|42.497|-82.937|35\nEnfield, CT, USA|41.976|-72.592|48\nRoseville, MN, USA|45.006|-93.157|32"};})(typeof window!=="undefined"?window:globalThis);

/* Chart Design Station engine (cds) | ES5 | needs window.Astronomy (Astronomy Engine 2.x) */
(function (root) {
  'use strict';
  var D2R = Math.PI / 180, R2D = 180 / Math.PI;

  function norm(x) { x = x % 360; return x < 0 ? x + 360 : x; }
  function sind(x) { return Math.sin(x * D2R); }
  function cosd(x) { return Math.cos(x * D2R); }
  function tand(x) { return Math.tan(x * D2R); }
  function atan2d(y, x) { return Math.atan2(y, x) * R2D; }
  function asind(x) { return Math.asin(Math.max(-1, Math.min(1, x))) * R2D; }
  function diff(a, b) { var d = norm(a - b); return d > 180 ? d - 360 : d; } /* signed a-b in (-180,180] */
  function mid(a, b) { return norm(b + diff(a, b) / 2); }

  function A() { return root.Astronomy; }

  var SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  var ELEMENTS = ['fire', 'earth', 'air', 'water'];

  var POINTS = [
    { key: 'Sun', name: 'Sun', group: 'light' },
    { key: 'Moon', name: 'Moon', group: 'light' },
    { key: 'Mercury', name: 'Mercury', group: 'personal' },
    { key: 'Venus', name: 'Venus', group: 'personal' },
    { key: 'Mars', name: 'Mars', group: 'personal' },
    { key: 'Jupiter', name: 'Jupiter', group: 'social' },
    { key: 'Saturn', name: 'Saturn', group: 'social' },
    { key: 'Uranus', name: 'Uranus', group: 'outer' },
    { key: 'Neptune', name: 'Neptune', group: 'outer' },
    { key: 'Pluto', name: 'Pluto', group: 'outer' },
    { key: 'Chiron', name: 'Chiron', group: 'point', optional: true },
    { key: 'NNode', name: 'North Node', group: 'point' },
    { key: 'SNode', name: 'South Node', group: 'point', optional: true },
    { key: 'Lilith', name: 'Lilith (Mean Black Moon)', group: 'point', optional: true },
    { key: 'Fortune', name: 'Part of Fortune', group: 'point', optional: true },
    { key: 'Vertex', name: 'Vertex', group: 'point', optional: true }
  ];

  var HOUSE_SYSTEMS = [
    { key: 'P', name: 'Placidus' }, { key: 'K', name: 'Koch' }, { key: 'W', name: 'Whole Sign' },
    { key: 'E', name: 'Equal' }, { key: 'O', name: 'Porphyry' }, { key: 'R', name: 'Regiomontanus' },
    { key: 'C', name: 'Campanus' }, { key: 'T', name: 'Topocentric' }
  ];

  /* Ayanamsa values at J2000.0 (degrees), carried forward with IAU 2006 general precession */
  var AYANAMSAS = [
    { key: 'lahiri', name: 'Lahiri (Chitrapaksha)', j2000: 23.857092 },
    { key: 'fagan', name: 'Fagan-Bradley', j2000: 24.740300 },
    { key: 'raman', name: 'Raman', j2000: 22.410791 },
    { key: 'krishnamurti', name: 'Krishnamurti (KP)', j2000: 23.760240 }
  ];

  var ASPECTS = [
    { key: 'conj', name: 'Conjunction', angle: 0, major: true, nature: 'neutral', orb: 8 },
    { key: 'opp', name: 'Opposition', angle: 180, major: true, nature: 'hard', orb: 8 },
    { key: 'tri', name: 'Trine', angle: 120, major: true, nature: 'soft', orb: 7 },
    { key: 'sq', name: 'Square', angle: 90, major: true, nature: 'hard', orb: 7 },
    { key: 'sex', name: 'Sextile', angle: 60, major: true, nature: 'soft', orb: 5 },
    { key: 'qx', name: 'Quincunx', angle: 150, major: false, nature: 'minor', orb: 3 },
    { key: 'ssq', name: 'Sesquiquadrate', angle: 135, major: false, nature: 'hard', orb: 2 },
    { key: 'semsq', name: 'Semisquare', angle: 45, major: false, nature: 'hard', orb: 2 },
    { key: 'ssx', name: 'Semisextile', angle: 30, major: false, nature: 'minor', orb: 2 },
    { key: 'qnt', name: 'Quintile', angle: 72, major: false, nature: 'minor', orb: 2 },
    { key: 'bqnt', name: 'Biquintile', angle: 144, major: false, nature: 'minor', orb: 2 }
  ];

  /* ---------- time ---------- */
  function jdFromDate(d) { return d.getTime() / 86400000 + 2440587.5; }
  function astroTime(ms) { return A().MakeTime(new Date(ms)); }
  function centuriesTT(t) { return t.tt / 36525; }

  /* Offset (minutes east of UTC) of an IANA zone at a UTC instant, using the browser time zone database */
  var fmtCache = {};
  function zoneOffsetMin(zone, ms) {
    var f = fmtCache[zone];
    if (!f) {
      f = new Intl.DateTimeFormat('en-US', { timeZone: zone, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
      fmtCache[zone] = f;
    }
    var parts = f.formatToParts(new Date(ms)), o = {}, i;
    for (i = 0; i < parts.length; i++) { o[parts[i].type] = parts[i].value; }
    var y = parseInt(o.year, 10);
    var asUTC = Date.UTC(y, parseInt(o.month, 10) - 1, parseInt(o.day, 10), parseInt(o.hour, 10) % 24, parseInt(o.minute, 10), parseInt(o.second, 10));
    if (y < 100) { var dd = new Date(asUTC); dd.setUTCFullYear(y); asUTC = dd.getTime(); }
    return Math.round((asUTC - Math.floor(ms / 1000) * 1000) / 60000);
  }

  function wallUTC(y, mo, d, h, mi) {
    var dt = new Date(Date.UTC(2000, mo - 1, d, h, mi));
    dt.setUTCFullYear(y);
    return dt.getTime();
  }

  /* Local wall time + zone -> UTC ms. Returns {ms, offsetMin, ambiguous, skipped} */
  function localToUTC(y, mo, d, h, mi, zone, manualOffsetMin) {
    var wall = wallUTC(y, mo, d, h, mi);
    if (typeof manualOffsetMin === 'number' && !isNaN(manualOffsetMin)) {
      return { ms: wall - manualOffsetMin * 60000, offsetMin: manualOffsetMin, ambiguous: false, skipped: false, manual: true };
    }
    var off1 = zoneOffsetMin(zone, wall - 12 * 3600000), off2 = zoneOffsetMin(zone, wall + 12 * 3600000);
    var c1 = wall - off1 * 60000, c2 = wall - off2 * 60000;
    var ok1 = zoneOffsetMin(zone, c1) === off1, ok2 = zoneOffsetMin(zone, c2) === off2;
    if (ok1 && ok2 && off1 !== off2) { return { ms: c1, offsetMin: off1, ambiguous: true, skipped: false, alt: { ms: c2, offsetMin: off2 } }; }
    if (ok1) { return { ms: c1, offsetMin: off1, ambiguous: false, skipped: false }; }
    if (ok2) { return { ms: c2, offsetMin: off2, ambiguous: false, skipped: false }; }
    var off = zoneOffsetMin(zone, wall);
    return { ms: wall - off * 60000, offsetMin: off, ambiguous: false, skipped: true };
  }

  /* ---------- positions ---------- */
  function obliquity(t) { return A().e_tilt(t).tobl; }

  function bodyLon(key, t) {
    var Ast = A();
    var v = Ast.GeoVector(Ast.Body[key], t, true);
    return Ast.Ecliptic(v).elon;
  }

  function trueNode(t) {
    var Ast = A();
    var s = Ast.GeoMoonState(t);
    var rot = Ast.Rotation_EQJ_ECT(t);
    var r = Ast.RotateVector(rot, new Ast.Vector(s.x, s.y, s.z, t));
    var v = Ast.RotateVector(rot, new Ast.Vector(s.vx, s.vy, s.vz, t));
    var hx = r.y * v.z - r.z * v.y, hy = r.z * v.x - r.x * v.z;
    return norm(atan2d(hx, -hy));
  }

  function meanNode(t) {
    var T = centuriesTT(t);
    return norm(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + T * T * T / 467441 - T * T * T * T / 60616000);
  }

  function meanLilith(t) {
    var T = centuriesTT(t);
    var apo = norm(83.3532465 + 4069.0137287 * T - 0.0103200 * T * T - T * T * T / 80053 + T * T * T * T / 18999000 + 180);
    /* project the apogee from the lunar orbit plane onto the ecliptic */
    var node = meanNode(t), u = apo - node, inc = 5.1453964;
    return norm(node + atan2d(cosd(inc) * sind(u), cosd(u)));
  }

  /* Chiron: optional table hook root.CDS_CHIRON = {start: jd, step: days, lon: [...]} */
  function chironLon(t) {
    var tb = root.CDS_CHIRON;
    if (!tb) { return null; }
    var jd = t.ut + 2451545.0;
    var x = (jd - tb.start) / tb.step, i = Math.floor(x);
    if (i < 1 || i > tb.lon.length - 3) { return null; }
    var f = x - i, p0 = tb.lon[i - 1], p1 = tb.lon[i], p2 = tb.lon[i + 1], p3 = tb.lon[i + 2];
    p0 = p1 + diff(p0, p1); p2 = p1 + diff(p2, p1); p3 = p2 + diff(p3, p2);
    var v = p1 + 0.5 * f * (p2 - p0 + f * (2 * p0 - 5 * p1 + 4 * p2 - p3 + f * (3 * (p1 - p2) + p3 - p0)));
    return norm(v);
  }

  function ayanamsa(key, t) {
    var a = null, i;
    for (i = 0; i < AYANAMSAS.length; i++) { if (AYANAMSAS[i].key === key) { a = AYANAMSAS[i]; } }
    if (!a) { return 0; }
    var T = centuriesTT(t);
    var p = (5028.796195 * T + 1.1054348 * T * T + 0.00007964 * T * T * T) / 3600;
    return a.j2000 + p;
  }

  /* ---------- angles and houses ---------- */
  function eclFromOA(oa, tanP, eps) {
    return norm(atan2d(sind(oa), cosd(oa) * cosd(eps) - tanP * sind(eps)));
  }
  function ascFromRAMC(ramc, lat, eps) { return eclFromOA(ramc + 90, tand(lat), eps); }
  function mcFromRAMC(ramc, eps) { return norm(atan2d(sind(ramc), cosd(ramc) * cosd(eps))); }
  function ramcFromMC(mc, eps) { return norm(atan2d(sind(mc) * cosd(eps), cosd(mc))); }
  function decl(lon, eps) { return asind(sind(eps) * sind(lon)); }

  function fixAboveHorizon(asc, x) {
    /* keep intermediate cusps in the correct half of the chart */
    return x;
  }

  function placidusCusp(ramc, lat, eps, frac, below) {
    var lon = norm(ramc + (below ? 180 - 90 * frac * 2 / 2 : 0)), i, ra = 0, ad;
    var base = below ? 180 : 0;
    lon = mcFromRAMC(ramc + (below ? (frac === 1 / 3 ? 150 : 120) : (frac === 1 / 3 ? 30 : 60)), eps);
    for (i = 0; i < 60; i++) {
      var dcl = decl(lon, eps);
      var x = tand(lat) * tand(dcl);
      if (Math.abs(x) > 1) { return null; }
      ad = asind(x);
      if (!below) { ra = ramc + frac * (90 + ad); }
      else { ra = ramc + 180 - frac * (90 - ad); }
      var nl = mcFromRAMC(ra, eps);
      if (Math.abs(diff(nl, lon)) < 1e-9) { lon = nl; break; }
      lon = nl;
    }
    return lon;
  }

  function houses(sys, ramc, lat, eps) {
    var mc = mcFromRAMC(ramc, eps), asc = ascFromRAMC(ramc, lat, eps);
    var c = new Array(13), i, note = null, used = sys;
    var tp = tand(lat);
    function opp() { c[4] = norm(c[10] + 180); c[5] = norm(c[11] + 180); c[6] = norm(c[12] + 180); c[7] = norm(c[1] + 180); c[8] = norm(c[2] + 180); c[9] = norm(c[3] + 180); }
    function porphyry() {
      var q1 = norm(asc - mc), q2 = norm(mc + 180 - asc);
      /* q1: arc from MC to ASC (houses 10-12), q2: arc from ASC to IC (houses 1-3) */
      c[1] = asc; c[10] = mc; c[4] = norm(mc + 180);
      c[11] = norm(mc + q1 / 3); c[12] = norm(mc + 2 * q1 / 3);
      c[2] = norm(asc + q2 / 3); c[3] = norm(asc + 2 * q2 / 3);
      c[7] = norm(asc + 180); c[5] = norm(c[11] + 180); c[6] = norm(c[12] + 180);
      c[8] = norm(c[2] + 180); c[9] = norm(c[3] + 180);
    }
    if (sys === 'W') {
      var s0 = Math.floor(asc / 30) * 30;
      for (i = 1; i <= 12; i++) { c[i] = norm(s0 + (i - 1) * 30); }
    } else if (sys === 'E') {
      for (i = 1; i <= 12; i++) { c[i] = norm(asc + (i - 1) * 30); }
    } else if (sys === 'O') {
      porphyry();
    } else if (sys === 'R' || sys === 'T') {
      var f1 = sys === 'R' ? sind(30) : 1 / 3, f2 = sys === 'R' ? sind(60) : 2 / 3;
      c[1] = asc; c[10] = mc;
      c[11] = eclFromOA(ramc + 30, tp * f1, eps);
      c[12] = eclFromOA(ramc + 60, tp * f2, eps);
      c[2] = eclFromOA(ramc + 120, tp * f2, eps);
      c[3] = eclFromOA(ramc + 150, tp * f1, eps);
      c[4] = norm(mc + 180); opp();
    } else if (sys === 'C') {
      c[1] = asc; c[10] = mc;
      var offs = { 11: 30, 12: 60, 2: 120, 3: 150 }, k;
      for (k in offs) {
        if (offs.hasOwnProperty(k)) {
          var h = offs[k];
          var H = atan2d(sind(h) * cosd(lat), cosd(h));
          /* pole of the house circle */
          var tanPole = tand(lat) * sind(h) / Math.sqrt(1 - Math.pow(cosd(lat) * sind(h), 2)) * 1;
          var sinP = sind(lat) * sind(h);
          var P = asind(sinP);
          c[k] = eclFromOA(ramc + H, tand(P), eps);
        }
      }
      c[4] = norm(mc + 180); opp();
    } else if (sys === 'P') {
      var a11 = placidusCusp(ramc, lat, eps, 1 / 3, false), a12 = placidusCusp(ramc, lat, eps, 2 / 3, false);
      var a2 = placidusCusp(ramc, lat, eps, 2 / 3, true), a3 = placidusCusp(ramc, lat, eps, 1 / 3, true);
      if (a11 === null || a12 === null || a2 === null || a3 === null) { porphyry(); used = 'O'; note = 'Placidus cannot be drawn at this latitude, so Porphyry is shown.'; }
      else { c[1] = asc; c[10] = mc; c[11] = a11; c[12] = a12; c[2] = a2; c[3] = a3; c[4] = norm(mc + 180); opp(); }
    } else if (sys === 'K') {
      var dmc = decl(mc, eps), xx = tp * tand(dmc);
      if (Math.abs(xx) > 1 || Math.abs(lat) > 66) { porphyry(); used = 'O'; note = 'Koch cannot be drawn at this latitude, so Porphyry is shown.'; }
      else {
        var dsa = 90 + asind(xx);
        c[1] = asc; c[10] = mc;
        c[11] = ascFromRAMC(ramc - 2 * dsa / 3, lat, eps);
        c[12] = ascFromRAMC(ramc - dsa / 3, lat, eps);
        c[2] = ascFromRAMC(ramc + dsa / 3, lat, eps);
        c[3] = ascFromRAMC(ramc + 2 * dsa / 3, lat, eps);
        c[4] = norm(mc + 180); opp();
      }
    }
    return { cusps: c, asc: asc, mc: mc, system: used, note: note };
  }

  function vertex(ramc, lat, eps) {
    if (Math.abs(lat) < 1e-6) { lat = 1e-6; }
    return eclFromOA(ramc - 90, tand(90 - lat), eps);
  }

  /* ---------- chart ---------- */
  function signOf(lon) { return Math.floor(norm(lon) / 30); }
  function fmtDeg(lon) {
    var l = norm(lon), s = Math.floor(l / 30), within = l - s * 30;
    var dg = Math.floor(within), mn = Math.floor((within - dg) * 60 + 1e-7);
    if (mn === 60) { mn = 0; dg += 1; }
    return { sign: s, deg: dg, min: mn, signName: SIGNS[s], text: dg + '°' + (mn < 10 ? '0' : '') + mn + '′ ' + SIGNS[s] };
  }

  function houseOf(lon, cusps) {
    var i;
    for (i = 1; i <= 12; i++) {
      var a = cusps[i], b = cusps[i === 12 ? 1 : i + 1];
      var span = norm(b - a), x = norm(lon - a);
      if (x < span) { return i; }
    }
    return 1;
  }

  /* opts: {ms, lat, lon, houseSystem, zodiac:'tropical'|'sidereal', ayanamsa, nodeType:'true'|'mean'} */
  function calcChart(opts) {
    var t = astroTime(opts.ms);
    var eps = obliquity(t);
    var gst = A().SiderealTime(t);
    var ramc = norm(gst * 15 + opts.lon);
    var hs = houses(opts.houseSystem || 'P', ramc, opts.lat, eps);
    var ay = opts.zodiac === 'sidereal' ? ayanamsa(opts.ayanamsa || 'lahiri', t) : 0;
    var pts = {}, i, key, lonv, sp;
    var tA = astroTime(opts.ms - 43200000), tB = astroTime(opts.ms + 43200000);
    var planets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
    for (i = 0; i < planets.length; i++) {
      key = planets[i];
      lonv = bodyLon(key, t);
      sp = diff(bodyLon(key, tB), bodyLon(key, tA));
      pts[key] = { lon: lonv, speed: sp };
    }
    var nn = opts.nodeType === 'mean' ? meanNode(t) : trueNode(t);
    var nnA = opts.nodeType === 'mean' ? meanNode(tA) : trueNode(tA), nnB = opts.nodeType === 'mean' ? meanNode(tB) : trueNode(tB);
    pts.NNode = { lon: nn, speed: diff(nnB, nnA) };
    pts.SNode = { lon: norm(nn + 180), speed: pts.NNode.speed };
    pts.Lilith = { lon: meanLilith(t), speed: 0.111 };
    var ch = chironLon(t);
    if (ch !== null) { var chA = chironLon(tA), chB = chironLon(tB); pts.Chiron = { lon: ch, speed: (chA !== null && chB !== null) ? diff(chB, chA) : 0.02 }; }
    var sunAbove = norm(pts.Sun.lon - hs.asc) > 180; /* sun in houses 7-12 */
    var dayChart = sunAbove;
    pts.Fortune = { lon: dayChart ? norm(hs.asc + pts.Moon.lon - pts.Sun.lon) : norm(hs.asc + pts.Sun.lon - pts.Moon.lon), speed: 0 };
    pts.Vertex = { lon: vertex(ramc, opts.lat, eps), speed: 0 };
    pts.ASC = { lon: hs.asc, speed: 0 };
    pts.MC = { lon: hs.mc, speed: 0 };
    pts.DSC = { lon: norm(hs.asc + 180), speed: 0 };
    pts.IC = { lon: norm(hs.mc + 180), speed: 0 };
    var cusps = hs.cusps.slice();
    if (ay) {
      for (key in pts) { if (pts.hasOwnProperty(key)) { pts[key].lon = norm(pts[key].lon - ay); } }
      for (i = 1; i <= 12; i++) { cusps[i] = norm(cusps[i] - ay); }
      if (hs.system === 'W') {
        var s0 = Math.floor(pts.ASC.lon / 30) * 30;
        for (i = 1; i <= 12; i++) { cusps[i] = norm(s0 + (i - 1) * 30); }
      }
    }
    for (key in pts) {
      if (pts.hasOwnProperty(key)) {
        pts[key].house = houseOf(pts[key].lon, cusps);
        pts[key].retro = pts[key].speed < 0 && ['Sun', 'Moon', 'ASC', 'MC', 'DSC', 'IC', 'Fortune', 'Vertex', 'Lilith'].indexOf(key) < 0;
      }
    }
    return {
      ms: opts.ms, lat: opts.lat, lon: opts.lon, ramc: ramc, eps: eps, jd: t.ut + 2451545.0,
      points: pts, cusps: cusps, houseSystem: hs.system, requestedHouseSystem: opts.houseSystem || 'P', houseNote: hs.note,
      ayanamsa: ay, zodiac: opts.zodiac || 'tropical', dayChart: dayChart, hasHouses: opts.noHouses ? false : true
    };
  }

  /* ---------- derived charts ---------- */
  var YEAR = 365.2421897;

  function progressed(natal, targetMs, opts) {
    var ageDays = (targetMs - natal.ms) / 86400000;
    var progMs = natal.ms + (ageDays / YEAR) * 86400000;
    var c = calcChart(copy(opts, { ms: progMs }));
    /* progressed angles by solar arc on the MC */
    var arc = diff(c.points.Sun.lon, natal.points.Sun.lon);
    var mcTrop = norm(natal.points.MC.lon + natal.ayanamsa + arc);
    var ramc = ramcFromMC(mcTrop, natal.eps);
    var hs = houses(opts.houseSystem || 'P', ramc, natal.lat, natal.eps);
    var ay = c.ayanamsa, i, k;
    c.cusps = hs.cusps.slice();
    for (i = 1; i <= 12; i++) { c.cusps[i] = norm(c.cusps[i] - ay); }
    c.points.ASC.lon = norm(hs.asc - ay); c.points.MC.lon = norm(hs.mc - ay);
    c.points.DSC.lon = norm(c.points.ASC.lon + 180); c.points.IC.lon = norm(c.points.MC.lon + 180);
    for (k in c.points) { if (c.points.hasOwnProperty(k)) { c.points[k].house = houseOf(c.points[k].lon, natal.cusps); } }
    c.progressedDateMs = progMs; c.arc = arc;
    return c;
  }

  function solarArc(natal, targetMs, opts) {
    var ageDays = (targetMs - natal.ms) / 86400000;
    var progMs = natal.ms + (ageDays / YEAR) * 86400000;
    var t = astroTime(progMs);
    var ay = natal.ayanamsa ? ayanamsa(opts.ayanamsa || 'lahiri', t) : 0;
    var arc = diff(norm(bodyLon('Sun', t) - ay), natal.points.Sun.lon);
    var c = cloneChart(natal), k, i;
    for (k in c.points) { if (c.points.hasOwnProperty(k)) { c.points[k].lon = norm(c.points[k].lon + arc); c.points[k].speed = 0; c.points[k].retro = false; c.points[k].house = houseOf(c.points[k].lon, natal.cusps); } }
    for (i = 1; i <= 12; i++) { c.cusps[i] = norm(c.cusps[i] + arc); }
    c.arc = arc; c.ms = targetMs;
    return c;
  }

  function composite(a, b, opts) {
    var c = cloneChart(a), k, i;
    for (k in c.points) {
      if (c.points.hasOwnProperty(k) && b.points[k]) {
        c.points[k].lon = mid(a.points[k].lon, b.points[k].lon); c.points[k].speed = 0; c.points[k].retro = false;
      }
    }
    var mc = mid(a.points.MC.lon, b.points.MC.lon);
    var eps = (a.eps + b.eps) / 2, lat = (a.lat + b.lat) / 2;
    var ay = a.ayanamsa;
    var ramc = ramcFromMC(norm(mc + ay), eps);
    var hs = houses(opts.houseSystem || 'P', ramc, lat, eps);
    c.cusps = hs.cusps.slice();
    for (i = 1; i <= 12; i++) { c.cusps[i] = norm(c.cusps[i] - ay); }
    c.points.MC.lon = norm(hs.mc - ay); c.points.ASC.lon = norm(hs.asc - ay);
    c.points.DSC.lon = norm(c.points.ASC.lon + 180); c.points.IC.lon = norm(c.points.MC.lon + 180);
    for (k in c.points) { if (c.points.hasOwnProperty(k)) { c.points[k].house = houseOf(c.points[k].lon, c.cusps); } }
    c.houseSystem = hs.system; c.houseNote = hs.note;
    return c;
  }

  function davison(a, b, opts) {
    var ms = (a.ms + b.ms) / 2;
    var lat = (a.lat + b.lat) / 2;
    var lon = mid(a.lon + 180, b.lon + 180) - 180;
    if (lon <= -180) { lon += 360; }
    return calcChart(copy(opts, { ms: ms, lat: lat, lon: lon }));
  }

  function solarReturn(natal, year, opts) {
    var Ast = A();
    var trop = norm(natal.points.Sun.lon + natal.ayanamsa);
    var nd = new Date(natal.ms);
    var start = new Date(Date.UTC(2000, nd.getUTCMonth(), nd.getUTCDate()) - 5 * 86400000);
    start.setUTCFullYear(year);
    if (nd.getUTCMonth() === 0 && nd.getUTCDate() < 6) { start.setUTCFullYear(year - 1); }
    var found = Ast.SearchSunLongitude(trop, start, 12);
    if (!found) { return null; }
    var ms = found.date.getTime();
    /* refine to the sidereal Sun if needed */
    if (natal.ayanamsa) {
      var i;
      for (i = 0; i < 4; i++) {
        var t = astroTime(ms);
        var cur = norm(bodyLon('Sun', t) - ayanamsa(opts.ayanamsa || 'lahiri', t));
        ms += diff(natal.points.Sun.lon, cur) / 0.98565 * 86400000;
      }
    }
    return calcChart(copy(opts, { ms: ms }));
  }

  function moonLonAt(ms, opts, siderealKey) {
    var t = astroTime(ms), l = bodyLon('Moon', t);
    if (siderealKey) { l = norm(l - ayanamsa(siderealKey, t)); }
    return l;
  }

  function lunarReturn(natal, afterMs, opts) {
    var target = natal.points.Moon.lon, sk = natal.ayanamsa ? (opts.ayanamsa || 'lahiri') : null;
    var ms = afterMs, step = 0.5 * 86400000, prev = diff(moonLonAt(ms, opts, sk), target), i, cur;
    for (i = 0; i < 80; i++) {
      cur = diff(moonLonAt(ms + step, opts, sk), target);
      if (prev < 0 && cur >= 0 && Math.abs(cur - prev) < 90) { break; }
      prev = cur; ms += step;
    }
    var lo = ms, hi = ms + step;
    for (i = 0; i < 50; i++) {
      var m = (lo + hi) / 2;
      if (diff(moonLonAt(m, opts, sk), target) < 0) { lo = m; } else { hi = m; }
    }
    return calcChart(copy(opts, { ms: (lo + hi) / 2 }));
  }

  /* ---------- aspects ---------- */
  function aspectOrb(asp, k1, k2, scale) {
    var o = asp.orb;
    if (asp.major && (k1 === 'Sun' || k1 === 'Moon' || k2 === 'Sun' || k2 === 'Moon')) { o += 2; }
    if (['NNode', 'SNode', 'Lilith', 'Fortune', 'Vertex', 'Chiron'].indexOf(k1) >= 0 || ['NNode', 'SNode', 'Lilith', 'Fortune', 'Vertex', 'Chiron'].indexOf(k2) >= 0) { o = Math.min(o, asp.major ? 4 : 1.5); }
    return o * (scale || 1);
  }

  function findAspects(pA, pB, keysA, keysB, settings) {
    var out = [], i, j, n, same = pA === pB;
    var allowed = settings.aspects, scale = settings.orbScale || 1;
    for (i = 0; i < keysA.length; i++) {
      for (j = same ? i + 1 : 0; j < keysB.length; j++) {
        var k1 = keysA[i], k2 = keysB[j];
        if (!pA[k1] || !pB[k2]) { continue; }
        if (same && ((k1 === 'NNode' && k2 === 'SNode') || (k1 === 'SNode' && k2 === 'NNode') || (k1 === 'ASC' && k2 === 'DSC') || (k1 === 'MC' && k2 === 'IC'))) { continue; }
        var sep = Math.abs(diff(pA[k1].lon, pB[k2].lon));
        for (n = 0; n < ASPECTS.length; n++) {
          var asp = ASPECTS[n];
          if (allowed.indexOf(asp.key) < 0) { continue; }
          var orb = Math.abs(sep - asp.angle), lim = aspectOrb(asp, k1, k2, scale);
          if (orb <= lim) {
            var applying = null;
            var s1 = pA[k1].speed || 0, s2 = pB[k2].speed || 0;
            if (s1 || s2) {
              var dt = 0.01, sepNext = Math.abs(diff(pA[k1].lon + s1 * dt, pB[k2].lon + s2 * dt));
              applying = Math.abs(sepNext - asp.angle) < orb;
            }
            out.push({ a: k1, b: k2, type: asp.key, name: asp.name, angle: asp.angle, nature: asp.nature, orb: orb, applying: applying });
            break;
          }
        }
      }
    }
    out.sort(function (x, y) { return x.orb - y.orb; });
    return out;
  }

  /* ---------- helpers ---------- */
  function copy(o, extra) { var r = {}, k; for (k in o) { if (o.hasOwnProperty(k)) { r[k] = o[k]; } } for (k in extra) { if (extra.hasOwnProperty(k)) { r[k] = extra[k]; } } return r; }
  function cloneChart(c) { return JSON.parse(JSON.stringify(c)); }

  root.CDS_ENGINE = {
    SIGNS: SIGNS, ELEMENTS: ELEMENTS, POINTS: POINTS, HOUSE_SYSTEMS: HOUSE_SYSTEMS, AYANAMSAS: AYANAMSAS, ASPECTS: ASPECTS,
    norm: norm, diff: diff, mid: mid, fmtDeg: fmtDeg, signOf: signOf, houseOf: houseOf,
    localToUTC: localToUTC, zoneOffsetMin: zoneOffsetMin, calcChart: calcChart, progressed: progressed, solarArc: solarArc,
    composite: composite, davison: davison, solarReturn: solarReturn, lunarReturn: lunarReturn, findAspects: findAspects,
    houses: houses, ascFromRAMC: ascFromRAMC, mcFromRAMC: mcFromRAMC, ayanamsa: ayanamsa, YEAR: YEAR, copy: copy
  };
})(typeof window !== 'undefined' ? window : globalThis);

/* Chart Design Station renderer (cds) | ES5 | builds SVG strings for wheels and aspect grids */
(function (root) {
  'use strict';
  var E = root.CDS_ENGINE, G = function () { return root.CDS_GLYPHS || {}; };
  var D2R = Math.PI / 180;

  var THEMES = {
    astrolabe: {
      name: 'Astrolabe', bg: '#F4EFE4', ink: '#16302A', soft: '#6B6150', rule: '#B9A780', ruleSoft: '#D9CCAE',
      bandFill: { fire: 'rgba(164,85,43,0.16)', earth: 'rgba(47,93,70,0.15)', air: 'rgba(78,63,122,0.14)', water: 'rgba(14,96,88,0.15)' },
      signInk: { fire: '#A4552B', earth: '#2F5D46', air: '#4E3F7A', water: '#0E6058' },
      group: { light: '#8C6A2B', personal: '#4E3F7A', social: '#2F5D46', outer: '#0E6058', point: '#5B4A3A', angle: '#16302A' },
      outerGroup: { light: '#A4552B', personal: '#A4552B', social: '#A4552B', outer: '#A4552B', point: '#A4552B', angle: '#A4552B' },
      asp: { hard: '#A4552B', soft: '#0E6058', minor: '#4E3F7A', neutral: '#8C6A2B' },
      dash: { hard: '', soft: '', minor: '5 4', neutral: '' },
      head: "'Cinzel', 'Trajan Pro', Georgia, serif", num: "'EB Garamond', Garamond, Georgia, serif",
      compass: true, arrows: true, centerFill: 'rgba(255,252,244,0.75)', planetsFill: 'rgba(255,252,244,0.35)', lineW: 1
    },
    classic: {
      name: 'Classic', bg: '#FFFFFF', ink: '#222222', soft: '#6A6A6A', rule: '#9A9A9A', ruleSoft: '#D4D4D4',
      bandFill: { fire: '#FBE4DF', earth: '#E2F0DE', air: '#FFF3D6', water: '#DCEAF8' },
      signInk: { fire: '#C8322A', earth: '#2E7D32', air: '#B07800', water: '#1E63B5' },
      group: { light: '#C77700', personal: '#7A3EA0', social: '#2E7D32', outer: '#1E63B5', point: '#555555', angle: '#222222' },
      outerGroup: { light: '#B23A2E', personal: '#B23A2E', social: '#B23A2E', outer: '#B23A2E', point: '#B23A2E', angle: '#B23A2E' },
      asp: { hard: '#D0342C', soft: '#2B63C6', minor: '#3A9B48', neutral: '#C77700' },
      dash: { hard: '', soft: '', minor: '4 3', neutral: '' },
      head: "Arial, 'Helvetica Neue', Helvetica, sans-serif", num: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
      compass: false, arrows: false, centerFill: '#FFFFFF', planetsFill: '#FFFFFF', lineW: 1
    },
    modern: {
      name: 'Modern', bg: '#FAFAF7', ink: '#1C1C1E', soft: '#77777A', rule: '#BDBDBB', ruleSoft: '#E2E2DE',
      bandFill: { fire: 'rgba(0,0,0,0)', earth: 'rgba(0,0,0,0)', air: 'rgba(0,0,0,0)', water: 'rgba(0,0,0,0)' },
      signInk: { fire: '#1C1C1E', earth: '#1C1C1E', air: '#1C1C1E', water: '#1C1C1E' },
      dot: { fire: '#C2643A', earth: '#4F7A5A', air: '#6E5FA6', water: '#2E8A80' },
      group: { light: '#1C1C1E', personal: '#1C1C1E', social: '#1C1C1E', outer: '#1C1C1E', point: '#55555A', angle: '#1C1C1E' },
      outerGroup: { light: '#0E6058', personal: '#0E6058', social: '#0E6058', outer: '#0E6058', point: '#0E6058', angle: '#0E6058' },
      asp: { hard: '#1C1C1E', soft: '#2E8A80', minor: '#9A9A9E', neutral: '#6E5FA6' },
      dash: { hard: '', soft: '', minor: '3 4', neutral: '' },
      head: "'Jost', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif", num: "'Jost', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif",
      compass: false, arrows: false, centerFill: 'rgba(0,0,0,0)', planetsFill: 'rgba(0,0,0,0)', lineW: 0.8, thin: true
    },
    print: {
      name: 'Print', bg: '#FFFFFF', ink: '#000000', soft: '#333333', rule: '#000000', ruleSoft: '#8A8A8A',
      bandFill: { fire: '#FFFFFF', earth: '#FFFFFF', air: '#FFFFFF', water: '#FFFFFF' },
      signInk: { fire: '#000000', earth: '#000000', air: '#000000', water: '#000000' },
      group: { light: '#000000', personal: '#000000', social: '#000000', outer: '#000000', point: '#000000', angle: '#000000' },
      outerGroup: { light: '#000000', personal: '#000000', social: '#000000', outer: '#000000', point: '#000000', angle: '#000000' },
      asp: { hard: '#000000', soft: '#000000', minor: '#000000', neutral: '#000000' },
      dash: { hard: '', soft: '7 4', minor: '1.5 3.5', neutral: '' },
      head: "'EB Garamond', Garamond, Georgia, serif", num: "'EB Garamond', Garamond, Georgia, serif",
      compass: false, arrows: true, centerFill: '#FFFFFF', planetsFill: '#FFFFFF', lineW: 1.25
    }
  };

  var GROUP_OF = { Sun: 'light', Moon: 'light', Mercury: 'personal', Venus: 'personal', Mars: 'personal', Jupiter: 'social', Saturn: 'social', Uranus: 'outer', Neptune: 'outer', Pluto: 'outer', Chiron: 'point', NNode: 'point', SNode: 'point', Lilith: 'point', Fortune: 'point', Vertex: 'point', ASC: 'angle', MC: 'angle', DSC: 'angle', IC: 'angle' };
  var LABEL = { ASC: 'AC', MC: 'MC', DSC: 'DC', IC: 'IC', Vertex: 'Vx' };
  var SIGN_KEYS = E.SIGNS;
  var ELEM = ['fire', 'earth', 'air', 'water'];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
  function f1(x) { return Math.round(x * 10) / 10; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  /* glyph as filled path, centered at x,y, size in px */
  function glyph(key, x, y, size, color, extra) {
    if (LABEL[key]) {
      return '<text x="' + f1(x) + '" y="' + f1(y) + '" font-size="' + f1(size * 0.62) + '" text-anchor="middle" dominant-baseline="central" fill="' + color + '" font-weight="600"' + (extra || '') + '>' + LABEL[key] + '</text>';
    }
    var d = G()[key];
    if (!d) { return ''; }
    var s = size / 100;
    return '<path transform="translate(' + f1(x) + ' ' + f1(y) + ') scale(' + (Math.round(s * 10000) / 10000) + ')" d="' + d + '" fill="' + color + '"' + (extra || '') + '/>';
  }

  function polar(cx, cy, r, a) { return { x: cx + r * Math.cos(a * D2R), y: cy - r * Math.sin(a * D2R) }; }

  /* spread labels so they do not collide; items: [{lon}] -> sets .disp */
  function spread(items) {
    var n = items.length, i, it, tot = 0;
    if (!n) { return; }
    items.sort(function (a, b) { return a.lon - b.lon; });
    for (i = 0; i < n; i++) { tot += 2 * items[i].halfA; }
    var shrink = tot > 350 ? 350 / tot : 1;
    /* start the sequence after the widest empty gap so the order can be unwrapped */
    var best = -1, at = 0;
    for (i = 0; i < n; i++) { var g = E.norm(items[(i + 1) % n].lon - items[i].lon); if (n === 1) { g = 360; } if (g > best) { best = g; at = (i + 1) % n; } }
    var seq = [], base = items[at].lon;
    for (i = 0; i < n; i++) { var itm = items[(at + i) % n]; itm.x = base + E.norm(itm.lon - base); seq.push(itm); }
    for (it = 0; it < 600; it++) {
      var moved = false;
      for (i = 0; i < n - 1; i++) {
        var need = (seq[i].halfA + seq[i + 1].halfA) * shrink, gap = seq[i + 1].x - seq[i].x;
        if (gap < need - 0.01) { var push = (need - gap) / 2; seq[i].x -= push; seq[i + 1].x += push; moved = true; }
      }
      if (n > 1) {
        var needW = (seq[n - 1].halfA + seq[0].halfA) * shrink, gapW = seq[0].x + 360 - seq[n - 1].x;
        if (gapW < needW - 0.01) { var pw = (needW - gapW) / 2; seq[n - 1].x -= pw; seq[0].x += pw; moved = true; }
      }
      if (!moved) { break; }
    }
    for (i = 0; i < n; i++) { seq[i].disp = E.norm(seq[i].x); }
  }

  function aspectSymbol(type, x, y, s, color) {
    var w = Math.max(1, s * 0.09), o = '', h = s / 2;
    var st = ' fill="none" stroke="' + color + '" stroke-width="' + f1(w) + '" stroke-linecap="round" stroke-linejoin="round"';
    function L(x1, y1, x2, y2) { return '<line x1="' + f1(x1) + '" y1="' + f1(y1) + '" x2="' + f1(x2) + '" y2="' + f1(y2) + '"' + st + '/>'; }
    function T(t) { return '<text x="' + f1(x) + '" y="' + f1(y) + '" font-size="' + f1(s * 0.55) + '" text-anchor="middle" dominant-baseline="central" fill="' + color + '" font-weight="600">' + t + '</text>'; }
    if (type === 'conj') { o += '<circle cx="' + f1(x - s * 0.1) + '" cy="' + f1(y + s * 0.12) + '" r="' + f1(s * 0.2) + '"' + st + '/>' + L(x + s * 0.04, y - s * 0.03, x + s * 0.3, y - s * 0.32); }
    else if (type === 'opp') { o += '<circle cx="' + f1(x - s * 0.22) + '" cy="' + f1(y + s * 0.22) + '" r="' + f1(s * 0.13) + '"' + st + '/><circle cx="' + f1(x + s * 0.22) + '" cy="' + f1(y - s * 0.22) + '" r="' + f1(s * 0.13) + '"' + st + '/>' + L(x - s * 0.12, y + s * 0.12, x + s * 0.12, y - s * 0.12); }
    else if (type === 'tri') { o += '<path d="M' + f1(x) + ' ' + f1(y - h * 0.78) + 'L' + f1(x + h * 0.78) + ' ' + f1(y + h * 0.55) + 'L' + f1(x - h * 0.78) + ' ' + f1(y + h * 0.55) + 'Z"' + st + '/>'; }
    else if (type === 'sq') { o += '<rect x="' + f1(x - h * 0.62) + '" y="' + f1(y - h * 0.62) + '" width="' + f1(h * 1.24) + '" height="' + f1(h * 1.24) + '"' + st + '/>'; }
    else if (type === 'sex') { o += L(x - h * 0.75, y, x + h * 0.75, y) + L(x - h * 0.38, y - h * 0.65, x + h * 0.38, y + h * 0.65) + L(x - h * 0.38, y + h * 0.65, x + h * 0.38, y - h * 0.65); }
    else if (type === 'qx') { o += L(x - h * 0.6, y + h * 0.65, x + h * 0.6, y + h * 0.65) + L(x - h * 0.55, y + h * 0.65, x, y - h * 0.7) + L(x + h * 0.55, y + h * 0.65, x, y - h * 0.7); }
    else if (type === 'ssx') { o += L(x - h * 0.6, y - h * 0.65, x + h * 0.6, y - h * 0.65) + L(x - h * 0.55, y - h * 0.65, x, y + h * 0.7) + L(x + h * 0.55, y - h * 0.65, x, y + h * 0.7); }
    else if (type === 'semsq') { o += L(x - h * 0.65, y + h * 0.55, x + h * 0.65, y + h * 0.55) + L(x - h * 0.65, y + h * 0.55, x + h * 0.55, y - h * 0.65); }
    else if (type === 'ssq') { o += L(x - h * 0.65, y + h * 0.55, x + h * 0.65, y + h * 0.55) + L(x - h * 0.65, y + h * 0.55, x + h * 0.55, y - h * 0.65) + '<rect x="' + f1(x - h * 0.1) + '" y="' + f1(y - h * 0.15) + '" width="' + f1(h * 0.55) + '" height="' + f1(h * 0.55) + '"' + st + '/>'; }
    else if (type === 'qnt') { o += T('Q'); }
    else if (type === 'bqnt') { o += T('bQ'); }
    return o;
  }

  /* ---------- wheel ---------- */
  /* model: {inner, outer?, innerKeys, outerKeys, aspects, hasHouses, info:{tl:[],tr:[],bl:[],br:[]}, emptyNote}
     opts: {theme, showAspects, showDegrees, showHouseNums, showDetails, elementTint} */
  function wheel(model, opts) {
    var T = THEMES[opts.theme] || THEMES.astrolabe;
    var cx = 500, cy = 500, bi = !!model.outer;
    var zOut = 432, zIn = 376, tickIn = 364;
    var houseOut = bi ? 190 : 232, rA = bi ? 166 : 204, sep = 280;
    var inner = model.inner, hasH = model.hasHouses && inner.hasHouses !== false;
    var asc = hasH ? inner.points.ASC.lon : 0;
    function ang(lon) { return 180 + (lon - asc); }
    function P(r, lon) { return polar(cx, cy, r, ang(lon)); }
    var o = [], i, p, q, k;
    var lw = T.lineW;

    o.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" font-family="' + esc(T.num) + '">');
    o.push('<rect x="0" y="0" width="1000" height="1000" fill="' + T.bg + '"/>');

    /* compass ring (astrolabe) */
    if (T.compass) {
      o.push('<circle cx="500" cy="500" r="452" fill="none" stroke="' + T.rule + '" stroke-width="' + f1(1.6 * lw) + '"/>');
      o.push('<circle cx="500" cy="500" r="458" fill="none" stroke="' + T.ruleSoft + '" stroke-width="' + f1(0.8 * lw) + '"/>');
      for (i = 0; i < 360; i++) {
        var len = i % 10 === 0 ? 14 : (i % 5 === 0 ? 9 : 5);
        p = P(452, i); q = P(452 - len, i);
        o.push('<line x1="' + f1(p.x) + '" y1="' + f1(p.y) + '" x2="' + f1(q.x) + '" y2="' + f1(q.y) + '" stroke="' + T.rule + '" stroke-width="' + (i % 10 === 0 ? f1(1.1 * lw) : f1(0.6 * lw)) + '"/>');
      }
    }

    /* zodiac band */
    o.push('<circle cx="500" cy="500" r="' + zOut + '" fill="' + (T.planetsFill) + '" stroke="' + T.rule + '" stroke-width="' + f1(1.4 * lw) + '"/>');
    for (i = 0; i < 12; i++) {
      var el = ELEM[i % 4];
      var a0 = ang(i * 30), a1 = ang(i * 30 + 30);
      var p0 = polar(cx, cy, zOut, a0), p1 = polar(cx, cy, zOut, a1), p2 = polar(cx, cy, zIn, a1), p3 = polar(cx, cy, zIn, a0);
      var fill = opts.elementTint ? T.bandFill[el] : 'rgba(0,0,0,0)';
      o.push('<path d="M' + f1(p0.x) + ' ' + f1(p0.y) + 'A' + zOut + ' ' + zOut + ' 0 0 0 ' + f1(p1.x) + ' ' + f1(p1.y) + 'L' + f1(p2.x) + ' ' + f1(p2.y) + 'A' + zIn + ' ' + zIn + ' 0 0 1 ' + f1(p3.x) + ' ' + f1(p3.y) + 'Z" fill="' + fill + '" stroke="' + T.rule + '" stroke-width="' + f1(0.9 * lw) + '"/>');
      var gp = P((zOut + zIn) / 2, i * 30 + 15);
      var sc = opts.elementTint || T === THEMES.astrolabe || T === THEMES.classic ? T.signInk[el] : T.ink;
      o.push(glyph(SIGN_KEYS[i], gp.x, gp.y, 30, sc));
      if (T.dot && opts.elementTint) { var dp = P(zOut - 8, i * 30 + 15); o.push('<circle cx="' + f1(dp.x) + '" cy="' + f1(dp.y) + '" r="2.6" fill="' + T.dot[el] + '"/>'); }
    }
    o.push('<circle cx="500" cy="500" r="' + zIn + '" fill="none" stroke="' + T.rule + '" stroke-width="' + f1(1.2 * lw) + '"/>');
    /* degree ticks inside the band */
    for (i = 0; i < 360; i++) {
      var tl = i % 10 === 0 ? 11 : (i % 5 === 0 ? 7 : 4);
      p = P(zIn, i); q = P(zIn - tl, i);
      o.push('<line x1="' + f1(p.x) + '" y1="' + f1(p.y) + '" x2="' + f1(q.x) + '" y2="' + f1(q.y) + '" stroke="' + T.ruleSoft + '" stroke-width="' + f1(0.7 * lw) + '"/>');
    }

    /* inner structure */
    if (bi) { o.push('<circle cx="500" cy="500" r="' + sep + '" fill="none" stroke="' + T.ruleSoft + '" stroke-width="' + f1(1 * lw) + '"/>'); }
    o.push('<circle cx="500" cy="500" r="' + houseOut + '" fill="' + T.centerFill + '" stroke="' + T.rule + '" stroke-width="' + f1(1.1 * lw) + '"/>');
    o.push('<circle cx="500" cy="500" r="' + rA + '" fill="none" stroke="' + T.rule + '" stroke-width="' + f1(1 * lw) + '"/>');

    /* house cusps */
    if (hasH) {
      var cusps = inner.cusps;
      for (i = 1; i <= 12; i++) {
        var angular = i === 1 || i === 4 || i === 7 || i === 10;
        if (angular) { continue; }
        p = P(rA, cusps[i]); q = P(zIn, cusps[i]);
        o.push('<line x1="' + f1(p.x) + '" y1="' + f1(p.y) + '" x2="' + f1(q.x) + '" y2="' + f1(q.y) + '" stroke="' + T.ruleSoft + '" stroke-width="' + f1(0.9 * lw) + '"/>');
      }
      if (opts.showHouseNums) {
        for (i = 1; i <= 12; i++) {
          var nx = cusps[i === 12 ? 1 : i + 1], span = E.norm(nx - cusps[i]);
          p = P((houseOut + rA) / 2, cusps[i] + span / 2);
          o.push('<text x="' + f1(p.x) + '" y="' + f1(p.y) + '" font-size="15" text-anchor="middle" dominant-baseline="central" fill="' + T.soft + '" font-family="' + esc(T.head) + '">' + i + '</text>');
        }
      }
    }

    /* aspect lines */
    if (opts.showAspects && model.aspects) {
      var src = bi ? model.outer.points : inner.points;
      for (i = model.aspects.length - 1; i >= 0; i--) {
        var as = model.aspects[i];
        var pa = src[as.a], pb = inner.points[as.b];
        if (!pa || !pb) { continue; }
        p = P(rA, pa.lon); q = P(rA, pb.lon);
        var col = T.asp[as.nature] || T.ink;
        var maxo = 8;
        var op = Math.max(0.35, 1 - as.orb / maxo * 0.75);
        var wdt = (as.type === 'conj' ? 0 : (['opp', 'sq', 'tri', 'sex'].indexOf(as.type) >= 0 ? 1.5 : 1)) * (T.thin ? 0.85 : 1) * (T === THEMES.print ? 1.2 : 1);
        if (as.type === 'conj') { continue; }
        o.push('<line x1="' + f1(p.x) + '" y1="' + f1(p.y) + '" x2="' + f1(q.x) + '" y2="' + f1(q.y) + '" stroke="' + col + '" stroke-width="' + f1(wdt) + '" stroke-opacity="' + f1(op) + '"' + (T.dash[as.nature] ? ' stroke-dasharray="' + T.dash[as.nature] + '"' : '') + ' stroke-linecap="round"/>');
      }
    }

    /* angles */
    if (hasH) {
      var angs = [['ASC', 1], ['MC', 10], ['DSC', 7], ['IC', 4]];
      for (i = 0; i < angs.length; i++) {
        var key = angs[i][0], lon = inner.points[key].lon;
        p = P(rA, lon); q = P(zOut, lon);
        o.push('<line x1="' + f1(p.x) + '" y1="' + f1(p.y) + '" x2="' + f1(q.x) + '" y2="' + f1(q.y) + '" stroke="' + T.ink + '" stroke-width="' + f1(2.2 * lw) + '"/>');
        var tipR = T.compass ? 470 : 452, baseR = T.compass ? 456 : 438;
        if (T.arrows && (key === 'ASC' || key === 'MC')) {
          var tip = P(tipR, lon), b1 = P(baseR, lon - 1.6), b2 = P(baseR, lon + 1.6), sh = P(zOut, lon), sh2 = P(baseR, lon);
          o.push('<line x1="' + f1(sh.x) + '" y1="' + f1(sh.y) + '" x2="' + f1(sh2.x) + '" y2="' + f1(sh2.y) + '" stroke="' + T.ink + '" stroke-width="' + f1(2.2 * lw) + '"/>');
          o.push('<path d="M' + f1(tip.x) + ' ' + f1(tip.y) + 'L' + f1(b1.x) + ' ' + f1(b1.y) + 'L' + f1(b2.x) + ' ' + f1(b2.y) + 'Z" fill="' + T.ink + '"/>');
        } else if (T.arrows) {
          var sh3 = P(zOut, lon), sh4 = P(baseR, lon);
          o.push('<line x1="' + f1(sh3.x) + '" y1="' + f1(sh3.y) + '" x2="' + f1(sh4.x) + '" y2="' + f1(sh4.y) + '" stroke="' + T.ink + '" stroke-width="' + f1(1.6 * lw) + '"/>');
        }
        var dg = E.fmtDeg(lon), degTxt = dg.deg + '\u00b0' + pad2(dg.min) + '\u2032';
        var ff = ' font-family="' + esc(T.head) + '"';
        if (key === 'ASC' || key === 'DSC') {
          var xx = key === 'ASC' ? 27 : 973, yy = P(zOut, lon).y;
          o.push('<text x="' + xx + '" y="' + f1(yy - 18) + '" text-anchor="middle" font-size="17" font-weight="700" fill="' + T.ink + '"' + ff + '>' + LABEL[key] + '</text>');
          o.push('<text x="' + xx + '" y="' + f1(yy + 30) + '" text-anchor="middle" font-size="14" fill="' + T.ink + '">' + degTxt + '</text>');
        } else {
          var lr = T.compass ? 485 : (T.arrows ? 466 : 452);
          var lp = P(lr, lon), ca = Math.cos(ang(lon) * D2R), sa = Math.sin(ang(lon) * D2R);
          var anchor = ca > 0.35 ? 'start' : (ca < -0.35 ? 'end' : 'middle');
          var dy = sa > 0.35 ? -6 : (sa < -0.35 ? 16 : 0), wEst = 70, lx = lp.x;
          if (anchor === 'start' && lx + wEst > 992) { lx = 992; anchor = 'end'; }
          if (anchor === 'end' && lx - wEst < 8) { lx = 8; anchor = 'start'; }
          if (anchor === 'middle') { lx = Math.max(8 + wEst / 2, Math.min(992 - wEst / 2, lx)); }
          o.push('<text x="' + f1(lx) + '" y="' + f1(Math.max(18, Math.min(990, lp.y + dy))) + '" text-anchor="' + anchor + '" fill="' + T.ink + '"' + ff + '><tspan font-size="17" font-weight="700">' + LABEL[key] + '</tspan><tspan font-size="14" dx="5" font-family="' + esc(T.num) + '">' + degTxt + '</tspan></text>');
        }
      }
    }

    /* planets: each label stack adapts to its angle so text never runs into its neighbours */
    function ring(chart, keys, rStart, gSize, isOuter, compact) {
      var items = [], j, e;
      for (j = 0; j < keys.length; j++) {
        var kk = keys[j];
        if (!chart.points[kk]) { continue; }
        if ((kk === 'ASC' || kk === 'MC' || kk === 'DSC' || kk === 'IC') && !isOuter) { continue; }
        items.push({ key: kk, lon: chart.points[kk].lon, pt: chart.points[kk] });
      }
      function layout(it, angDeg) {
        var a = ang(angDeg) * D2R, c = Math.abs(Math.cos(a)), sn = Math.abs(Math.sin(a));
        var dg = E.fmtDeg(it.lon), els = [], rx = it.pt.retro;
        els.push({ kind: 'g', w: gSize, h: gSize });
        if (opts.showDegrees) {
          if (compact) {
            var txt = dg.deg + '\u00b0' + pad2(dg.min) + '\u2032';
            els.push({ kind: 't', text: txt, fs: 14, w: (txt.length - 0.8 + (rx ? 1.4 : 0)) * 14 * 0.55, h: 12 });
          } else {
            var t1 = dg.deg + '\u00b0';
            els.push({ kind: 'd', text: t1, fs: 17, w: (t1.length - 0.4) * 17 * 0.56, h: 14 });
            els.push({ kind: 's', w: 15, h: 15 });
            var t2 = pad2(dg.min) + '\u2032';
            els.push({ kind: 'm', text: t2, fs: 13, w: (t2.length - 0.4 + (rx ? 1.4 : 0)) * 13 * 0.56, h: 11 });
          }
        }
        var r = rStart, maxT = 0, k2;
        for (k2 = 0; k2 < els.length; k2++) {
          var el = els[k2], rad = el.w / 2 * c + el.h / 2 * sn, tan = el.w / 2 * sn + el.h / 2 * c;
          if (k2 === 0) { r -= rad; } else { r -= els[k2 - 1].rad + rad + (k2 === 1 ? 5 : 3); }
          el.rad = rad; el.r = r;
          if (tan / r > maxT) { maxT = tan / r; }
        }
        it.els = els; it.dg = dg; it.halfA = maxT * 180 / Math.PI + 0.7;
      }
      for (j = 0; j < items.length; j++) { layout(items[j], items[j].lon); }
      spread(items);
      for (j = 0; j < items.length; j++) { layout(items[j], items[j].disp); }
      for (j = 0; j < items.length; j++) {
        var itx = items[j], grp = GROUP_OF[itx.key] || 'point';
        var color = isOuter ? T.outerGroup[grp] : T.group[grp];
        var tickR = rStart + 12;
        var t0 = P(tickR, itx.lon), t1 = P(tickR - 9, itx.lon);
        o.push('<line x1="' + f1(t0.x) + '" y1="' + f1(t0.y) + '" x2="' + f1(t1.x) + '" y2="' + f1(t1.y) + '" stroke="' + color + '" stroke-width="' + f1(1.6 * lw) + '"/>');
        var g = itx.els[0];
        if (Math.abs(E.diff(itx.disp, itx.lon)) > 0.8) {
          var l2 = P(g.r + g.rad + 1, itx.disp);
          o.push('<line x1="' + f1(t1.x) + '" y1="' + f1(t1.y) + '" x2="' + f1(l2.x) + '" y2="' + f1(l2.y) + '" stroke="' + color + '" stroke-width="0.7" stroke-opacity="0.6"/>');
        }
        for (e = 0; e < itx.els.length; e++) {
          var el2 = itx.els[e], pp = P(el2.r, itx.disp);
          if (el2.kind === 'g') { o.push(glyph(itx.key, pp.x, pp.y, LABEL[itx.key] ? gSize * 1.05 : gSize, color)); }
          else if (el2.kind === 's') { o.push(glyph(SIGN_KEYS[itx.dg.sign], pp.x, pp.y, 15, opts.elementTint || T !== THEMES.modern ? T.signInk[ELEM[itx.dg.sign % 4]] : T.soft)); }
          else {
            var bold = el2.kind === 'd' || el2.kind === 't';
            o.push('<text x="' + f1(pp.x) + '" y="' + f1(pp.y) + '" font-size="' + el2.fs + '" text-anchor="middle" dominant-baseline="central" fill="' + (bold ? T.ink : T.soft) + '"' + (bold ? ' font-weight="600"' : '') + '>' + el2.text + ((el2.kind === 'm' || el2.kind === 't') && itx.pt.retro ? '<tspan fill="' + T.asp.hard + '" font-style="italic" font-weight="700" dx="1">R</tspan>' : '') + '</text>');
          }
        }
        if (!opts.showDegrees && itx.pt.retro) {
          var r0 = P(g.r - g.rad - 8, itx.disp);
          o.push('<text x="' + f1(r0.x) + '" y="' + f1(r0.y) + '" font-size="12" text-anchor="middle" dominant-baseline="central" fill="' + T.asp.hard + '" font-style="italic" font-weight="700">R</text>');
        }
        var a0p = P(rA, itx.lon);
        o.push('<circle cx="' + f1(a0p.x) + '" cy="' + f1(a0p.y) + '" r="2.4" fill="' + color + '"/>');
      }
    }
    if (bi) {
      ring(model.outer, model.outerKeys, zIn - 12, 25, true, true);
      ring(inner, model.innerKeys, sep - 10, 24, false, true);
    } else {
      ring(inner, model.innerKeys, zIn - 12, 30, false, false);
    }

    /* empty-state note */
    if (model.centerNote) {
      o.push('<text x="500" y="492" font-size="20" text-anchor="middle" fill="' + T.soft + '" font-family="' + esc(T.head) + '">' + esc(model.centerNote[0]) + '</text>');
      if (model.centerNote[1]) { o.push('<text x="500" y="520" font-size="15" text-anchor="middle" fill="' + T.soft + '">' + esc(model.centerNote[1]) + '</text>'); }
    }

    /* corner details */
    if (opts.showDetails && model.info) {
      var info = model.info;
      function block(lines, x, y, anchor, up) {
        var j2, yy = y;
        if (up) { yy = y - (lines.length - 1) * 21; }
        for (j2 = 0; j2 < lines.length; j2++) {
          var ln = lines[j2], big = j2 === 0 && ln.big;
          o.push('<text x="' + x + '" y="' + yy + '" text-anchor="' + anchor + '" font-size="' + (big ? 22 : 15) + '" fill="' + (big ? T.ink : T.soft) + '"' + (big ? ' font-family="' + esc(T.head) + '" font-weight="700"' : '') + '>' + esc(ln.t) + '</text>');
          yy += big ? 25 : 20;
        }
      }
      if (info.tl) { block(info.tl, 26, 38, 'start', false); }
      if (info.tr) { block(info.tr, 974, 38, 'end', false); }
      if (info.bl) { block(info.bl, 26, 976, 'start', true); }
      if (info.br) { block(info.br, 974, 976, 'end', true); }
    }
    o.push('</svg>');
    return o.join('');
  }

  /* ---------- aspect grid ---------- */
  function grid(model, opts) {
    var T = THEMES[opts.theme] || THEMES.astrolabe;
    var bi = !!model.outer, cell = 40, i, j, o = [];
    var rows = model.innerKeys.slice(), cols = bi ? model.outerKeys.slice() : model.innerKeys.slice();
    if (model.hasHouses) {
      if (rows.indexOf('ASC') < 0) { rows.push('ASC'); rows.push('MC'); }
      if (!bi && cols.indexOf('ASC') < 0) { cols.push('ASC'); cols.push('MC'); }
    }
    var lookup = {};
    for (i = 0; i < model.aspects.length; i++) { var a = model.aspects[i]; lookup[a.a + '|' + a.b] = a; if (!bi) { lookup[a.b + '|' + a.a] = a; } }
    var W, H, ox = 48, oy = 48;
    if (bi) { W = ox + cols.length * cell + 10; H = oy + rows.length * cell + 10; }
    else { W = ox + rows.length * cell + 10; H = rows.length * cell + 10; }
    o.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" font-family="' + esc(T.num) + '">');
    o.push('<rect width="' + W + '" height="' + H + '" fill="' + T.bg + '"/>');
    function head(key, x, y, outer) {
      var grp = GROUP_OF[key] || 'point';
      return glyph(key, x, y, LABEL[key] ? 22 : 20, outer ? T.outerGroup[grp] : T.group[grp]);
    }
    function aspCell(x, y, a) {
      if (!a) { return ''; }
      var col = T.asp[a.nature] || T.ink, s = '';
      s += aspectSymbol(a.type, x + cell / 2, y + cell / 2 - 4, 19, col);
      var om = Math.round(a.orb * 60), od = Math.floor(om / 60), mm = om % 60;
      s += '<text x="' + (x + cell / 2) + '" y="' + (y + cell - 5) + '" font-size="9.5" text-anchor="middle" fill="' + T.soft + '">' + od + '°' + pad2(mm) + (a.applying === true ? 'a' : (a.applying === false ? 's' : '')) + '</text>';
      return s;
    }
    if (bi) {
      for (j = 0; j < cols.length; j++) { o.push(head(cols[j], ox + j * cell + cell / 2, oy / 2, true)); }
      for (i = 0; i < rows.length; i++) {
        o.push(head(rows[i], ox / 2, oy + i * cell + cell / 2, false));
        for (j = 0; j < cols.length; j++) {
          var x = ox + j * cell, y = oy + i * cell;
          o.push('<rect x="' + x + '" y="' + y + '" width="' + cell + '" height="' + cell + '" fill="none" stroke="' + T.ruleSoft + '" stroke-width="0.8"/>');
          o.push(aspCell(x, y, lookup[cols[j] + '|' + rows[i]]));
        }
      }
    } else {
      for (i = 0; i < rows.length; i++) {
        var yy = i * cell;
        o.push(head(rows[i], ox + i * cell + cell / 2, yy + cell / 2, false));
        for (j = 0; j < i; j++) {
          var xx = ox + j * cell;
          o.push('<rect x="' + xx + '" y="' + yy + '" width="' + cell + '" height="' + cell + '" fill="none" stroke="' + T.ruleSoft + '" stroke-width="0.8"/>');
          o.push(aspCell(xx, yy, lookup[rows[i] + '|' + rows[j]]));
        }
        o.push('<rect x="' + (ox + i * cell) + '" y="' + yy + '" width="' + cell + '" height="' + cell + '" fill="none" stroke="' + T.rule + '" stroke-width="1"/>');
      }
    }
    o.push('</svg>');
    return o.join('');
  }

  function glyphSVG(key, size, color) {
    if (LABEL[key]) { return '<span class="cds-gl-txt">' + LABEL[key] + '</span>'; }
    return '<svg class="cds-gl" viewBox="-55 -55 110 110" width="' + size + '" height="' + size + '" aria-hidden="true"><path d="' + (G()[key] || '') + '" fill="' + (color || 'currentColor') + '"/></svg>';
  }

  root.CDS_RENDER = { THEMES: THEMES, wheel: wheel, grid: grid, glyphSVG: glyphSVG, aspectSymbol: aspectSymbol, GROUP_OF: GROUP_OF, esc: esc };
})(typeof window !== 'undefined' ? window : globalThis);

/* Chart Design Station interface (cds) | ES5 */
(function (root) {
  'use strict';
  var E, R, doc = root.document;
  var PLANETS = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  var EXTRA = ['Chiron', 'NNode', 'SNode', 'Lilith', 'Fortune', 'Vertex'];
  var NAMES = { Sun: 'Sun', Moon: 'Moon', Mercury: 'Mercury', Venus: 'Venus', Mars: 'Mars', Jupiter: 'Jupiter', Saturn: 'Saturn', Uranus: 'Uranus', Neptune: 'Neptune', Pluto: 'Pluto', Chiron: 'Chiron', NNode: 'North Node', SNode: 'South Node', Lilith: 'Lilith', Fortune: 'Part of Fortune', Vertex: 'Vertex', ASC: 'Ascendant', MC: 'Midheaven', DSC: 'Descendant', IC: 'Imum Coeli' };
  var TYPES = {
    natal: { label: 'Birth chart', two: false, ev: null },
    transits: { label: 'Birth chart with transits', two: false, ev: 'datetime', bi: true, outer: 'Transits', scale: 0.45 },
    progressions: { label: 'Secondary progressions', two: false, ev: 'date', bi: true, outer: 'Progressed', scale: 0.15 },
    solararc: { label: 'Solar arc directions', two: false, ev: 'date', bi: true, outer: 'Solar arc', scale: 0.15 },
    solarreturn: { label: 'Solar return', two: false, ev: 'year' },
    lunarreturn: { label: 'Lunar return', two: false, ev: 'after' },
    synastry: { label: 'Synastry', two: true, ev: null, bi: true, outer: 'Second person', scale: 0.75 },
    composite: { label: 'Composite', two: true, ev: null },
    davison: { label: 'Davison relationship chart', two: true, ev: null }
  };
  var S = {
    type: 'natal', theme: 'astrolabe', houseSystem: 'P', zodiac: 'tropical', ayanamsa: 'lahiri', nodeType: 'true',
    points: { Chiron: true, NNode: true, SNode: false, Lilith: false, Fortune: false, Vertex: false },
    minor: false, orb: 1, showAspects: true, showDegrees: true, showHouseNums: true, showDetails: true, elementTint: true,
    brand: '', exportSize: 2400
  };
  var places = { p1: null, p2: null, ev: null };
  var lastModel = null, lastSVG = '', lastGrid = '';
  var HOST = { clients: [], brand: '', current: null };
  var DESIGN_KEYS = ['theme', 'houseSystem', 'zodiac', 'ayanamsa', 'nodeType', 'points', 'minor', 'orb', 'showAspects', 'showDegrees', 'showHouseNums', 'showDetails', 'elementTint', 'brand', 'exportSize'];

  function $(id) { return doc.getElementById(id); }
  function on(el, ev, fn) { if (el) { el.addEventListener(ev, fn, false); } }
  function esc(s) { return String(s === undefined || s === null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function status(msg, kind) { var s = $('cds-status'); if (s) { s.textContent = msg || ''; s.className = 'cds-status' + (kind ? ' cds-' + kind : ''); } }

  /* ---------- settings memory (design only, never birth data) ---------- */
  function saveSettings() {
    try { var o = {}, i; for (i = 0; i < DESIGN_KEYS.length; i++) { o[DESIGN_KEYS[i]] = S[DESIGN_KEYS[i]]; } root.localStorage.setItem('cds-settings-v1', JSON.stringify(o)); } catch (e) { }
  }
  function loadSettings() {
    try { var o = JSON.parse(root.localStorage.getItem('cds-settings-v1') || 'null'), k; if (o) { for (k in o) { if (o.hasOwnProperty(k) && DESIGN_KEYS.indexOf(k) >= 0) { S[k] = o[k]; } } } } catch (e) { }
  }

  /* ---------- places ---------- */
  var cityRows = null;
  function cities() {
    if (cityRows) { return cityRows; }
    cityRows = [];
    var C = root.CDS_CITIES; if (!C) { return cityRows; }
    var lines = C.c.split('\n'), i;
    for (i = 0; i < lines.length; i++) {
      var f = lines[i].split('|');
      cityRows.push({ label: f[0], lat: parseFloat(f[1]), lon: parseFloat(f[2]), zone: C.z[parseInt(f[3], 10)], low: f[0].toLowerCase() });
    }
    return cityRows;
  }
  function localSearch(q) {
    q = q.toLowerCase().replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
    if (q.length < 2) { return []; }
    var rows = cities(), out = [], i;
    for (i = 0; i < rows.length && out.length < 8; i++) { if (rows[i].low.indexOf(q) === 0) { out.push(rows[i]); } }
    for (i = 0; i < rows.length && out.length < 8; i++) { if (rows[i].low.indexOf(q) > 0 && out.indexOf(rows[i]) < 0) { out.push(rows[i]); } }
    return out;
  }
  /* Online place search: GeoNames free web services (commercial use allowed, credit required).
     Set window.CDS_CONFIG = { geonamesUser: 'yourname' } before this block, or edit GEONAMES_USER below. */
  var GEONAMES_USER = '';
  function onlineSearch(q, cb) {
    var user = (root.CDS_CONFIG && root.CDS_CONFIG.geonamesUser) || GEONAMES_USER;
    if (!user) { cb(null); return; }
    var x;
    try { x = new XMLHttpRequest(); } catch (e) { cb(null); return; }
    var done = false;
    var timer = setTimeout(function () { if (!done) { done = true; try { x.abort(); } catch (e2) { } cb(null); } }, 7000);
    x.onreadystatechange = function () {
      if (x.readyState !== 4 || done) { return; }
      done = true; clearTimeout(timer);
      if (x.status !== 200) { cb(null); return; }
      try {
        var j = JSON.parse(x.responseText), out = [], i;
        var res = j.geonames || [];
        for (i = 0; i < res.length; i++) {
          var r = res[i], tz = r.timezone && r.timezone.timeZoneId;
          if (!tz) { continue; }
          var parts = [r.name];
          if (r.adminName1 && r.adminName1 !== r.name) { parts.push(r.adminName1); }
          if (r.countryName) { parts.push(r.countryName); }
          out.push({ label: parts.join(', '), lat: parseFloat(r.lat), lon: parseFloat(r.lng), zone: tz });
        }
        cb(out);
      } catch (e3) { cb(null); }
    };
    try {
      x.open('GET', 'https://secure.geonames.org/searchJSON?maxRows=10&featureClass=P&style=FULL&orderby=relevance&username=' + encodeURIComponent(user) + '&q=' + encodeURIComponent(q), true);
      x.send();
    } catch (e4) { done = true; clearTimeout(timer); cb(null); }
  }

  function fmtLat(v) { return Math.abs(v).toFixed(3) + '°' + (v >= 0 ? 'N' : 'S'); }
  function fmtLon(v) { return Math.abs(v).toFixed(3) + '°' + (v >= 0 ? 'E' : 'W'); }
  function parseCoord(s, isLat) {
    if (s === undefined || s === null) { return NaN; }
    s = String(s).replace(/^\s+|\s+$/g, '').toUpperCase();
    if (!s) { return NaN; }
    var m = s.match(/^(-?\d+(?:\.\d+)?)$/);
    if (m) { return parseFloat(m[1]); }
    m = s.match(/^(\d+)\s*[°D ]?\s*([NSEW])\s*(\d+(?:\.\d+)?)?/);
    if (m) { var v = parseInt(m[1], 10) + (m[3] ? parseFloat(m[3]) / 60 : 0); return (m[2] === 'S' || m[2] === 'W') ? -v : v; }
    m = s.match(/^(\d+(?:\.\d+)?)\s*[°D ]\s*(\d+(?:\.\d+)?)?\s*'?\s*([NSEW])$/);
    if (m) { var v2 = parseFloat(m[1]) + (m[2] ? parseFloat(m[2]) / 60 : 0); return (m[3] === 'S' || m[3] === 'W') ? -v2 : v2; }
    m = s.match(/^(\d+(?:\.\d+)?)\s*([NSEW])$/);
    if (m) { var v3 = parseFloat(m[1]); return (m[2] === 'S' || m[2] === 'W') ? -v3 : v3; }
    return NaN;
  }
  function validZone(z) { try { new Intl.DateTimeFormat('en-US', { timeZone: z }).format(new Date()); return true; } catch (e) { return false; } }

  function setPlace(slot, pl) {
    places[slot] = pl;
    var box = $('cds-' + slot + '-chosen');
    if (box) {
      if (pl) { box.innerHTML = '<strong>' + esc(pl.label) + '</strong><span>' + esc(fmtLat(pl.lat) + ', ' + fmtLon(pl.lon) + ' | ' + pl.zone) + '</span>'; box.className = 'cds-chosen cds-has'; }
      else { box.innerHTML = '<span>No place chosen yet</span>'; box.className = 'cds-chosen'; }
    }
    if (pl) {
      var la = $('cds-' + slot + '-lat'), lo = $('cds-' + slot + '-lon'), zz = $('cds-' + slot + '-zone');
      if (la) { la.value = pl.lat.toFixed(4); } if (lo) { lo.value = pl.lon.toFixed(4); } if (zz) { zz.value = pl.zone; }
    }
    updateOffsetNote(slot);
  }

  function showResults(slot, list, note) {
    var ul = $('cds-' + slot + '-results'), i;
    if (!ul) { return; }
    ul.innerHTML = '';
    if (!list || !list.length) { ul.innerHTML = note ? '<li class="cds-note-li">' + esc(note) + '</li>' : ''; return; }
    for (i = 0; i < list.length; i++) {
      var li = doc.createElement('li'), b = doc.createElement('button');
      b.type = 'button'; b.className = 'cds-result';
      b.innerHTML = '<strong>' + esc(list[i].label) + '</strong><span>' + esc(fmtLat(list[i].lat) + ', ' + fmtLon(list[i].lon)) + '</span>';
      (function (pl) { on(b, 'click', function () { setPlace(slot, pl); ul.innerHTML = ''; var inp = $('cds-' + slot + '-place'); if (inp) { inp.value = pl.label; } }); })(list[i]);
      li.appendChild(b); ul.appendChild(li);
    }
    if (note) { var n = doc.createElement('li'); n.className = 'cds-note-li'; n.textContent = note; ul.appendChild(n); }
  }

  function wirePlace(slot) {
    var inp = $('cds-' + slot + '-place'), btn = $('cds-' + slot + '-find'), t = null;
    function local() { showResults(slot, localSearch(inp.value)); }
    function online() {
      var q = inp.value;
      if (q.replace(/\s/g, '').length < 2) { return; }
      var loc = localSearch(q);
      showResults(slot, loc, 'Searching more places...');
      onlineSearch(q, function (list) {
        if (list === null) { showResults(slot, loc, loc.length ? 'Showing built-in places. You can also enter coordinates by hand.' : 'No match in the built-in list. Enter coordinates by hand below.'); return; }
        var seen = {}, merged = [], i;
        for (i = 0; i < list.length; i++) { merged.push(list[i]); seen[list[i].label] = 1; }
        for (i = 0; i < loc.length; i++) { if (!seen[loc[i].label]) { merged.push(loc[i]); } }
        showResults(slot, merged.slice(0, 10), merged.length ? 'Place search by GeoNames (geonames.org).' : 'No places found. Try adding the state or country.');
      });
    }
    on(inp, 'input', function () { clearTimeout(t); t = setTimeout(local, 120); });
    on(inp, 'keydown', function (e) { if (e.keyCode === 13) { e.preventDefault(); online(); } });
    on(btn, 'click', online);
    var apply = $('cds-' + slot + '-apply');
    on(apply, 'click', function () {
      var lat = parseCoord($('cds-' + slot + '-lat').value, true), lon = parseCoord($('cds-' + slot + '-lon').value, false), z = $('cds-' + slot + '-zone').value.replace(/^\s+|\s+$/g, '');
      if (isNaN(lat) || lat < -90 || lat > 90) { status('Latitude needs to be between 90 S and 90 N, for example 38.58 or 38N35.', 'warn'); return; }
      if (isNaN(lon) || lon < -180 || lon > 180) { status('Longitude needs to be between 180 W and 180 E, for example -121.49 or 121W29.', 'warn'); return; }
      if (!validZone(z)) { status('That time zone name was not recognized. Use a name like America/Los_Angeles, or fill in the UTC offset instead.', 'warn'); return; }
      setPlace(slot, { label: (inp.value || 'Custom place'), lat: lat, lon: lon, zone: z });
      status('Place set by hand.', 'ok');
    });
    var off = $('cds-' + slot + '-offset');
    on(off, 'input', function () { updateOffsetNote(slot); });
  }

  /* ---------- reading people ---------- */
  function parseOffset(s) {
    s = (s || '').replace(/\s/g, '');
    if (!s) { return null; }
    var m = s.match(/^(?:UTC|GMT)?([+-])(\d{1,2})(?::?(\d{2}))?$/i);
    if (!m) { return NaN; }
    var v = parseInt(m[2], 10) * 60 + (m[3] ? parseInt(m[3], 10) : 0);
    return m[1] === '-' ? -v : v;
  }
  function fmtOffset(min) { var s = min < 0 ? '-' : '+', a = Math.abs(min); return 'UTC' + s + Math.floor(a / 60) + ':' + pad2(a % 60); }

  function readDateTime(slot, needTime) {
    var dv = ($('cds-' + slot + '-date') || {}).value || '';
    var tv = ($('cds-' + slot + '-time') || {}).value || '';
    var unk = $('cds-' + slot + '-unknown') && $('cds-' + slot + '-unknown').checked;
    var m = dv.match(/^(-?\d{1,4})-(\d{1,2})-(\d{1,2})$/);
    if (!m) { return { error: 'date' }; }
    var y = parseInt(m[1], 10), mo = parseInt(m[2], 10), d = parseInt(m[3], 10);
    var h = 12, mi = 0;
    if (!unk && needTime !== false) {
      var tm = tv.match(/^(\d{1,2}):(\d{2})/);
      if (!tm) { return { error: 'time' }; }
      h = parseInt(tm[1], 10); mi = parseInt(tm[2], 10);
    }
    return { y: y, mo: mo, d: d, h: h, mi: mi, unknown: !!unk };
  }

  function resolveTime(dt, pl, slot) {
    var offInp = $('cds-' + slot + '-offset'), manual = offInp ? parseOffset(offInp.value) : null;
    if (typeof manual === 'number' && isNaN(manual)) { return { error: 'offset' }; }
    var r = E.localToUTC(dt.y, dt.mo, dt.d, dt.h, dt.mi, pl.zone, manual === null ? undefined : manual);
    var alt = $('cds-' + slot + '-dstalt');
    if (r.ambiguous && alt && alt.checked) { r = { ms: r.alt.ms, offsetMin: r.alt.offsetMin, ambiguous: true, chosenAlt: true, alt: r }; }
    return r;
  }

  function updateOffsetNote(slot) {
    var box = $('cds-' + slot + '-tznote');
    if (!box || !E) { return; }
    var pl = places[slot];
    var dt = readDateTime(slot, true);
    if (!pl || dt.error) { box.innerHTML = ''; return; }
    var r = resolveTime(dt, pl, slot);
    if (r.error) { box.innerHTML = '<span class="cds-warn-t">The UTC offset should look like -7, +5:30 or UTC-8.</span>'; return; }
    var parts = ['Clock time at this place and date: <strong>' + fmtOffset(r.offsetMin) + '</strong>' + (r.manual ? ' (entered by hand)' : '') + '.'];
    if (dt.unknown) { parts.push('Birth time unknown, so a noon chart is drawn without houses or angles. The Moon may be up to about 7° from the position shown.'); }
    if (r.ambiguous) { parts.push('<span class="cds-warn-t">This clock time happened twice that night as the clocks fell back. Using the ' + (r.chosenAlt ? 'second' : 'first') + ' one.</span> <label class="cds-inline"><input type="checkbox" id="cds-' + slot + '-dstalt"' + (r.chosenAlt ? ' checked' : '') + '> Use the second time</label>'); }
    if (r.skipped) { parts.push('<span class="cds-warn-t">This clock time did not exist that day because the clocks sprang forward. Check the birth record.</span>'); }
    var yy = dt.y;
    if (yy < 1970 && !r.manual) { parts.push('For births before 1970, compare this offset with a time-change reference if the place had local war time or unusual clock rules.'); }
    box.innerHTML = parts.join(' ');
    var a2 = $('cds-' + slot + '-dstalt');
    if (a2) { on(a2, 'change', function () { updateOffsetNote(slot); }); }
  }

  function readPerson(slot, label) {
    var dt = readDateTime(slot, true);
    var name = (($('cds-' + slot + '-name') || {}).value || '').replace(/^\s+|\s+$/g, '');
    if (dt.error === 'date') { return { error: label + ': add a birth date.' }; }
    if (dt.error === 'time') { return { error: label + ': add a birth time, or tick "Time unknown".' }; }
    var pl = places[slot];
    if (!pl) { return { error: label + ': choose a birth place from the list, or enter coordinates by hand.' }; }
    var r = resolveTime(dt, pl, slot);
    if (r.error) { return { error: label + ': the UTC offset should look like -7, +5:30 or UTC-8.' }; }
    return { name: name, dt: dt, place: pl, ms: r.ms, offsetMin: r.offsetMin, unknown: dt.unknown };
  }

  function opts(extra) {
    var o = { houseSystem: S.houseSystem, zodiac: S.zodiac, ayanamsa: S.ayanamsa, nodeType: S.nodeType };
    return E.copy(o, extra || {});
  }

  function chartOf(person) {
    var c = E.calcChart(opts({ ms: person.ms, lat: person.place.lat, lon: person.place.lon }));
    if (person.unknown) { c.hasHouses = false; }
    return c;
  }

  /* ---------- formatting ---------- */
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function localText(ms, zone, offsetMin, unknown) {
    var off = typeof offsetMin === 'number' ? offsetMin : E.zoneOffsetMin(zone, ms);
    var d = new Date(ms + off * 60000);
    var y = d.getUTCFullYear(), h = d.getUTCHours(), mi = d.getUTCMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM', h12 = h % 12 === 0 ? 12 : h % 12;
    var date = d.getUTCDate() + ' ' + MONTHS[d.getUTCMonth()] + ' ' + y;
    if (unknown) { return date + ', time unknown'; }
    return date + ', ' + h12 + ':' + pad2(mi) + ' ' + ampm + ' (' + fmtOffset(off) + ')';
  }
  function hsName(k) { var i; for (i = 0; i < E.HOUSE_SYSTEMS.length; i++) { if (E.HOUSE_SYSTEMS[i].key === k) { return E.HOUSE_SYSTEMS[i].name; } } return k; }
  function ayName(k) { var i; for (i = 0; i < E.AYANAMSAS.length; i++) { if (E.AYANAMSAS[i].key === k) { return E.AYANAMSAS[i].name; } } return k; }
  function settingsLine(chart) {
    var z = S.zodiac === 'sidereal' ? 'Sidereal, ' + ayName(S.ayanamsa) : 'Tropical';
    return chart && chart.hasHouses !== false ? hsName(chart.houseSystem) + ' houses | ' + z : z;
  }

  function keysFor(chart, withAngles) {
    var k = PLANETS.slice(), i;
    for (i = 0; i < EXTRA.length; i++) { if (S.points[EXTRA[i]] && chart.points[EXTRA[i]]) { if ((EXTRA[i] === 'Fortune' || EXTRA[i] === 'Vertex') && chart.hasHouses === false) { continue; } k.push(EXTRA[i]); } }
    if (withAngles && chart.hasHouses !== false) { k.push('ASC'); k.push('MC'); }
    return k;
  }
  function aspectKeys() {
    var a = ['conj', 'opp', 'tri', 'sq', 'sex'];
    if (S.minor) { a = a.concat(['qx', 'ssq', 'semsq', 'ssx', 'qnt', 'bqnt']); }
    return a;
  }

  /* ---------- building the chart model ---------- */
  function buildModel() {
    var t = TYPES[S.type], p1 = readPerson('p1', 'Birth details'), p2, model = {};
    if (p1.error) { return { error: p1.error }; }
    var name1 = p1.name || 'Client';
    var natal = chartOf(p1);
    var tl = [{ t: name1, big: true }, { t: t.label }, { t: localText(p1.ms, p1.place.zone, p1.offsetMin, p1.unknown) }, { t: p1.place.label }];
    var tr = [{ t: settingsLine(natal) }, { t: fmtLat(p1.place.lat) + ', ' + fmtLon(p1.place.lon) }];
    var bl = S.brand ? [{ t: 'Prepared by ' + S.brand }] : null;
    var br = null, inner = natal, outer = null, aspects;
    if (natal.houseNote) { tr.push({ t: natal.houseNote }); }

    if (t.two) {
      p2 = readPerson('p2', 'Second person');
      if (p2.error) { return { error: p2.error }; }
      var name2 = p2.name || 'Second person';
      var c2 = chartOf(p2);
      tl[0] = { t: name1 + ' and ' + name2, big: true };
      tl.splice(2, 2, { t: name1 + ': ' + localText(p1.ms, p1.place.zone, p1.offsetMin, p1.unknown) }, { t: name2 + ': ' + localText(p2.ms, p2.place.zone, p2.offsetMin, p2.unknown) });
      if (S.type === 'synastry') { outer = c2; br = [{ t: 'Inner wheel: ' + name1 }, { t: 'Outer wheel: ' + name2 }]; }
      else if (S.type === 'composite') {
        inner = E.composite(natal, c2, opts());
        if (p1.unknown || p2.unknown) { inner.hasHouses = false; }
        br = [{ t: 'Midpoint composite' }];
      } else {
        inner = E.davison(natal, c2, opts());
        if (p1.unknown || p2.unknown) { inner.hasHouses = false; }
        br = [{ t: 'Davison: ' + localText(inner.ms, 'UTC', 0, false).replace('(UTC+0:00)', 'UT') }, { t: fmtLat(inner.lat) + ', ' + fmtLon(inner.lon) }];
      }
    } else if (t.ev) {
      var ev = readEvent(t.ev, p1);
      if (ev.error) { return { error: ev.error }; }
      if (S.type === 'transits') {
        outer = E.calcChart(opts({ ms: ev.ms, lat: ev.place.lat, lon: ev.place.lon }));
        br = [{ t: 'Outer wheel: transits' }, { t: localText(ev.ms, ev.place.zone) }, { t: ev.place.label }];
      } else if (S.type === 'progressions') {
        outer = E.progressed(natal, ev.ms, opts({ lat: p1.place.lat, lon: p1.place.lon }));
        br = [{ t: 'Outer wheel: progressed to ' + localText(ev.ms, p1.place.zone, undefined, true).replace(', time unknown', '') }, { t: 'Angles by solar arc in longitude' }];
      } else if (S.type === 'solararc') {
        outer = E.solarArc(natal, ev.ms, opts());
        br = [{ t: 'Outer wheel: solar arc to ' + localText(ev.ms, p1.place.zone, undefined, true).replace(', time unknown', '') }, { t: 'Arc ' + outer.arc.toFixed(2) + '°' }];
      } else if (S.type === 'solarreturn') {
        inner = E.solarReturn(natal, ev.year, opts({ lat: ev.place.lat, lon: ev.place.lon }));
        if (!inner) { return { error: 'The solar return could not be found for that year.' }; }
        tl[1] = { t: 'Solar return ' + ev.year };
        br = [{ t: 'Return moment' }, { t: localText(inner.ms, ev.place.zone) }, { t: ev.place.label }];
        tr = [{ t: settingsLine(inner) }, { t: fmtLat(ev.place.lat) + ', ' + fmtLon(ev.place.lon) }];
      } else if (S.type === 'lunarreturn') {
        inner = E.lunarReturn(natal, ev.ms, opts({ lat: ev.place.lat, lon: ev.place.lon }));
        br = [{ t: 'Return moment' }, { t: localText(inner.ms, ev.place.zone) }, { t: ev.place.label }];
        tr = [{ t: settingsLine(inner) }, { t: fmtLat(ev.place.lat) + ', ' + fmtLon(ev.place.lon) }];
      }
    }

    var innerKeys = keysFor(inner, false), outerKeys = outer ? keysFor(outer, S.type === 'synastry' || S.type === 'transits' ? false : false) : null;
    if (outer) {
      if (S.type === 'synastry' && outer.hasHouses !== false) { outerKeys.push('ASC'); outerKeys.push('MC'); }
      var tgt = innerKeys.slice(); if (inner.hasHouses !== false) { tgt.push('ASC'); tgt.push('MC'); }
      aspects = E.findAspects(outer.points, inner.points, outerKeys, tgt, { aspects: aspectKeys(), orbScale: S.orb * (t.scale || 1) });
    } else {
      var all = keysFor(inner, true);
      aspects = E.findAspects(inner.points, inner.points, all, all, { aspects: aspectKeys(), orbScale: S.orb });
    }
    model = { inner: inner, outer: outer, innerKeys: innerKeys, outerKeys: outerKeys, aspects: aspects, hasHouses: inner.hasHouses !== false, info: { tl: tl, tr: tr, bl: bl, br: br }, type: S.type, p1: p1, p2: p2, natal: natal };
    return model;
  }

  function readEvent(kind, p1) {
    var useBirth = $('cds-ev-same') ? $('cds-ev-same').checked : true;
    var pl = useBirth ? p1.place : places.ev;
    if (!pl) { return { error: 'Choose a location for this chart, or tick "Same as birth place".' }; }
    if (kind === 'year') {
      var yr = parseInt(($('cds-ev-year') || {}).value, 10);
      if (isNaN(yr) || yr < 1800 || yr > 2399) { return { error: 'Enter the year of the solar return.' }; }
      return { year: yr, place: pl };
    }
    var dt = readDateTime('ev', kind === 'datetime');
    if (dt.error === 'date') { return { error: 'Add the date for this chart.' }; }
    if (dt.error === 'time') { return { error: 'Add the time for the transits.' }; }
    var r = E.localToUTC(dt.y, dt.mo, dt.d, kind === 'datetime' ? dt.h : 12, kind === 'datetime' ? dt.mi : 0, pl.zone);
    return { ms: r.ms, place: pl };
  }

  /* ---------- sky now (empty state) ---------- */
  function skyNowModel() {
    var c = E.calcChart(opts({ ms: Date.now(), lat: 0, lon: 0 }));
    c.hasHouses = false;
    var keys = keysFor(c, false);
    return { inner: c, outer: null, innerKeys: keys, outerKeys: null, aspects: E.findAspects(c.points, c.points, keys, keys, { aspects: aspectKeys(), orbScale: S.orb }), hasHouses: false, info: { tl: [{ t: 'The sky right now', big: true }, { t: localText(Date.now(), 'UTC', -new Date().getTimezoneOffset()) }], tr: [{ t: settingsLine(null) }], bl: S.brand ? [{ t: 'Prepared by ' + S.brand }] : null, br: [{ t: 'Add birth details to draw a client chart' }] }, sky: true };
  }

  /* ---------- drawing ---------- */
  function wheelOpts() { return { theme: S.theme, showAspects: S.showAspects, showDegrees: S.showDegrees, showHouseNums: S.showHouseNums, showDetails: S.showDetails, elementTint: S.elementTint }; }

  function draw(model) {
    lastModel = model;
    lastSVG = R.wheel(model, wheelOpts());
    $('cds-figure').innerHTML = lastSVG;
    var svg = $('cds-figure').firstChild;
    if (svg && svg.setAttribute) { svg.removeAttribute('width'); svg.removeAttribute('height'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Chart wheel'); }
    lastGrid = R.grid(model, wheelOpts());
    renderTables(model);
    var cap = $('cds-caption');
    if (cap) { cap.textContent = model.sky ? 'The sky right now, without houses. Add birth details to draw a client chart.' : (model.info.tl[0].t + ' | ' + TYPES[model.type].label); }
  }

  function redraw() { if (lastModel) { if (lastModel.sky) { draw(skyNowModel()); } else { var m = buildModel(); if (!m.error) { draw(m); } else { draw(lastModel); } } } }

  function calculate() {
    var m;
    try { m = buildModel(); } catch (e) { status('Something went wrong while calculating: ' + e.message, 'warn'); return; }
    if (m.error) { status(m.error, 'warn'); return; }
    draw(m);
    status('Chart drawn.', 'ok');
    var fig = $('cds-stage');
    if (fig && fig.getBoundingClientRect && fig.getBoundingClientRect().top < -40) { try { fig.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e2) { fig.scrollIntoView(); } }
  }

  /* ---------- tables ---------- */
  function elementOf(lon) { return ['Fire', 'Earth', 'Air', 'Water'][E.signOf(lon) % 4]; }
  function modalityOf(lon) { return ['Cardinal', 'Fixed', 'Mutable'][E.signOf(lon) % 3]; }

  function posRows(chart, keys, hasH) {
    var h = '', i, T = R.THEMES[S.theme], gcol;
    for (i = 0; i < keys.length; i++) {
      var k = keys[i], p = chart.points[k];
      if (!p) { continue; }
      var d = E.fmtDeg(p.lon);
      gcol = T.group[R.GROUP_OF[k] || 'point'];
      h += '<tr><td class="cds-gcell">' + R.glyphSVG(k, 20, gcol) + ' ' + esc(NAMES[k] || k) + '</td><td class="cds-num">' + R.glyphSVG(E.SIGNS[d.sign], 15, T.signInk[['fire', 'earth', 'air', 'water'][d.sign % 4]]) + ' ' + d.deg + '°' + pad2(d.min) + '′ ' + esc(d.signName) + '</td><td class="cds-num">' + (hasH ? p.house : '') + '</td><td>' + (p.retro ? 'Rx' : '') + '</td></tr>';
    }
    return h;
  }

  function renderTables(model) {
    var hasH = model.hasHouses, inner = model.inner, h = '';
    var head = '<thead><tr><th>Point</th><th>Position</th><th>House</th><th>Rx</th></tr></thead>';
    var innerTitle = model.sky ? 'The sky right now' : (model.outer ? 'Inner wheel' : 'Positions');
    var ik = model.innerKeys.slice(); if (hasH) { ik.push('ASC'); ik.push('MC'); }
    h += '<h4>' + esc(innerTitle) + '</h4><div class="cds-scroll"><table class="cds-table">' + head + '<tbody>' + posRows(inner, ik, hasH) + '</tbody></table></div>';
    if (model.outer) {
      h += '<h4>Outer wheel: ' + esc(TYPES[model.type].outer) + '</h4><div class="cds-scroll"><table class="cds-table">' + head + '<tbody>' + posRows(model.outer, model.outerKeys, hasH) + '</tbody></table></div>';
      h += '<p class="cds-small">House numbers for the outer wheel show where those points fall in the inner chart.</p>';
    }
    $('cds-out-positions').innerHTML = h;

    /* aspects */
    var a = model.aspects, rows = '', i;
    for (i = 0; i < a.length; i++) {
      var x = a[i], om = Math.round(x.orb * 60);
      rows += '<tr><td>' + esc((NAMES[x.a] || x.a) + ' ' + x.name.toLowerCase() + ' ' + (NAMES[x.b] || x.b)) + '</td><td class="cds-num">' + Math.floor(om / 60) + '°' + pad2(om % 60) + '′</td><td>' + (x.applying === true ? 'Applying' : (x.applying === false ? 'Separating' : '')) + '</td></tr>';
    }
    $('cds-out-aspects').innerHTML = '<div class="cds-gridwrap">' + lastGrid + '</div><p class="cds-small">Hard aspects, soft aspects and minor aspects follow the colors of the chart design. a = applying, s = separating.</p><div class="cds-scroll"><table class="cds-table"><thead><tr><th>Aspect</th><th>Orb</th><th>Phase</th></tr></thead><tbody>' + (rows || '<tr><td colspan="3">No aspects within the current orbs.</td></tr>') + '</tbody></table></div>';

    /* houses */
    if (hasH) {
      var hr = '';
      for (i = 1; i <= 12; i++) { var cd = E.fmtDeg(inner.cusps[i]); hr += '<tr><td>House ' + i + '</td><td class="cds-num">' + cd.deg + '°' + pad2(cd.min) + '′ ' + esc(cd.signName) + '</td></tr>'; }
      $('cds-out-houses').innerHTML = '<p class="cds-small">' + esc(hsName(inner.houseSystem) + ' house cusps' + (inner.houseNote ? '. ' + inner.houseNote : '')) + '</p><div class="cds-scroll"><table class="cds-table"><thead><tr><th>Cusp</th><th>Position</th></tr></thead><tbody>' + hr + '</tbody></table></div>';
    } else {
      $('cds-out-houses').innerHTML = '<p class="cds-small">Houses need a known birth time and place.</p>';
    }

    /* balance and patterns */
    $('cds-out-balance').innerHTML = balanceHTML(inner, hasH, model);
  }

  function bar(label, n, total) {
    var pct = total ? Math.round(n / total * 100) : 0;
    return '<div class="cds-bar"><span class="cds-bar-l">' + esc(label) + '</span><span class="cds-bar-t"><span style="width:' + pct + '%"></span></span><span class="cds-bar-n">' + n + '</span></div>';
  }

  function balanceHTML(c, hasH, model) {
    var el = { Fire: 0, Earth: 0, Air: 0, Water: 0 }, mo = { Cardinal: 0, Fixed: 0, Mutable: 0 }, i, k;
    var hemi = { above: 0, below: 0, east: 0, west: 0 };
    for (i = 0; i < PLANETS.length; i++) {
      var p = c.points[PLANETS[i]];
      el[elementOf(p.lon)]++; mo[modalityOf(p.lon)]++;
      if (hasH) { if (p.house >= 7) { hemi.above++; } else { hemi.below++; } if (p.house >= 10 || p.house <= 3) { hemi.east++; } else { hemi.west++; } }
    }
    var h = '<div class="cds-bal"><div><h4>Elements</h4>';
    for (k in el) { if (el.hasOwnProperty(k)) { h += bar(k, el[k], 10); } }
    h += '</div><div><h4>Modalities</h4>';
    for (k in mo) { if (mo.hasOwnProperty(k)) { h += bar(k, mo[k], 10); } }
    h += '</div>';
    if (hasH) { h += '<div><h4>Hemispheres</h4>' + bar('Above horizon', hemi.above, 10) + bar('Below horizon', hemi.below, 10) + bar('Eastern', hemi.east, 10) + bar('Western', hemi.west, 10) + '</div>'; }
    h += '</div>';
    var phase = E.norm(c.points.Moon.lon - c.points.Sun.lon);
    var phases = ['New Moon', 'Crescent', 'First Quarter', 'Gibbous', 'Full Moon', 'Disseminating', 'Last Quarter', 'Balsamic'];
    var notes = ['Lunar phase: <strong>' + phases[Math.floor(phase / 45)] + '</strong> (Moon ' + Math.round(phase) + '° ahead of the Sun)'];
    if (hasH) {
      var ascSign = E.signOf(c.points.ASC.lon);
      var trad = ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'][ascSign];
      var modern = { 7: 'Pluto', 10: 'Uranus', 11: 'Neptune' }[ascSign];
      notes.push('Chart ruler: <strong>' + trad + '</strong>' + (modern ? ' (modern co-ruler ' + modern + ')' : '') + ', in ' + E.fmtDeg(c.points[trad].lon).signName + ', house ' + c.points[trad].house);
      notes.push(c.dayChart ? 'Sect: day chart (Sun above the horizon)' : 'Sect: night chart (Sun below the horizon)');
    }
    var pats = patterns(c, model);
    h += '<h4>Notes</h4><ul class="cds-list">' + notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') + '</ul>';
    h += '<h4>Aspect patterns</h4>' + (pats.length ? '<ul class="cds-list">' + pats.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' : '<p class="cds-small">No major patterns (stellium, grand trine, T-square, grand cross, yod or kite) within the current orbs.</p>');
    return h;
  }

  function patterns(c, model) {
    var out = [], i, j, k, l;
    var keys = PLANETS.slice();
    if (S.points.Chiron && c.points.Chiron) { keys.push('Chiron'); }
    var asp = model.outer ? E.findAspects(c.points, c.points, keys, keys, { aspects: ['opp', 'tri', 'sq', 'sex', 'qx'], orbScale: S.orb }) : model.aspects;
    var has = {};
    for (i = 0; i < asp.length; i++) { has[asp[i].a + '|' + asp[i].b + '|' + asp[i].type] = 1; has[asp[i].b + '|' + asp[i].a + '|' + asp[i].type] = 1; }
    function A(a, b, t) { return !!has[a + '|' + b + '|' + t]; }
    function N(a) { return NAMES[a] || a; }
    /* stelliums by sign and by house */
    var bySign = {}, byHouse = {};
    for (i = 0; i < PLANETS.length; i++) {
      var p = c.points[PLANETS[i]], s = E.SIGNS[E.signOf(p.lon)];
      (bySign[s] = bySign[s] || []).push(PLANETS[i]);
      if (model.hasHouses) { (byHouse[p.house] = byHouse[p.house] || []).push(PLANETS[i]); }
    }
    for (k in bySign) { if (bySign.hasOwnProperty(k) && bySign[k].length >= 3) { out.push('Stellium in ' + k + ': ' + bySign[k].map(N).join(', ')); } }
    for (k in byHouse) { if (byHouse.hasOwnProperty(k) && byHouse[k].length >= 3) { out.push('Stellium in house ' + k + ': ' + byHouse[k].map(N).join(', ')); } }
    var n = keys.length;
    for (i = 0; i < n; i++) {
      for (j = i + 1; j < n; j++) {
        for (k = j + 1; k < n; k++) {
          var a = keys[i], b = keys[j], d = keys[k];
          if (A(a, b, 'tri') && A(b, d, 'tri') && A(a, d, 'tri')) {
            out.push('Grand trine: ' + [a, b, d].map(N).join(', '));
            for (l = 0; l < n; l++) { var e = keys[l]; if (e === a || e === b || e === d) { continue; } if ((A(e, a, 'opp') && A(e, b, 'sex') && A(e, d, 'sex')) || (A(e, b, 'opp') && A(e, a, 'sex') && A(e, d, 'sex')) || (A(e, d, 'opp') && A(e, a, 'sex') && A(e, b, 'sex'))) { out.push('Kite: ' + [a, b, d, e].map(N).join(', ')); } }
          }
          var tr = [[a, b, d], [a, d, b], [b, d, a]], m;
          for (m = 0; m < 3; m++) { var x = tr[m]; if (A(x[0], x[1], 'opp') && A(x[2], x[0], 'sq') && A(x[2], x[1], 'sq')) { out.push('T-square: ' + N(x[0]) + ' opposite ' + N(x[1]) + ', apex ' + N(x[2])); } }
          for (m = 0; m < 3; m++) { var y = tr[m]; if (A(y[0], y[1], 'sex') && A(y[2], y[0], 'qx') && A(y[2], y[1], 'qx')) { out.push('Yod: ' + N(y[0]) + ' sextile ' + N(y[1]) + ', apex ' + N(y[2])); } }
        }
      }
    }
    for (i = 0; i < n; i++) { for (j = i + 1; j < n; j++) { if (!A(keys[i], keys[j], 'opp')) { continue; } for (k = 0; k < n; k++) { for (l = k + 1; l < n; l++) { if (k === i || k === j || l === i || l === j || !A(keys[k], keys[l], 'opp')) { continue; } if (A(keys[i], keys[k], 'sq') && A(keys[i], keys[l], 'sq') && A(keys[j], keys[k], 'sq') && A(keys[j], keys[l], 'sq') && i < k) { out.push('Grand cross: ' + [keys[i], keys[j], keys[k], keys[l]].map(N).join(', ')); } } } } }
    var seen = {}, uniq = [];
    for (i = 0; i < out.length; i++) { if (!seen[out[i]]) { seen[out[i]] = 1; uniq.push(out[i]); } }
    return uniq;
  }

  /* ---------- export ---------- */
  var fontCache = {};
  var FONT_URL = {
    astrolabe: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=EB+Garamond:wght@400;600&display=swap',
    modern: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap',
    print: 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap'
  };
  function get(url, type, cb) {
    var x;
    try { x = new XMLHttpRequest(); x.open('GET', url, true); if (type) { x.responseType = type; } } catch (e) { cb(null); return; }
    var t = setTimeout(function () { try { x.abort(); } catch (e2) { } cb(null); cb = function () { }; }, 6000);
    x.onload = function () { clearTimeout(t); cb(x.status === 200 ? (type ? x.response : x.responseText) : null); };
    x.onerror = function () { clearTimeout(t); cb(null); };
    try { x.send(); } catch (e3) { clearTimeout(t); cb(null); }
  }
  function b64(buf) { var s = '', a = new Uint8Array(buf), i, CH = 0x8000; for (i = 0; i < a.length; i += CH) { s += String.fromCharCode.apply(null, a.subarray(i, i + CH)); } return root.btoa(s); }
  function fontCSS(theme, cb) {
    var url = FONT_URL[theme];
    if (!url) { cb(''); return; }
    if (fontCache[theme] !== undefined) { cb(fontCache[theme]); return; }
    get(url, null, function (css) {
      if (!css) { fontCache[theme] = ''; cb(''); return; }
      var blocks = css.split('@font-face'), keep = [], i;
      for (i = 1; i < blocks.length; i++) { if (/U\+0000-00FF/.test(blocks[i])) { keep.push('@font-face' + blocks[i].replace(/\}[\s\S]*$/, '}')); } }
      var left = keep.length, out = keep.slice();
      if (!left) { fontCache[theme] = ''; cb(''); return; }
      keep.forEach(function (blk, idx) {
        var m = blk.match(/url\(([^)]+)\)/);
        if (!m) { if (--left === 0) { fontCache[theme] = out.join('\n'); cb(fontCache[theme]); } return; }
        get(m[1], 'arraybuffer', function (buf) {
          if (buf) { out[idx] = blk.replace(m[1], 'data:font/woff2;base64,' + b64(buf)); } else { out[idx] = ''; }
          if (--left === 0) { fontCache[theme] = out.join('\n'); cb(fontCache[theme]); }
        });
      });
    });
  }
  function svgWithFonts(svg, cb) {
    fontCSS(S.theme, function (css) {
      if (!css) { cb(svg); return; }
      cb(svg.replace(/^(<svg[^>]*>)/, '$1<defs><style>' + css + '</style></defs>'));
    });
  }
  function fileBase() {
    var n = lastModel && !lastModel.sky ? lastModel.info.tl[0].t : 'sky-now';
    return (n + ' ' + (lastModel ? TYPES[lastModel.type || 'natal'].label : '')).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'chart';
  }
  function trigger(href, name) {
    try { var a = doc.createElement('a'); a.href = href; a.download = name; a.rel = 'noopener'; doc.body.appendChild(a); a.click(); setTimeout(function () { doc.body.removeChild(a); }, 400); } catch (e) { }
  }
  function openModal(title, html) {
    var m = $('cds-modal');
    $('cds-modal-title').textContent = title;
    $('cds-modal-body').innerHTML = html;
    m.hidden = false; m.setAttribute('aria-hidden', 'false');
    var c = $('cds-modal-close'); if (c) { c.focus(); }
  }
  function closeModal() { var m = $('cds-modal'); m.hidden = true; m.setAttribute('aria-hidden', 'true'); }

  function exportPNG() {
    if (!lastSVG) { return; }
    status('Preparing image...', '');
    svgWithFonts(lastSVG, function (svg) {
      var size = parseInt(S.exportSize, 10) || 2400;
      var img = new Image();
      img.onload = function () {
        try {
          var cv = doc.createElement('canvas'); cv.width = size; cv.height = size;
          var cx = cv.getContext('2d'); cx.drawImage(img, 0, 0, size, size);
          var url = cv.toDataURL('image/png');
          trigger(url, fileBase() + '.png');
          openModal('Chart image ready', '<p class="cds-small">Your download should start. On iPad or iPhone, press and hold the image and choose Save to Photos or Share.</p><img class="cds-modal-img" alt="Chart image" src="' + url + '">');
          status('Image ready (' + size + ' px square).', 'ok');
        } catch (e) { status('The image could not be made in this browser. Try the SVG export instead.', 'warn'); }
      };
      img.onerror = function () { status('The image could not be made in this browser. Try the SVG export instead.', 'warn'); };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  }
  function exportSVG() {
    if (!lastSVG) { return; }
    svgWithFonts(lastSVG, function (svg) {
      var blob, url;
      try { blob = new Blob([svg], { type: 'image/svg+xml' }); url = URL.createObjectURL(blob); trigger(url, fileBase() + '.svg'); } catch (e) { }
      openModal('Chart as SVG', '<p class="cds-small">SVG scales to any size for printing, slides and design apps. If the download did not start, copy the code below and save it as a .svg file.</p><button type="button" class="cds-btn cds-btn-q" id="cds-copy-svg">Copy SVG code</button><textarea class="cds-code" readonly id="cds-svg-code"></textarea>');
      $('cds-svg-code').value = svg;
      on($('cds-copy-svg'), 'click', function () { copyText(svg, 'SVG code copied.'); });
    });
  }
  function copyText(t, msg) {
    function fallback() {
      var ta = doc.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.top = '-1000px'; doc.body.appendChild(ta); ta.select();
      try { doc.execCommand('copy'); status(msg, 'ok'); } catch (e) { status('Copy was blocked by the browser.', 'warn'); }
      doc.body.removeChild(ta);
    }
    try { if (root.navigator.clipboard && root.navigator.clipboard.writeText) { root.navigator.clipboard.writeText(t).then(function () { status(msg, 'ok'); }, fallback); return; } } catch (e) { }
    fallback();
  }
  function positionsText() {
    if (!lastModel) { return ''; }
    var m = lastModel, lines = [], i;
    lines.push(m.info.tl.map(function (l) { return l.t; }).join(' | '));
    function add(ch, keys, title) {
      lines.push(''); lines.push(title);
      for (i = 0; i < keys.length; i++) { var p = ch.points[keys[i]]; if (!p) { continue; } var d = E.fmtDeg(p.lon); lines.push((NAMES[keys[i]] || keys[i]) + ': ' + d.deg + '°' + pad2(d.min) + '′ ' + d.signName + (m.hasHouses ? ', house ' + p.house : '') + (p.retro ? ', retrograde' : '')); }
    }
    var ik = m.innerKeys.slice(); if (m.hasHouses) { ik.push('ASC'); ik.push('MC'); }
    add(m.inner, ik, m.outer ? 'Inner wheel' : 'Positions');
    if (m.outer) { add(m.outer, m.outerKeys, 'Outer wheel: ' + TYPES[m.type].outer); }
    lines.push(''); lines.push('Aspects');
    for (i = 0; i < m.aspects.length; i++) { var a = m.aspects[i]; lines.push((NAMES[a.a] || a.a) + ' ' + a.name.toLowerCase() + ' ' + (NAMES[a.b] || a.b) + ' (orb ' + a.orb.toFixed(1) + '°)'); }
    return lines.join('\n');
  }
  function printSheet() {
    if (!lastSVG) { return; }
    var sh = $('cds-print');
    sh.innerHTML = '<div class="cds-pr-wheel">' + lastSVG + '</div><div class="cds-pr-tables">' + $('cds-out-positions').innerHTML + '<div class="cds-pr-grid">' + lastGrid + '</div></div>';
    doc.documentElement.className += ' cds-printing';
    var done = function () { doc.documentElement.className = doc.documentElement.className.replace(/\s*cds-printing/g, ''); };
    try { root.addEventListener('afterprint', function h() { done(); root.removeEventListener('afterprint', h); }); } catch (e) { }
    try { root.print(); } catch (e2) { status('Printing is not available here. Use the image or SVG export instead.', 'warn'); }
    setTimeout(done, 60000);
  }

  /* ---------- saved clients (Practitioner Center) ---------- */
  function fillClientPickers() {
    var slots = ['p1', 'p2'], i, j;
    for (i = 0; i < slots.length; i++) {
      var sel = $('cds-' + slots[i] + '-client'), wrap = $('cds-' + slots[i] + '-pickwrap');
      if (!sel || !wrap) { continue; }
      sel.innerHTML = '<option value="">Choose a saved client</option>';
      for (j = 0; j < HOST.clients.length; j++) {
        var c = HOST.clients[j], o = doc.createElement('option');
        o.value = String(j); o.textContent = c.name || ('Client ' + (j + 1)); sel.appendChild(o);
      }
      wrap.hidden = !HOST.clients.length;
    }
  }
  function loadClient(slot, c) {
    if (!c) { return; }
    var setv = function (id, v) { var e = $('cds-' + slot + '-' + id); if (e) { e.value = v; } };
    setv('name', c.name || '');
    if (c.y && c.mo && c.d) { setv('date', (c.y < 1000 ? ('000' + c.y).slice(-4) : c.y) + '-' + pad2(c.mo) + '-' + pad2(c.d)); }
    var unk = $('cds-' + slot + '-unknown'), known = !!c.timeKnown && c.h !== null && c.h !== undefined;
    if (unk) { unk.checked = !known; }
    var tm = $('cds-' + slot + '-time'); if (tm) { tm.disabled = !known; tm.value = known ? pad2(+c.h) + ':' + pad2(+(c.mi || 0)) : ''; }
    setv('offset', '');
    var lat = parseFloat(c.lat), lon = parseFloat(c.lon);
    if (!isNaN(lat) && !isNaN(lon) && c.tz && validZone(c.tz)) {
      setPlace(slot, { label: c.placeLabel || 'Saved birth place', lat: lat, lon: lon, zone: c.tz });
      var pi = $('cds-' + slot + '-place'); if (pi) { pi.value = c.placeLabel || ''; }
    } else { setPlace(slot, null); status('This client file has no saved coordinates. Choose the birth place to finish.', 'warn'); }
    updateOffsetNote(slot);
  }
  function configure(o) {
    o = o || {};
    HOST.clients = o.clients || [];
    HOST.brand = o.brand || '';
    HOST.current = o.current || null;
    if ($('cds-root') && $('cds-root').getAttribute('data-ready')) { fillClientPickers(); }
  }
  function clearAll() {
    places.p1 = null; places.p2 = null; places.ev = null;
    lastModel = null; lastSVG = ''; lastGrid = '';
    HOST.clients = []; HOST.current = null;
  }

  /* ---------- controls ---------- */
  function syncTypeUI() {
    var t = TYPES[S.type];
    $('cds-p2-box').hidden = !t.two;
    var evb = $('cds-ev-box');
    evb.hidden = !t.ev;
    if (t.ev) {
      $('cds-ev-datewrap').hidden = t.ev === 'year';
      $('cds-ev-yearwrap').hidden = t.ev !== 'year';
      $('cds-ev-timewrap').hidden = t.ev !== 'datetime';
      $('cds-ev-placewrap').hidden = !(t.ev === 'datetime' || t.ev === 'year' || t.ev === 'after');
      var lab = { datetime: 'Transits for this date and time', date: 'Progress the chart to this date', year: 'Solar return for this year', after: 'First lunar return after this date' }[t.ev];
      $('cds-ev-legend').textContent = lab;
      $('cds-ev-placelegend').textContent = S.type === 'transits' ? 'Location for the transit chart' : 'Location for the return chart (where the client will be)';
      if (!$('cds-ev-date').value) { var n = new Date(); $('cds-ev-date').value = n.getFullYear() + '-' + pad2(n.getMonth() + 1) + '-' + pad2(n.getDate()); }
      if (!$('cds-ev-time').value) { var n2 = new Date(); $('cds-ev-time').value = pad2(n2.getHours()) + ':' + pad2(n2.getMinutes()); }
      if (!$('cds-ev-year').value) { $('cds-ev-year').value = new Date().getFullYear(); }
    }
    $('cds-ev-placefields').hidden = $('cds-ev-same').checked;
    var chips = doc.querySelectorAll('#cds-types [data-type]'), i;
    for (i = 0; i < chips.length; i++) { chips[i].setAttribute('aria-pressed', chips[i].getAttribute('data-type') === S.type ? 'true' : 'false'); }
    $('cds-p1-legend').textContent = t.two ? 'First person' : 'Birth details';
  }
  function syncDesignUI() {
    var th = doc.querySelectorAll('[data-theme-pick]'), i;
    for (i = 0; i < th.length; i++) { th[i].setAttribute('aria-pressed', th[i].getAttribute('data-theme-pick') === S.theme ? 'true' : 'false'); }
    var map = { 'cds-opt-aspects': 'showAspects', 'cds-opt-degrees': 'showDegrees', 'cds-opt-housenums': 'showHouseNums', 'cds-opt-details': 'showDetails', 'cds-opt-tint': 'elementTint', 'cds-opt-minor': 'minor' }, k;
    for (k in map) { if (map.hasOwnProperty(k) && $(k)) { $(k).checked = !!S[map[k]]; } }
    for (i = 0; i < EXTRA.length; i++) { if ($('cds-pt-' + EXTRA[i])) { $('cds-pt-' + EXTRA[i]).checked = !!S.points[EXTRA[i]]; } }
    $('cds-houses').value = S.houseSystem; $('cds-zodiac').value = S.zodiac; $('cds-ayan').value = S.ayanamsa; $('cds-node').value = S.nodeType;
    $('cds-orb').value = String(S.orb); $('cds-brand').value = S.brand; $('cds-size').value = String(S.exportSize);
    $('cds-ayan-wrap').hidden = S.zodiac !== 'sidereal';
  }

  function fillSelects() {
    var hs = $('cds-houses'), ay = $('cds-ayan'), i, o;
    for (i = 0; i < E.HOUSE_SYSTEMS.length; i++) { o = doc.createElement('option'); o.value = E.HOUSE_SYSTEMS[i].key; o.textContent = E.HOUSE_SYSTEMS[i].name; hs.appendChild(o); }
    for (i = 0; i < E.AYANAMSAS.length; i++) { o = doc.createElement('option'); o.value = E.AYANAMSAS[i].key; o.textContent = E.AYANAMSAS[i].name; ay.appendChild(o); }
    var dl = $('cds-zones');
    try { if (dl && Intl.supportedValuesOf) { var zs = Intl.supportedValuesOf('timeZone'); for (i = 0; i < zs.length; i++) { o = doc.createElement('option'); o.value = zs[i]; dl.appendChild(o); } } } catch (e) { }
    var tc = $('cds-types'), k, b;
    for (k in TYPES) { if (TYPES.hasOwnProperty(k)) { b = doc.createElement('button'); b.type = 'button'; b.className = 'cds-chip'; b.setAttribute('data-type', k); b.textContent = TYPES[k].label; tc.appendChild(b); } }
    var themes = doc.querySelectorAll('.cds-themes'), j;
    for (j = 0; j < themes.length; j++) {
      for (k in R.THEMES) { if (R.THEMES.hasOwnProperty(k)) { b = doc.createElement('button'); b.type = 'button'; b.className = 'cds-theme'; b.setAttribute('data-theme-pick', k); b.innerHTML = '<span class="cds-sw cds-sw-' + k + '"></span>' + esc(R.THEMES[k].name); themes[j].appendChild(b); } }
    }
  }

  function wire() {
    on($('cds-types'), 'click', function (e) { var t = e.target; while (t && t !== this && !t.getAttribute('data-type')) { t = t.parentNode; } if (t && t.getAttribute && t.getAttribute('data-type')) { S.type = t.getAttribute('data-type'); syncTypeUI(); } });
    var thc = doc.querySelectorAll('.cds-themes'), i;
    for (i = 0; i < thc.length; i++) {
      on(thc[i], 'click', function (e) { var t = e.target; while (t && t !== this && !t.getAttribute('data-theme-pick')) { t = t.parentNode; } if (t && t.getAttribute && t.getAttribute('data-theme-pick')) { S.theme = t.getAttribute('data-theme-pick'); syncDesignUI(); saveSettings(); redraw(); } });
    }
    var toggles = { 'cds-opt-aspects': 'showAspects', 'cds-opt-degrees': 'showDegrees', 'cds-opt-housenums': 'showHouseNums', 'cds-opt-details': 'showDetails', 'cds-opt-tint': 'elementTint', 'cds-opt-minor': 'minor' }, k;
    for (k in toggles) { if (toggles.hasOwnProperty(k)) { (function (id, key) { on($(id), 'change', function () { S[key] = this.checked; saveSettings(); redraw(); }); })(k, toggles[k]); } }
    for (i = 0; i < EXTRA.length; i++) { (function (key) { on($('cds-pt-' + key), 'change', function () { S.points[key] = this.checked; saveSettings(); redraw(); }); })(EXTRA[i]); }
    on($('cds-houses'), 'change', function () { S.houseSystem = this.value; saveSettings(); redraw(); });
    on($('cds-zodiac'), 'change', function () { S.zodiac = this.value; syncDesignUI(); saveSettings(); redraw(); });
    on($('cds-ayan'), 'change', function () { S.ayanamsa = this.value; saveSettings(); redraw(); });
    on($('cds-node'), 'change', function () { S.nodeType = this.value; saveSettings(); redraw(); });
    on($('cds-orb'), 'change', function () { S.orb = parseFloat(this.value) || 1; saveSettings(); redraw(); });
    on($('cds-brand'), 'input', function () { S.brand = this.value.slice(0, 60); saveSettings(); redraw(); });
    on($('cds-size'), 'change', function () { S.exportSize = parseInt(this.value, 10) || 2400; saveSettings(); });
    on($('cds-ev-same'), 'change', syncTypeUI);
    on($('cds-draw'), 'click', calculate);
    on($('cds-form'), 'submit', function (e) { e.preventDefault(); calculate(); });
    on($('cds-x-png'), 'click', exportPNG);
    on($('cds-x-svg'), 'click', exportSVG);
    on($('cds-x-print'), 'click', printSheet);
    on($('cds-x-copy'), 'click', function () { copyText(positionsText(), 'Positions and aspects copied.'); });
    on($('cds-modal-close'), 'click', closeModal);
    on($('cds-modal'), 'click', function (e) { if (e.target === this) { closeModal(); } });
    on(doc, 'keydown', function (e) { if (e.keyCode === 27 && !$('cds-modal').hidden) { closeModal(); } });
    var slots = ['p1', 'p2'], s;
    for (s = 0; s < slots.length; s++) {
      (function (sl) {
        on($('cds-' + sl + '-date'), 'change', function () { updateOffsetNote(sl); });
        on($('cds-' + sl + '-time'), 'change', function () { updateOffsetNote(sl); });
        on($('cds-' + sl + '-unknown'), 'change', function () { $('cds-' + sl + '-time').disabled = this.checked; updateOffsetNote(sl); });
      })(slots[s]);
    }
    wirePlace('p1'); wirePlace('p2'); wirePlace('ev');
    var ps = ['p1', 'p2'], pj;
    for (pj = 0; pj < ps.length; pj++) {
      (function (sl) { on($('cds-' + sl + '-client'), 'change', function () { if (this.value !== '') { loadClient(sl, HOST.clients[parseInt(this.value, 10)]); } }); })(ps[pj]);
    }
    /* output tabs */
    var tabs = doc.querySelectorAll('#cds-outtabs [role=tab]');
    for (i = 0; i < tabs.length; i++) {
      on(tabs[i], 'click', function () {
        var j;
        for (j = 0; j < tabs.length; j++) { var sel = tabs[j] === this; tabs[j].setAttribute('aria-selected', sel ? 'true' : 'false'); tabs[j].tabIndex = sel ? 0 : -1; $(tabs[j].getAttribute('aria-controls')).hidden = !sel; }
      });
      on(tabs[i], 'keydown', function (e) {
        var list = Array.prototype.slice.call(tabs), idx = list.indexOf(this);
        if (e.keyCode === 39 || e.keyCode === 37) { e.preventDefault(); var nx = list[(idx + (e.keyCode === 39 ? 1 : list.length - 1)) % list.length]; nx.focus(); nx.click(); }
      });
    }
  }

  function start() {
    if (!$('cds-root') || $('cds-root').getAttribute('data-ready')) { return; }
    E = root.CDS_ENGINE; R = root.CDS_RENDER;
    if (!E || !R || !root.Astronomy) { return false; }
    $('cds-root').setAttribute('data-ready', '1');
    loadSettings();
    if (!S.brand && HOST.brand) { S.brand = HOST.brand.slice(0, 60); }
    fillSelects(); wire(); syncTypeUI(); syncDesignUI(); fillClientPickers();
    setPlace('p1', null); setPlace('p2', null); setPlace('ev', null);
    if (HOST.current) { loadClient('p1', HOST.current); var m = buildModel(); draw(m.error ? skyNowModel() : m); }
    else { draw(skyNowModel()); }
    status('', '');
    return true;
  }

  root.CDS_STUDIO = { start: start, configure: configure, clear: clearAll, loadClient: loadClient, state: S, places: places, setPlace: setPlace, calculate: calculate, positionsText: positionsText };
})(window);


(function (root) {
  'use strict';
  var MARKUP = "<div class=\"cds-wrap\" id=\"cds-root\">\n  <header class=\"cds-head\"><div>\n    <h2 class=\"cds-title\">Chart Design Station</h2>\n    <p class=\"cds-lede\">Calculate client charts in eight house systems, tropical or sidereal, then choose a design and export it at print quality for readings, reports and slides.</p>\n  </div></header>\n  <div class=\"cds-grid\">\n    <section class=\"cds-stage\" id=\"cds-stage\" aria-label=\"Chart\">\n      <div class=\"cds-stagebar\"><div class=\"cds-themes\" role=\"group\" aria-label=\"Chart design\"></div></div>\n      <div class=\"cds-fig\" id=\"cds-figure\"></div>\n      <p class=\"cds-cap\" id=\"cds-caption\"></p>\n      <div class=\"cds-export\">\n        <button type=\"button\" class=\"cds-btn\" id=\"cds-x-png\">Save image</button>\n        <button type=\"button\" class=\"cds-btn\" id=\"cds-x-svg\">SVG for print</button>\n        <button type=\"button\" class=\"cds-btn\" id=\"cds-x-print\">Print or PDF</button>\n        <button type=\"button\" class=\"cds-btn\" id=\"cds-x-copy\">Copy positions</button>\n      </div>\n      <p class=\"cds-status\" id=\"cds-status\" role=\"status\" aria-live=\"polite\"></p>\n      <div class=\"cds-tabs\" id=\"cds-outtabs\" role=\"tablist\" aria-label=\"Chart details\">\n        <button type=\"button\" class=\"cds-tab\" role=\"tab\" aria-selected=\"true\" aria-controls=\"cds-out-positions\" id=\"cds-tab-positions\">Positions</button>\n        <button type=\"button\" class=\"cds-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"-1\" aria-controls=\"cds-out-aspects\" id=\"cds-tab-aspects\">Aspects</button>\n        <button type=\"button\" class=\"cds-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"-1\" aria-controls=\"cds-out-houses\" id=\"cds-tab-houses\">Houses</button>\n        <button type=\"button\" class=\"cds-tab\" role=\"tab\" aria-selected=\"false\" tabindex=\"-1\" aria-controls=\"cds-out-balance\" id=\"cds-tab-balance\">Balance and patterns</button>\n      </div>\n      <div class=\"cds-out\" id=\"cds-out-positions\" role=\"tabpanel\" aria-labelledby=\"cds-tab-positions\"></div>\n      <div class=\"cds-out\" id=\"cds-out-aspects\" role=\"tabpanel\" aria-labelledby=\"cds-tab-aspects\" hidden></div>\n      <div class=\"cds-out\" id=\"cds-out-houses\" role=\"tabpanel\" aria-labelledby=\"cds-tab-houses\" hidden></div>\n      <div class=\"cds-out\" id=\"cds-out-balance\" role=\"tabpanel\" aria-labelledby=\"cds-tab-balance\" hidden></div>\n    </section>\n    <form id=\"cds-form\" novalidate aria-label=\"Chart details\">\n      <fieldset><legend>Chart type</legend><div class=\"cds-chips\" id=\"cds-types\"></div></fieldset>\n      \n    <fieldset id=\"cds-p1-box\"><legend id=\"cds-p1-legend\">Birth details</legend>\n      <label class=\"cds-field\" id=\"cds-p1-pickwrap\" hidden><span>Saved client</span><select id=\"cds-p1-client\"><option value=\"\">Choose a saved client</option></select></label>\n      <label class=\"cds-field\"><span>Name</span><input type=\"text\" id=\"cds-p1-name\" autocomplete=\"off\" maxlength=\"60\"></label>\n      <div class=\"cds-row\">\n        <label class=\"cds-field\"><span>Birth date</span><input type=\"date\" id=\"cds-p1-date\" min=\"1800-01-01\" max=\"2399-12-31\"></label>\n        <label class=\"cds-field\"><span>Birth time (local clock)</span><input type=\"time\" id=\"cds-p1-time\"></label>\n      </div>\n      <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-p1-unknown\"> Time unknown</label>\n      \n      <label class=\"cds-field\"><span>Birth place</span>\n        <div class=\"cds-search\"><input type=\"text\" id=\"cds-p1-place\" autocomplete=\"off\" placeholder=\"Start typing a city\" aria-describedby=\"cds-p1-chosen\"><button type=\"button\" class=\"cds-btn\" id=\"cds-p1-find\">Search</button></div>\n      </label>\n      <ul class=\"cds-results\" id=\"cds-p1-results\" aria-live=\"polite\"></ul>\n      <div class=\"cds-chosen\" id=\"cds-p1-chosen\"><span>No place chosen yet</span></div>\n      <details class=\"cds-manual\"><summary>Enter coordinates by hand</summary>\n        <div class=\"cds-row\">\n          <label class=\"cds-field\"><span>Latitude</span><input type=\"text\" id=\"cds-p1-lat\" inputmode=\"text\" placeholder=\"38.58 or 38N35\"></label>\n          <label class=\"cds-field\"><span>Longitude</span><input type=\"text\" id=\"cds-p1-lon\" inputmode=\"text\" placeholder=\"-121.49 or 121W29\"></label>\n        </div>\n        <label class=\"cds-field\"><span>Time zone</span><input type=\"text\" id=\"cds-p1-zone\" list=\"cds-zones\" placeholder=\"America/Los_Angeles\" autocomplete=\"off\"></label>\n        <button type=\"button\" class=\"cds-btn cds-btn-q\" id=\"cds-p1-apply\">Use these coordinates</button>\n      </details>\n      <div class=\"cds-tz\" id=\"cds-p1-tznote\" aria-live=\"polite\"></div>\n      <details class=\"cds-manual\"><summary>Override the UTC offset</summary>\n        <label class=\"cds-field\"><span>UTC offset at birth, if the record says otherwise</span><input type=\"text\" id=\"cds-p1-offset\" placeholder=\"-7, +5:30 or UTC-8\" autocomplete=\"off\"></label>\n      </details>\n    </fieldset>\n      \n    <fieldset id=\"cds-p2-box\" hidden><legend id=\"cds-p2-legend\">Second person</legend>\n      <label class=\"cds-field\" id=\"cds-p2-pickwrap\" hidden><span>Saved client</span><select id=\"cds-p2-client\"><option value=\"\">Choose a saved client</option></select></label>\n      <label class=\"cds-field\"><span>Name</span><input type=\"text\" id=\"cds-p2-name\" autocomplete=\"off\" maxlength=\"60\"></label>\n      <div class=\"cds-row\">\n        <label class=\"cds-field\"><span>Birth date</span><input type=\"date\" id=\"cds-p2-date\" min=\"1800-01-01\" max=\"2399-12-31\"></label>\n        <label class=\"cds-field\"><span>Birth time (local clock)</span><input type=\"time\" id=\"cds-p2-time\"></label>\n      </div>\n      <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-p2-unknown\"> Time unknown</label>\n      \n      <label class=\"cds-field\"><span>Birth place</span>\n        <div class=\"cds-search\"><input type=\"text\" id=\"cds-p2-place\" autocomplete=\"off\" placeholder=\"Start typing a city\" aria-describedby=\"cds-p2-chosen\"><button type=\"button\" class=\"cds-btn\" id=\"cds-p2-find\">Search</button></div>\n      </label>\n      <ul class=\"cds-results\" id=\"cds-p2-results\" aria-live=\"polite\"></ul>\n      <div class=\"cds-chosen\" id=\"cds-p2-chosen\"><span>No place chosen yet</span></div>\n      <details class=\"cds-manual\"><summary>Enter coordinates by hand</summary>\n        <div class=\"cds-row\">\n          <label class=\"cds-field\"><span>Latitude</span><input type=\"text\" id=\"cds-p2-lat\" inputmode=\"text\" placeholder=\"38.58 or 38N35\"></label>\n          <label class=\"cds-field\"><span>Longitude</span><input type=\"text\" id=\"cds-p2-lon\" inputmode=\"text\" placeholder=\"-121.49 or 121W29\"></label>\n        </div>\n        <label class=\"cds-field\"><span>Time zone</span><input type=\"text\" id=\"cds-p2-zone\" list=\"cds-zones\" placeholder=\"America/Los_Angeles\" autocomplete=\"off\"></label>\n        <button type=\"button\" class=\"cds-btn cds-btn-q\" id=\"cds-p2-apply\">Use these coordinates</button>\n      </details>\n      <div class=\"cds-tz\" id=\"cds-p2-tznote\" aria-live=\"polite\"></div>\n      <details class=\"cds-manual\"><summary>Override the UTC offset</summary>\n        <label class=\"cds-field\"><span>UTC offset at birth, if the record says otherwise</span><input type=\"text\" id=\"cds-p2-offset\" placeholder=\"-7, +5:30 or UTC-8\" autocomplete=\"off\"></label>\n      </details>\n    </fieldset>\n      \n    <fieldset id=\"cds-ev-box\" hidden><legend id=\"cds-ev-legend\">Date</legend>\n      <div class=\"cds-row\">\n        <label class=\"cds-field\" id=\"cds-ev-datewrap\"><span>Date</span><input type=\"date\" id=\"cds-ev-date\" min=\"1800-01-01\" max=\"2399-12-31\"></label>\n        <label class=\"cds-field\" id=\"cds-ev-timewrap\"><span>Time (local clock)</span><input type=\"time\" id=\"cds-ev-time\"></label>\n        <label class=\"cds-field\" id=\"cds-ev-yearwrap\" hidden><span>Year</span><input type=\"number\" id=\"cds-ev-year\" min=\"1800\" max=\"2399\" inputmode=\"numeric\"></label>\n      </div>\n      <div id=\"cds-ev-placewrap\">\n        <p class=\"cds-small\" id=\"cds-ev-placelegend\">Location</p>\n        <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-ev-same\" checked> Same as birth place</label>\n        <div id=\"cds-ev-placefields\" hidden>\n      <label class=\"cds-field\"><span>Location</span>\n        <div class=\"cds-search\"><input type=\"text\" id=\"cds-ev-place\" autocomplete=\"off\" placeholder=\"Start typing a city\" aria-describedby=\"cds-ev-chosen\"><button type=\"button\" class=\"cds-btn\" id=\"cds-ev-find\">Search</button></div>\n      </label>\n      <ul class=\"cds-results\" id=\"cds-ev-results\" aria-live=\"polite\"></ul>\n      <div class=\"cds-chosen\" id=\"cds-ev-chosen\"><span>No place chosen yet</span></div>\n      <details class=\"cds-manual\"><summary>Enter coordinates by hand</summary>\n        <div class=\"cds-row\">\n          <label class=\"cds-field\"><span>Latitude</span><input type=\"text\" id=\"cds-ev-lat\" inputmode=\"text\" placeholder=\"38.58 or 38N35\"></label>\n          <label class=\"cds-field\"><span>Longitude</span><input type=\"text\" id=\"cds-ev-lon\" inputmode=\"text\" placeholder=\"-121.49 or 121W29\"></label>\n        </div>\n        <label class=\"cds-field\"><span>Time zone</span><input type=\"text\" id=\"cds-ev-zone\" list=\"cds-zones\" placeholder=\"America/Los_Angeles\" autocomplete=\"off\"></label>\n        <button type=\"button\" class=\"cds-btn cds-btn-q\" id=\"cds-ev-apply\">Use these coordinates</button>\n      </details></div>\n      </div>\n    </fieldset>\n      <button type=\"submit\" class=\"cds-btn cds-btn-main\" id=\"cds-draw\">Draw chart</button>\n      <details class=\"cds-more\"><summary>Calculation settings</summary>\n        <div class=\"cds-row\">\n          <label class=\"cds-field\"><span>House system</span><select id=\"cds-houses\"></select></label>\n          <label class=\"cds-field\"><span>Zodiac</span><select id=\"cds-zodiac\"><option value=\"tropical\">Tropical</option><option value=\"sidereal\">Sidereal</option></select></label>\n        </div>\n        <div class=\"cds-row\">\n          <label class=\"cds-field\" id=\"cds-ayan-wrap\" hidden><span>Ayanamsa</span><select id=\"cds-ayan\"></select></label>\n          <label class=\"cds-field\"><span>Lunar nodes</span><select id=\"cds-node\"><option value=\"true\">True node</option><option value=\"mean\">Mean node</option></select></label>\n        </div>\n        <p class=\"cds-small\">Extra points</p>\n        <div class=\"cds-row\"><label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-pt-Chiron\"> Chiron</label><label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-pt-NNode\"> North Node</label><label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-pt-SNode\"> South Node</label><label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-pt-Lilith\"> Lilith (mean Black Moon)</label><label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-pt-Fortune\"> Part of Fortune</label><label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-pt-Vertex\"> Vertex</label></div>\n        <div class=\"cds-row\">\n          <label class=\"cds-field\"><span>Orbs</span><select id=\"cds-orb\"><option value=\"0.7\">Tight</option><option value=\"1\">Standard</option><option value=\"1.25\">Wide</option></select></label>\n          <div><p class=\"cds-small\">Aspects</p><label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-opt-minor\"> Include minor aspects</label></div>\n        </div>\n      </details>\n      <details class=\"cds-more\" open><summary>Design options</summary>\n        <div class=\"cds-themes\" role=\"group\" aria-label=\"Chart design\" style=\"margin:4px 0 10px\"></div>\n        <div class=\"cds-row\">\n          <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-opt-aspects\"> Aspect lines</label>\n          <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-opt-degrees\"> Degrees on the wheel</label>\n          <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-opt-housenums\"> House numbers</label>\n          <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-opt-tint\"> Element colors</label>\n          <label class=\"cds-check\"><input type=\"checkbox\" id=\"cds-opt-details\"> Chart details in the corners</label>\n        </div>\n        <label class=\"cds-field\"><span>Prepared by (your name or practice, printed on the chart)</span><input type=\"text\" id=\"cds-brand\" maxlength=\"60\" autocomplete=\"off\"></label>\n        <label class=\"cds-field\"><span>Image size</span><select id=\"cds-size\"><option value=\"1600\">1600 px, for screens</option><option value=\"2400\">2400 px, for reports</option><option value=\"3600\">3600 px, for large prints</option></select></label>\n      </details>\n    </form>\n  </div>\n  <div class=\"cds-modal\" id=\"cds-modal\" hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"cds-modal-title\">\n    <div class=\"cds-modal-card\"><div class=\"cds-modal-head\"><h3 id=\"cds-modal-title\">Export</h3><button type=\"button\" class=\"cds-btn cds-btn-q\" id=\"cds-modal-close\">Close</button></div><div id=\"cds-modal-body\"></div></div>\n  </div>\n  <div class=\"cds-print\" id=\"cds-print\"></div>\n  <datalist id=\"cds-zones\"></datalist>\n</div>", CSS = "/*\nVOICE: a calm scholar's drafting table for working practitioners\nIDEA: the astrolabe maker's bench, one instrument large, tools laid beside it\nPICTURE: the live chart wheel, drawn at full size\nCOLOUR and TYPE: AIA parchment, forest ink, turquoise and amethyst | Cinzel titles, EB Garamond text\nLAYOUT: wheel left and tools right on wide screens; title, wheel, tools stacked on narrow ones\n*/\n/* Squarespace Fluid Engine: let this block span the full section width and grow with its content */\n.fe-block:has(#cds-root):not(:has(#pc-root)){grid-column:2 / -2 !important;height:auto !important}\n.fe-block:has(#cds-root):not(:has(#pc-root)) .sqs-block,.fe-block:has(#cds-root):not(:has(#pc-root)) .sqs-block-content{height:auto !important}\n.cds-wrap{--cds-bg:#F4EFE4;--cds-card:#FBF8F1;--cds-ink:#16302A;--cds-soft:#5E5747;--cds-rule:#D6C9AC;--cds-brass:#8C6A2B;--cds-tq:#0E6058;--cds-am:#4E3F7A;--cds-cu:#A4552B;--cds-mist:#C9E1DD;\n  background:var(--cds-bg) !important;color:var(--cds-ink) !important;font-family:'EB Garamond',Garamond,Georgia,serif !important;font-size:17px;line-height:1.5;\n  padding:clamp(18px,3vw,40px) clamp(12px,3vw,40px);box-sizing:border-box;width:100%;max-width:1400px;margin:0 auto;border-radius:6px;overflow-x:clip}\n.cds-wrap *,.cds-wrap *::before,.cds-wrap *::after{box-sizing:border-box;min-width:0}\n.cds-wrap h2,.cds-wrap h3,.cds-wrap h4,.cds-wrap legend,.cds-wrap summary{font-family:'Cinzel','Trajan Pro',Georgia,serif !important;color:var(--cds-ink) !important;letter-spacing:0;text-transform:none}\n.cds-wrap p,.cds-wrap li,.cds-wrap label,.cds-wrap td,.cds-wrap th,.cds-wrap span,.cds-wrap input,.cds-wrap select,.cds-wrap button,.cds-wrap textarea{font-family:'EB Garamond',Garamond,Georgia,serif !important}\n.cds-head{display:flex;gap:16px;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;margin:0 0 18px;padding-bottom:14px;border-bottom:1px solid var(--cds-rule)}\n.cds-title{font-size:clamp(30px,4.2vw,46px) !important;line-height:1.05 !important;margin:0 0 6px !important;font-weight:700 !important;text-wrap:balance}\n.cds-lede{margin:0 !important;max-width:62ch;color:var(--cds-soft) !important;font-size:17px}\n.cds-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,400px);gap:clamp(16px,2.4vw,32px);align-items:start}\n@media (max-width:1000px){.cds-grid{grid-template-columns:minmax(0,1fr)}}\n.cds-stage{background:var(--cds-card) !important;border:1px solid var(--cds-rule);border-radius:8px;padding:clamp(10px,1.6vw,18px);box-shadow:0 1px 0 rgba(255,255,255,.7) inset,0 10px 30px -18px rgba(22,48,42,.35)}\n.cds-stagebar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between;margin-bottom:10px}\n.cds-themes{display:flex;flex-wrap:wrap;gap:6px}\n.cds-theme{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:6px 14px;border-radius:999px;border:1px solid var(--cds-rule);background:#fff !important;color:var(--cds-ink) !important;font-size:16px;cursor:pointer}\n.cds-theme[aria-pressed=true]{border-color:var(--cds-ink);background:var(--cds-ink) !important;color:#F4EFE4 !important}\n.cds-sw{width:18px;height:18px;border-radius:50%;flex:none;border:1px solid rgba(0,0,0,.25)}\n.cds-sw-astrolabe{background:conic-gradient(#A4552B 0 25%,#2F5D46 0 50%,#4E3F7A 0 75%,#0E6058 0)}\n.cds-sw-classic{background:conic-gradient(#C8322A 0 25%,#2E7D32 0 50%,#E0A800 0 75%,#1E63B5 0)}\n.cds-sw-modern{background:radial-gradient(circle,#FAFAF7 0 38%,#1C1C1E 40% 46%,#FAFAF7 48%)}\n.cds-sw-print{background:repeating-linear-gradient(45deg,#000 0 2px,#fff 2px 5px)}\n.cds-fig{position:relative;width:100%;aspect-ratio:1/1;border-radius:6px;overflow:hidden;background:#fff}\n.cds-fig svg{position:absolute;inset:0;width:100%;height:100%;display:block}\n.cds-cap{margin:10px 2px 0 !important;color:var(--cds-soft) !important;font-size:15px}\n.cds-export{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}\n.cds-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:8px 16px;border-radius:6px;border:1px solid var(--cds-ink);background:#fff !important;color:var(--cds-ink) !important;font-size:16px;cursor:pointer;text-decoration:none}\n.cds-btn:hover{background:var(--cds-mist) !important}\n.cds-btn-main{width:100%;background:var(--cds-tq) !important;border-color:var(--cds-tq);color:#fff !important;font-size:18px;font-weight:600;margin:6px 0 14px}\n.cds-btn-main:hover{background:#0B4F48 !important}\n.cds-btn-q{min-height:40px;font-size:15px}\n.cds-wrap button:focus-visible,.cds-wrap input:focus-visible,.cds-wrap select:focus-visible,.cds-wrap summary:focus-visible,.cds-wrap textarea:focus-visible{outline:3px solid var(--cds-am);outline-offset:2px}\n.cds-status{min-height:1.5em;margin:8px 2px 0 !important;font-size:16px}\n.cds-status.cds-warn{color:#8A2E12 !important}\n.cds-status.cds-ok{color:var(--cds-tq) !important}\n.cds-tabs{display:flex;gap:4px;margin-top:16px;border-bottom:1px solid var(--cds-rule);overflow-x:auto}\n.cds-tab{min-height:44px;padding:8px 14px;border:0;border-bottom:3px solid transparent;background:transparent !important;color:var(--cds-soft) !important;font-size:16px;cursor:pointer;flex:none}\n.cds-tab[aria-selected=true]{color:var(--cds-ink) !important;border-bottom-color:var(--cds-cu);font-weight:600}\n.cds-out{padding:12px 2px 4px}\n.cds-out h4{font-size:16px !important;margin:14px 0 6px !important;font-weight:600 !important}\n.cds-scroll{overflow-x:auto}\n.cds-table{width:100%;border-collapse:collapse;font-size:16px}\n.cds-table th{text-align:left;font-weight:600;color:var(--cds-soft) !important;border-bottom:1px solid var(--cds-rule);padding:6px 8px;font-size:15px}\n.cds-table td{border-bottom:1px solid rgba(214,201,172,.55);padding:6px 8px;vertical-align:middle}\n.cds-table .cds-num{white-space:nowrap;font-variant-numeric:tabular-nums}\n.cds-gcell{white-space:nowrap}\n.cds-gl{vertical-align:-3px}\n.cds-gl-txt{display:inline-block;min-width:20px;font-weight:700;font-size:13px}\n.cds-small{font-size:15px;color:var(--cds-soft) !important;margin:6px 0 !important}\n.cds-gridwrap{overflow-x:auto;border:1px solid var(--cds-rule);border-radius:6px;background:#fff}\n.cds-gridwrap svg{display:block;width:100%;max-width:720px;height:auto}\n.cds-bal{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:4px 24px}\n.cds-bar{display:grid;grid-template-columns:7.5em minmax(0,1fr) 1.6em;gap:8px;align-items:center;font-size:15px;margin:3px 0}\n.cds-bar-t{height:9px;background:rgba(214,201,172,.45);border-radius:5px;overflow:hidden}\n.cds-bar-t span{display:block;height:100%;background:var(--cds-tq);border-radius:5px}\n.cds-bar-n{text-align:right;font-variant-numeric:tabular-nums}\n.cds-list{margin:4px 0 0;padding-left:1.1em}\n.cds-list li{margin:3px 0}\n#cds-form{background:var(--cds-card) !important;border:1px solid var(--cds-rule);border-radius:8px;padding:clamp(12px,1.8vw,20px)}\n.cds-wrap fieldset{border:0;border-top:1px solid var(--cds-rule);margin:0 0 6px;padding:12px 0 6px}\n.cds-wrap fieldset:first-child{border-top:0;padding-top:0}\n.cds-wrap legend{font-size:17px !important;font-weight:600 !important;padding:0;margin-bottom:8px}\n.cds-chips{display:flex;flex-wrap:wrap;gap:6px}\n.cds-chip{min-height:40px;padding:6px 12px;border-radius:999px;border:1px solid var(--cds-rule);background:#fff !important;color:var(--cds-ink) !important;font-size:15px;cursor:pointer}\n.cds-chip[aria-pressed=true]{background:var(--cds-am) !important;border-color:var(--cds-am);color:#fff !important}\n.cds-field{display:block;margin:0 0 10px}\n.cds-field>span{display:block;font-size:15px;color:var(--cds-soft) !important;margin-bottom:3px}\n.cds-wrap input[type=text],.cds-wrap input[type=date],.cds-wrap input[type=time],.cds-wrap input[type=number],.cds-wrap select{width:100%;min-height:44px;padding:8px 10px;font-size:16px !important;border:1px solid #BFB193;border-radius:6px;background:#fff !important;color:var(--cds-ink) !important;-webkit-appearance:none;appearance:none}\n.cds-wrap select{background-image:linear-gradient(45deg,transparent 50%,#16302A 50%),linear-gradient(135deg,#16302A 50%,transparent 50%) !important;background-position:calc(100% - 18px) 55%,calc(100% - 12px) 55% !important;background-size:6px 6px !important;background-repeat:no-repeat !important;padding-right:30px}\n.cds-wrap input:disabled{opacity:.5}\n.cds-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px}\n.cds-check{display:flex;align-items:center;gap:8px;min-height:40px;font-size:16px;cursor:pointer}\n.cds-check input{width:20px;height:20px;accent-color:var(--cds-tq);flex:none}\n.cds-search{display:flex;gap:6px}\n.cds-search input{flex:1}\n.cds-search .cds-btn{flex:none}\n.cds-results{list-style:none;margin:6px 0 0;padding:0;max-height:260px;overflow-y:auto}\n.cds-result{display:flex;flex-direction:column;align-items:flex-start;width:100%;min-height:44px;padding:6px 10px;margin:0 0 4px;border:1px solid var(--cds-rule);border-radius:6px;background:#fff !important;color:var(--cds-ink) !important;text-align:left;cursor:pointer;font-size:16px}\n.cds-result span{font-size:13px;color:var(--cds-soft) !important}\n.cds-result:hover{background:var(--cds-mist) !important}\n.cds-note-li{font-size:14px;color:var(--cds-soft);padding:2px 2px 6px}\n.cds-chosen{margin:8px 0;padding:8px 10px;border-radius:6px;background:rgba(201,225,221,.35) !important;font-size:15px;display:flex;flex-direction:column}\n.cds-chosen span{color:var(--cds-soft) !important;font-size:14px}\n.cds-chosen.cds-has{background:rgba(201,225,221,.8) !important}\n.cds-tz{font-size:14.5px;color:var(--cds-soft);margin:4px 0 6px;line-height:1.45}\n.cds-tz strong{color:var(--cds-ink)}\n.cds-warn-t{color:#8A2E12}\n.cds-inline{display:inline-flex;align-items:center;gap:6px;margin-left:4px}\n.cds-more{border-top:1px solid var(--cds-rule);padding:10px 0 2px}\n.cds-more summary{cursor:pointer;font-size:16px !important;font-weight:600 !important;min-height:40px;display:flex;align-items:center}\n.cds-manual{margin-top:6px;font-size:15px}\n.cds-manual summary{font-family:'EB Garamond',Garamond,Georgia,serif !important;font-weight:400 !important;font-size:15px !important;color:var(--cds-tq) !important;cursor:pointer;min-height:36px;display:flex;align-items:center}\n.cds-modal{position:fixed;inset:0;z-index:99999;background:rgba(22,48,42,.55);display:flex;align-items:center;justify-content:center;padding:16px}\n.cds-modal[hidden]{display:none}\n.cds-modal-card{background:var(--cds-card) !important;color:var(--cds-ink) !important;border-radius:10px;max-width:720px;width:100%;max-height:92vh;overflow:auto;padding:18px}\n.cds-modal-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px}\n.cds-modal-head h3{margin:0 !important;font-size:20px !important}\n.cds-modal-img{width:100%;height:auto;border:1px solid var(--cds-rule);border-radius:6px;margin-top:8px}\n.cds-code{width:100%;height:180px;font-family:'Courier New',monospace !important;font-size:12px;margin-top:8px;border:1px solid var(--cds-rule);border-radius:6px;padding:8px}\n.cds-print{display:none}\n@media print{\n  html.cds-printing body *{visibility:hidden !important}\n  html.cds-printing .cds-print,html.cds-printing .cds-print *{visibility:visible !important}\n  html.cds-printing .cds-print{display:block !important;position:absolute;left:0;top:0;width:100%;background:#fff;color:#000;font-family:'EB Garamond',Georgia,serif}\n  .cds-pr-wheel svg{width:100%;height:auto;display:block;page-break-after:always}\n  .cds-pr-tables h4{font-family:'Cinzel',Georgia,serif;margin:10px 0 4px}\n  .cds-pr-tables table{width:100%;border-collapse:collapse;font-size:12pt}\n  .cds-pr-tables td,.cds-pr-tables th{border-bottom:1px solid #bbb;padding:3px 6px;text-align:left}\n  .cds-pr-grid svg{width:100%;max-width:7in;height:auto;margin-top:12px}\n}\n@media (max-width:600px){.cds-row{grid-template-columns:minmax(0,1fr)}.cds-theme{padding:6px 11px;font-size:15px}.cds-table{font-size:15px}}\n@media (prefers-reduced-motion:reduce){.cds-wrap *{transition:none !important;animation:none !important}}\n", FONTS = "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=EB+Garamond:wght@400;500;600;700&family=Jost:wght@400;600;700&display=swap", AE = "https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js";
  function ensureHead() {
    var d = root.document;
    if (!d.getElementById('cds-style')) {
      var st = d.createElement('style'); st.id = 'cds-style'; st.textContent = CSS; (d.head || d.documentElement).appendChild(st);
      var lk = d.createElement('link'); lk.rel = 'stylesheet'; lk.href = FONTS; (d.head || d.documentElement).appendChild(lk);
    }
    if (!root.Astronomy && !d.getElementById('cds-ae')) {
      var s = d.createElement('script'); s.id = 'cds-ae'; s.src = AE; s.async = true; (d.head || d.documentElement).appendChild(s);
    }
  }
  function mount(el, opts) {
    if (!el) { return; }
    ensureHead();
    el.innerHTML = MARKUP;
    if (root.CDS_STUDIO) { root.CDS_STUDIO.configure(opts || {}); }
    var tries = 0;
    (function go() { if (root.CDS_STUDIO && root.CDS_STUDIO.start() !== false) { return; } if (++tries < 300) { setTimeout(go, 100); } })();
  }
  root.CDS_MOUNT = mount;
  function auto() { var el = root.document.getElementById('cds-mount'); if (el && !el.getAttribute('data-host') && !el.firstChild) { mount(el, {}); } }
  if (root.document.readyState === 'loading') { root.document.addEventListener('DOMContentLoaded', auto); } else { auto(); }
  root.addEventListener('mercury:load', auto);
})(window);
