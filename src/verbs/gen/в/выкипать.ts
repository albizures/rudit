import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкипать: PerfectVerb = {
  name: Word('выкипать', 5),
  singular1stPerson: Word('выкипаю', 5),
  singular2ndPerson: Word('выкипаешь', 5),
  singular3rdPerson: Word('выкипает', 5),
  plural1stPerson: Word('выкипаем', 5),
  plural2ndPerson: Word('выкипаете', 5),
  plural3rdPerson: Word('выкипают', 5),
  masculinePast: Word('выкипал', 5),
  femininePast: Word('выкипала', 5),
  neuterPast: Word('выкипало', 5),
  pluralPast: Word('выкипали', 5),
  imperativeInformal: Word('выкипай', 5),
  imperativeFormal: Word('выкипайте', 5),
  imperfect: [],
};

perfectVerbs.set(выкипать.name.text, выкипать);

export { выкипать };