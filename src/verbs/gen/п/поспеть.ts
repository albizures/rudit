import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспеть: PerfectVerb = {
  name: Word('поспеть', 4),
  singular1stPerson: Word('поспею', 4),
  singular2ndPerson: Word('поспеешь', 4),
  singular3rdPerson: Word('поспеет', 4),
  plural1stPerson: Word('поспеем', 4),
  plural2ndPerson: Word('поспеете', 4),
  plural3rdPerson: Word('поспеют', 4),
  masculinePast: Word('поспел', 4),
  femininePast: Word('поспела', 4),
  neuterPast: Word('поспело', 4),
  pluralPast: Word('поспели', 4),
  imperativeInformal: Word('поспей', 4),
  imperativeFormal: Word('поспейте', 4),
  imperfect: [],
};

perfectVerbs.set(поспеть.name.text, поспеть);

export { поспеть };