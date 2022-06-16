new Vue({
    el: "#app",
    mounted() {
      this.update()
    },
    data() {
      return {
        messages: [],
        messageInput: "Enter your message",
      };
    },
    methods: {
      postMessage() {
        fetch("/api/post?message=" + this.messageInput)
        this.update()
      },
      update() {
        fetch("/api/messages")
            .then((res) => res.json())
            .then((messages) => this.messages = messages)
            .catch((err) => console.error(err));
      }
    }
  });
  