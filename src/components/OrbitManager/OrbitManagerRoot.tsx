import { Box } from "grommet";
import React from "react";

interface IProps {}
export function OrbitManagerRoot(props: IProps) {
  return (
    <Box
      //background={"red"}
      fill="vertical"
      style={{ position: "fixed", top: 55, left: 15, width: 500 }}
    >
      <div> hi</div>
      <div style={{ overflow: "auto", position: "relative" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non euismod
        nisl. Suspendisse ullamcorper, risus ac congue auctor, nunc eros
        tincidunt ligula, nec dignissim magna tortor at urna. Fusce pulvinar,
        leo blandit pretium volutpat, tortor sapien consectetur erat, in blandit
        eros orci et ipsum. Maecenas massa quam, pellentesque non interdum et,
        pretium eu ante. Mauris ultricies metus pretium magna lobortis suscipit.
        Nunc eros ipsum, pretium ac imperdiet sit amet, ullamcorper quis augue.
        Aliquam malesuada fermentum velit sit amet maximus. Nulla facilisi.
        Praesent eget mauris consequat neque placerat venenatis. Duis vitae dui
        ut arcu congue porta quis a augue. Maecenas vestibulum augue eu risus
        venenatis dictum. Mauris id mauris dolor. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Vestibulum hendrerit sit amet magna non
        dignissim. Proin et augue lorem. Maecenas rhoncus elit in lectus gravida
        scelerisque. Nam non velit malesuada, blandit quam quis, ornare leo. Sed
        pulvinar tellus a vulputate semper. Pellentesque eros purus, consequat
        ac laoreet in, fermentum et nisl. Donec volutpat non ex sit amet
        pretium. Vestibulum finibus tempus leo, eu cursus sem tempus eget. Morbi
        nunc sapien, convallis eu placerat id, semper quis turpis. Fusce congue
        orci in tellus commodo vulputate. Nulla placerat tempus eleifend. Nunc
        hendrerit congue justo sit amet sollicitudin. Aenean nulla erat, lacinia
        in sagittis ut, iaculis ut nibh. Integer ut diam mauris. Vestibulum a
        ullamcorper ipsum. Vestibulum elementum non mauris ac tempor. Vivamus
        volutpat tristique lacus ac posuere. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Vivamus iaculis sagittis turpis a tincidunt. Sed
        tincidunt eleifend porttitor. Nullam sit amet nibh lacus. Aliquam
        facilisis purus sed ullamcorper lobortis. Integer tempus augue at mi
        placerat, sagittis mattis nisl auctor. Nunc tincidunt enim lorem, eget
        blandit mi accumsan eu. Suspendisse volutpat dictum nunc, in ornare nisl
        aliquet nec. Aenean dignissim leo ut felis iaculis commodo. Vestibulum
        eget sodales risus, id sagittis urna. Nunc mattis metus eu enim cursus,
        id aliquam sem imperdiet. Aliquam non nisi maximus urna volutpat
        imperdiet sit amet et libero. Vivamus aliquam magna ac neque porttitor,
        vitae viverra risus dignissim. Nam id facilisis lacus. Duis vitae ex
        sagittis, posuere ex sit amet, venenatis justo. Nulla ultricies auctor
        nisi, eget eleifend sapien vestibulum ac. Proin at finibus purus, non
        facilisis nibh. Aliquam dapibus vestibulum gravida. Morbi nisl turpis,
        condimentum sodales pellentesque nec, condimentum id eros. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat quam
        nec cursus bibendum. Pellentesque elit quam, luctus ac tempor non,
        dictum non elit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Phasellus lacinia porttitor
        porttitor. Phasellus vel massa lacus. Nulla facilisi. Ut vitae libero
        vitae ligula egestas porta sit amet a libero. Vestibulum id sapien
        ligula. Donec convallis ex pellentesque ex hendrerit, in scelerisque sem
        rutrum. Donec vitae erat convallis, fringilla sapien ac, tincidunt
        velit. In commodo felis ac ultricies elementum. Duis at tellus sem.
      </div>
    </Box>
  );
}
