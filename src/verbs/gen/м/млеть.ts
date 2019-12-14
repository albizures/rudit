import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const млеть: PerfectVerb = {
  name: Word('млеть', 2),
  singular1stPerson: Word('млею', 2),
  singular2ndPerson: Word('млеешь', 2),
  singular3rdPerson: Word('млеет', 2),
  plural1stPerson: Word('млеем', 2),
  plural2ndPerson: Word('млеете', 2),
  plural3rdPerson: Word('млеют', 2),
  masculinePast: Word('млел', 2),
  femininePast: Word('млела', 2),
  neuterPast: Word('млело', 2),
  pluralPast: Word('млели', 2),
  imperativeInformal: Word('млей', 2),
  imperativeFormal: Word('млейте', 2),
  imperfect: [],
};

perfectVerbs.set(млеть.name.text, млеть);

export { млеть };