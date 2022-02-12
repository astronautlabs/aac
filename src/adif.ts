import { BitstreamElement, Field } from '@astronautlabs/bitstream';

export class Sequence extends BitstreamElement {
    @Field() header : Header;
}

export class Header extends BitstreamElement {

}