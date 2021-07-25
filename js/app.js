
const app = Vue.createApp({
    data(){
        return {
            date: '',
            hours: 0,
            project:'',
            aType: '',
            description: '',
            client:'',
            image: 'images/project-manager.png',
            projects: [{id:1, name:'Vue Js mentoring program'}, {id:2, name:'Arvig'}],
            assignmentTypes:[{id: 100, name: 'Vue Js trainning'}, {id: 21, name: 'Account Management'}, {id: 6, name: 'Administration'},
                {id: 31, name: 'Applicants Sourcing'}, {id: 7, name: 'Call Center'}, {id: 34, name: 'Coding Challenges Review'},
                {id: 11, name: 'Communication (newsletter, notas, etc)'}, {id: 15, name: 'Configuration Management'}, {id: 17, name: 'Data Entry'},
                {id: 14, name: 'DBA'}, {id: 30, name: 'Executive Headhunting'}, {id: 25, name: 'Facilities'}, {id: 29, name: 'Farming - Staffing Hero'},
                {id: 23, name: 'Finance'}, {id: 22, name: 'Help Desk/Support'}, {id: 45, name: 'High Performance Program'},
                {id: 27, name: 'Human Resources'}, {id: 16, name: 'Infrastructure/Hardware'}, {id: 5, name: 'Management'},
                {id: 20, name: 'Marketing'}, {id: 43, name: 'Mentoring'}, {id: 38, name: 'On Boarding &amp; Training'},
                {id: 39, name: 'On Call Duties'}, {id: 41, name: 'Presales'}, {id: 2, name: 'Recruitment'}, {id: 8, name: 'Reports Generation'},
                {id: 19, name: 'Sales'}, {id: 37, name: 'Sales Support'}, {id: 9, name: 'Sin tareas asignadas / Idle'},
                {id: 1, name: 'Software Development'}, {id: 36, name: 'Sourcing'}, {id: 44, name: 'Sourcing Weekend Shift / OT Hours'},
                {id: 24, name: 'Staffing'}, {id: 32, name: 'Technical Interviews'}, {id: 42, name: 'Technical Interviews'},
                {id: 33, name: 'Test Review'}, {id: 13, name: 'Testing'}, {id: 4, name: 'Training'}, {id: 10, name: 'UI/UX/Graphic Design'}],
            clients: ["Jonathan Chavez", "Victor Antunes"],
            tasks:[
                {date:'2021-01-01', project:"Arvig", hours: '8', aType:"Sourcing", description: 'Initial Row #01 for testing', client:"Victor Antunes"},
                {date:'2021-01-01', project:"Vue Js mentoring program", hours: '2', aType:"Vue Js trainning", description: 'Row #02 for testing purposes', client:"Jonathan Chavez"},
                {date:'2021-01-01', project:"Arvig", hours: '4', aType:"Vue Js trainning", description: 'Description goes here', client:"Jonathan Chavez"}

            ]
        }
    },
    methods: {
        addTask(){
            this.tasks.push({date:this.date, project:this.project.name, hours: this.hours, aType: this.aType.name,
                description: this.description, client:this.client});
                this.aType = '';
                this.description = '';
        }
    },
    computed: {
        displayRole(){
            if (this.client==='Jonathan Chavez'){
                return 'images/training.png';
            } else if (this.client==='Victor Antunes') {
                return 'images/project-manager.png';
            }
            return 'images/welcome.jpg'
        },
        //In 3.x, filters are removed and no longer supported in the same way that 2.x
    }
});


app.config.globalProperties.$filters = {
    previewDescription(value) {
        if (value.length>70){
            return value.substring(0,70) + "...";
        }
        return value;
    }
}

app.component('task-row', {
    props: {
        task: Object,
    },
    template:
    `<tr>
        <td>{{task.date}}</td>
        <td>{{task.hours}}</td>
        <td>{{task.project}}</td>
        <td>{{task.aType}}</td>
        <td>{{task.description}}</td>
        <td>{{task.client}}</td>
    </tr>
    `
});


app.component('table-tasks', {
    props: {
        tasks: Object,
    },
    template:
    `<table class="tasks">
        <thead>
            <tr>
                <th>Date</th>
                <th>Hours</th>
                <th>Project</th>
                <th>Assignment Type</th>
                <th>Description</th>
                <th>Client</th>
            </tr>
        </thead>
        <tbody>
            <tr is="vue:task-row" :key="index" v-for="(task, index) in tasks" :task="task"></tr>
        </tbody>
    </table>
    `
});

app.mount('#TrackerApp');