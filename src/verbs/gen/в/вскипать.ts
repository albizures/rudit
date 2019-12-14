import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскипать: PerfectVerb = {
  name: Word('вскипать', 5),
  singular1stPerson: Word('вскипаю', 5),
  singular2ndPerson: Word('вскипаешь', 5),
  singular3rdPerson: Word('вскипает', 5),
  plural1stPerson: Word('вскипаем', 5),
  plural2ndPerson: Word('вскипаете', 5),
  plural3rdPerson: Word('вскипают', 5),
  masculinePast: Word('вскипал', 5),
  femininePast: Word('вскипала', 5),
  neuterPast: Word('вскипало', 5),
  pluralPast: Word('вскипали', 5),
  imperativeInformal: Word('вскипай', 5),
  imperativeFormal: Word('вскипайте', 5),
  imperfect: [],
};

perfectVerbs.set(вскипать.name.text, вскипать);

export { вскипать };