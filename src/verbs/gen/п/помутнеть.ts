import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помутнеть: PerfectVerb = {
  name: Word('помутнеть', 6),
  singular1stPerson: Word('помутнею', 6),
  singular2ndPerson: Word('помутнеешь', 6),
  singular3rdPerson: Word('помутнеет', 6),
  plural1stPerson: Word('помутнеем', 6),
  plural2ndPerson: Word('помутнеете', 6),
  plural3rdPerson: Word('помутнеют', 6),
  masculinePast: Word('помутнел', 6),
  femininePast: Word('помутнела', 6),
  neuterPast: Word('помутнело', 6),
  pluralPast: Word('помутнели', 6),
  imperativeInformal: Word('помутней', 6),
  imperativeFormal: Word('помутнейте', 6),
  imperfect: [],
};

perfectVerbs.set(помутнеть.name.text, помутнеть);

export { помутнеть };