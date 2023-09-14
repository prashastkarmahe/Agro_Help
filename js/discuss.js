<script type="text/javascript">
   $(document).ready(function () {
      $("#queryForm").submit(function (e) {
         e.preventDefault();

         // Get form input values
         const name = $("#name").val();
         const subject = $("#subject").val();
         const query = $("#query").val();

         // Create the query HTML to be appended to the queryList
         const queryHTML = `
            <div class="col-md-6 offset-md-3">
               <div class="query-card">
                  <h4>Name: ${name}</h4>
                  <p>Subject: ${subject}</p>
                  <p>Query: ${query}</p>
               </div>
            </div>
         `;

         // Append the query to the queryList
         $("#queryList").append(queryHTML);

         // Clear the form inputs after submission
         $("#name").val("");
         $("#subject").val("");
         $("#query").val("");
      });
   });
</script>
