import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жиреть: PerfectVerb = {
  name: Word('жиреть', 3),
  singular1stPerson: Word('жирею', 3),
  singular2ndPerson: Word('жиреешь', 3),
  singular3rdPerson: Word('жиреет', 3),
  plural1stPerson: Word('жиреем', 3),
  plural2ndPerson: Word('жиреете', 3),
  plural3rdPerson: Word('жиреют', 3),
  masculinePast: Word('жирел', 3),
  femininePast: Word('жирела', 3),
  neuterPast: Word('жирело', 3),
  pluralPast: Word('жирели', 3),
  imperativeInformal: Word('жирей', 3),
  imperativeFormal: Word('жирейте', 3),
  imperfect: [],
};

perfectVerbs.set(жиреть.name.text, жиреть);

export { жиреть };