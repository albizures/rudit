import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посерьёзнеть: PerfectVerb = {
  name: Word('посерьёзнеть', 3),
  singular1stPerson: Word('посерьёзнею', 3),
  singular2ndPerson: Word('посерьёзнеешь', 3),
  singular3rdPerson: Word('посерьёзнеет', 3),
  plural1stPerson: Word('посерьёзнеем', 3),
  plural2ndPerson: Word('посерьёзнеете', 3),
  plural3rdPerson: Word('посерьёзнеют', 3),
  masculinePast: Word('посерьёзнел', 3),
  femininePast: Word('посерьёзнела', 11),
  neuterPast: Word('посерьёзнело', 3),
  pluralPast: Word('посерьёзнели', 3),
  imperativeInformal: Word('посерьёзней', 3),
  imperativeFormal: Word('посерьёзнейте', 3),
  imperfect: [],
};

perfectVerbs.set(посерьёзнеть.name.text, посерьёзнеть);

export { посерьёзнеть };