import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поседеть: PerfectVerb = {
  name: Word('поседеть', 5),
  singular1stPerson: Word('поседею', 5),
  singular2ndPerson: Word('поседеешь', 5),
  singular3rdPerson: Word('поседеет', 5),
  plural1stPerson: Word('поседеем', 5),
  plural2ndPerson: Word('поседеете', 5),
  plural3rdPerson: Word('поседеют', 5),
  masculinePast: Word('поседел', 5),
  femininePast: Word('поседела', 5),
  neuterPast: Word('поседело', 5),
  pluralPast: Word('поседели', 5),
  imperativeInformal: Word('поседей', 5),
  imperativeFormal: Word('поседейте', 5),
  imperfect: [],
};

perfectVerbs.set(поседеть.name.text, поседеть);

export { поседеть };