$.ajax({
  url: "your-destination.com/checkin",
  type: "POST",
  data: container,
  processData: false,
  contentType: false,
  success: function (data) {
    alert("Посылка успешно доставлена! Пришло время развлекаться!");
  },
});
