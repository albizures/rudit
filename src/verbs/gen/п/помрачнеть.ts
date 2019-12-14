import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помрачнеть: PerfectVerb = {
  name: Word('помрачнеть', 7),
  singular1stPerson: Word('помрачнею', 7),
  singular2ndPerson: Word('помрачнеешь', 7),
  singular3rdPerson: Word('помрачнеет', 7),
  plural1stPerson: Word('помрачнеем', 7),
  plural2ndPerson: Word('помрачнеете', 7),
  plural3rdPerson: Word('помрачнеют', 7),
  masculinePast: Word('помрачнел', 7),
  femininePast: Word('помрачнела', 7),
  neuterPast: Word('помрачнело', 7),
  pluralPast: Word('помрачнели', 7),
  imperativeInformal: Word('помрачней', 7),
  imperativeFormal: Word('помрачнейте', 7),
  imperfect: [],
};

perfectVerbs.set(помрачнеть.name.text, помрачнеть);

export { помрачнеть };