        /*jshint esversion: 6 */
        const AD1 = () => {
            "use strict";
            const container = document.querySelector('.container');
            const myBtnContainer = document.querySelector('#myBtnContainer');
            const linkBlock = document.querySelector('.links_block');
            const back = document.querySelector('.back');
            const actualLinksBlock = document.querySelector('.actual_links_block');
            const blocks = document.querySelectorAll('.block');

            const links = document.querySelectorAll('.link');

            blocks.forEach((singleBlock, index) => {
                const singleBlockHeight = singleBlock.scrollHeight;
                //singleBlock.style.maxHeight = singleBlockHeight;
            });

            //When Back Button got Clicked
            const backBtn = () => {
                back.addEventListener('click', () => {
                    //Back Button
                    back.style.transform = 'translate3d(-150%, 0, 0)';

                    // Lower Block
                    blocks.forEach(block => {
                        block.classList.remove('lowerSlide');
                    });
                    actualLinksBlock.style.zIndex = 1;

                    //Upper Block
                    linkBlock.classList.remove('slide');
                    myBtnContainer.style.zIndex = 2;
                });
            }
            backBtn();

            links.forEach(link => {

                link.addEventListener('click', () => {

                    //Tab functionality
                    let attr = link.getAttribute("data-tab");

                    blocks.forEach(block => {
                        if (block.id === attr) {
                            myBtnContainer.style.zIndex = 1;
                            linkBlock.classList.add('slide');
                            block.classList.add('lowerSlide');
                            back.style.transform = 'translate3d(0, 0, 0)';
                        }
                    });

                    //LInks Active/Deactive class
                    links.forEach(el => el.classList.remove('active'));
                    link.classList.add('active');
                });
            });
        };

        //Call the function
        AD1();
        //    const img = document.getElementById('img');
        //
        //    window.addEventListener('load', async e => {
        //
        //        let targetUrl = 'https://chiranjit2020.github.io/docs-resourses/logo-white.png';
        //
        //        const result = await fetch(targetUrl, {
        //            headers: {
        //                'content-type': 'application/json'
        //            },
        //            mode: 'no-cors'
        //        });
        //        //const result = await fetch("http://localhost:3000/logo-white.png");
        //        const blob = await result.blob();
        //        img.src = URL.createObjectURL(blob);
        //
        //
        //    });
