import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слабеть: PerfectVerb = {
  name: Word('слабеть', 4),
  singular1stPerson: Word('слабею', 4),
  singular2ndPerson: Word('слабеешь', 4),
  singular3rdPerson: Word('слабеет', 4),
  plural1stPerson: Word('слабеем', 4),
  plural2ndPerson: Word('слабеете', 4),
  plural3rdPerson: Word('слабеют', 4),
  masculinePast: Word('слабел', 4),
  femininePast: Word('слабела', 4),
  neuterPast: Word('слабело', 4),
  pluralPast: Word('слабели', 4),
  imperativeInformal: Word('слабей', 4),
  imperativeFormal: Word('слабейте', 4),
  imperfect: [],
};

perfectVerbs.set(слабеть.name.text, слабеть);

export { слабеть };