<template>

  <main>

    <section class="sect_zone_1">

        <h3 class="sect_head_1">Тест методов http</h3>

        <section class="sect_sub_1">

            <button class="button_main_1" @click="getTest()">GET</button>
			
            <button class="button_main_1" @click="postTest();">POST</button>

            <button class="button_main_1" @click="putTest();">PUT</button>
                
            <button class="button_main_1" @click="patchTest();">PATCH</button>

            <button class="button_main_1" @click="deleteTest();">DELETE</button>

        </section>

        <form class="form_1">

            <section class="form_sub_1">
                <label class="label_1">userId</label>
                <input type="number" class="inp_1" id="userIdInp" v-model="userId">
            </section>

            <!-- <section class="form_sub_1">
                <label class="label_1">id</label>
                <input type="number" class="inp_1" id="idInp">
            </section> -->

            <section class="form_sub_1">
                <label class="label_1">title</label>
                <input type="text" class="inp_1" id="titleInp" v-model="title">
            </section>

            <section class="form_sub_1">
                <label class="label_1">body</label>
                <input type="text" class="inp_1" id="bodyInp" v-model="body">
            </section>

        </form>

        <section class="cont_1" id="container_1" title="Вывод">{{outPutText}}</section>

    </section>

</main>
</template>

<script>

// let testUrl1 = "https://jsonplaceholder.typicode.com/posts";
let testUrl2 = "https://httpbin.org/";

export default {
    data()
    {
        return {
            outPutText: "Вывод",
            userId: "32",
            title: "dewioj",
            body: "kopde3",
        };
    },

    methods:
    {
        getTest()
        {
            fetch(testUrl2 + "get").then((resp) => {

            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }

            return resp.text();

            }).then((data) => {
            this.outPutText = "Метод GET:\n\n" + data;
            }).catch((error) => {
                console.error('Fetch error:', error);
            });

            // fetch(testUrl).then(resp => {

            //     if (!resp.ok)
            //     {
            //         throw new Error("Network response was not ok");
            //     }
            //     return resp.text();
            // }).then(data => this.outPutText = "Метод GET:\n\n" + data).catch(error => console.error("There was a problem with the fetch operation:", error));
        },

        postTest()
        {
            fetch(testUrl2 + "post", {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ userId: this.userId, title: this.title, body: this.body }),

            }).then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.text();
            }).then((data) => {
                this.outPutText = "Метод POST:\n\n" + data;
            }).catch((error) => {
                console.error('Fetch error:', error);
            });
        },

        putTest()
        {
            fetch(testUrl2 + "put", {

            method: 'PUT',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ userId: this.userId, title: this.title, body: this.body }),

            }).then((resp) => {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.text();
            }).then((data) => {
            this.outPutText = "Метод PUT:\n\n" + data;
            }).catch((error) => {
            console.error('Fetch error:', error);
            });
        },

        patchTest()
        {
            fetch(testUrl2 + "patch", {

            method: 'PATCH',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ userId: this.userId, title: this.title, body: this.body }),

            }).then((resp) => {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.text();
            }).then((data) => {
            this.outPutText = "Метод PATCH:\n\n" + data;
            }).catch((error) => {
            console.error('Fetch error:', error);
            });
        },

        deleteTest()
        {
            fetch(testUrl2 + "delete", {

                method: 'DELETE',

            }).then((resp) => {

                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }

                return resp.text();

            }).then((data) => {

                this.outPutText = "Метод DELETE:\n\n" + data;

            }).catch((error) => {

                console.error('Fetch error:', error);

            });
        },
    }
    
};

</script>

<style src="../css/indexApi3.css"></style>