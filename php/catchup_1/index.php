<h1>Simple float example</h1>

<style>

body{

    width: 90%;
    max-width:900px;
    margin: 0 auto;
    font: .9em/1.2 Arial, Helvetica, sans-serif

}

.box{
    
    float: left;
    margin: 15px;
    width:150px;
    height:100px;
    border-radius: 5px;
    background-color: rgb(207,232,220);
    padding: 1em;

}

.special{

    background-color: rgb(79,185,227);
    padding: 10px;
    color: #fff;

}

.wrapper{

    background-color: rgb(79,185,227);
    padding: 10px;
    color: #fff;
    /* overflow: auto; */
    display: flow-root;

}

/* .wrapper::after {

    content: "";
    clear: both;
    display: block;

} */

.cleared{

    clear: left;

}

</style>

<div class="wrapper">

<div class="box">Float</div>

<p class="special">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. </p>

</div>

    
<p class="cleared">Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
