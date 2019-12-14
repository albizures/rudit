import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осатанеть: PerfectVerb = {
  name: Word('осатанеть', 6),
  singular1stPerson: Word('осатанею', 6),
  singular2ndPerson: Word('осатанеешь', 6),
  singular3rdPerson: Word('осатанеет', 6),
  plural1stPerson: Word('осатанеем', 6),
  plural2ndPerson: Word('осатанеете', 6),
  plural3rdPerson: Word('осатанеют', 6),
  masculinePast: Word('осатанел', 6),
  femininePast: Word('осатанела', 6),
  neuterPast: Word('осатанело', 6),
  pluralPast: Word('осатанели', 6),
  imperativeInformal: Word('осатаней', 6),
  imperativeFormal: Word('осатанейте', 6),
  imperfect: [],
};

perfectVerbs.set(осатанеть.name.text, осатанеть);

export { осатанеть };