import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посерьёзнеть: PerfectVerb = {
  name: Word('посерьёзнеть', 6),
  singular1stPerson: Word('посерьёзнею', 6),
  singular2ndPerson: Word('посерьёзнеешь', 6),
  singular3rdPerson: Word('посерьёзнеет', 6),
  plural1stPerson: Word('посерьёзнеем', 6),
  plural2ndPerson: Word('посерьёзнеете', 6),
  plural3rdPerson: Word('посерьёзнеют', 6),
  masculinePast: Word('посерьёзнел', 6),
  femininePast: Word('посерьёзнела', 6),
  neuterPast: Word('посерьёзнело', 6),
  pluralPast: Word('посерьёзнели', 6),
  imperativeInformal: Word('посерьёзней', 6),
  imperativeFormal: Word('посерьёзнейте', 6),
  imperfect: [],
};

perfectVerbs.set(посерьёзнеть.name.text, посерьёзнеть);

export { посерьёзнеть };