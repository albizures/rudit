import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымешать: PerfectVerb = {
  name: Word('вымешать', 1),
  singular1stPerson: Word('вымешаю', 1),
  singular2ndPerson: Word('вымешаешь', 1),
  singular3rdPerson: Word('вымешает', 1),
  plural1stPerson: Word('вымешаем', 1),
  plural2ndPerson: Word('вымешаете', 1),
  plural3rdPerson: Word('вымешают', 1),
  masculinePast: Word('вымешал', 1),
  femininePast: Word('вымешала', 1),
  neuterPast: Word('вымешало', 1),
  pluralPast: Word('вымешали', 1),
  imperativeInformal: Word('вымешай', 1),
  imperativeFormal: Word('вымешайте', 1),
  imperfect: [],
};

perfectVerbs.set(вымешать.name.text, вымешать);

export { вымешать };