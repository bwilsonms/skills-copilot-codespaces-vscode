function skillsMember() {
    this.name = 'skillsMember';
    this.params = {
        id: {
            name: 'id',
            required: true,
            type: 'string',
            location: 'uri',
            description: 'member id'
        },
        skills: {
            name: 'skills',
            required: true,
            type: 'array',
            location: 'body',
            description: 'skills'
        }
    };
}