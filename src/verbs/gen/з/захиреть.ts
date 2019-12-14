import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захиреть: PerfectVerb = {
  name: Word('захиреть', 5),
  singular1stPerson: Word('захирею', 5),
  singular2ndPerson: Word('захиреешь', 5),
  singular3rdPerson: Word('захиреет', 5),
  plural1stPerson: Word('захиреем', 5),
  plural2ndPerson: Word('захиреете', 5),
  plural3rdPerson: Word('захиреют', 5),
  masculinePast: Word('захирел', 5),
  femininePast: Word('захирела', 5),
  neuterPast: Word('захирело', 5),
  pluralPast: Word('захирели', 5),
  imperativeInformal: Word('захирей', 5),
  imperativeFormal: Word('захирейте', 5),
  imperfect: [],
};

perfectVerbs.set(захиреть.name.text, захиреть);

export { захиреть };