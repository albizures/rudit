import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тучнеть: PerfectVerb = {
  name: Word('тучнеть', 4),
  singular1stPerson: Word('тучнею', 4),
  singular2ndPerson: Word('тучнеешь', 4),
  singular3rdPerson: Word('тучнеет', 4),
  plural1stPerson: Word('тучнеем', 4),
  plural2ndPerson: Word('тучнеете', 4),
  plural3rdPerson: Word('тучнеют', 4),
  masculinePast: Word('тучнел', 4),
  femininePast: Word('тучнела', 4),
  neuterPast: Word('тучнело', 4),
  pluralPast: Word('тучнели', 4),
  imperativeInformal: Word('тучней', 4),
  imperativeFormal: Word('тучнейте', 4),
  imperfect: [],
};

perfectVerbs.set(тучнеть.name.text, тучнеть);

export { тучнеть };