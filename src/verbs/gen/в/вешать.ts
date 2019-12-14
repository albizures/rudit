import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вешать: PerfectVerb = {
  name: Word('вешать', 1),
  singular1stPerson: Word('вешаю', 1),
  singular2ndPerson: Word('вешаешь', 1),
  singular3rdPerson: Word('вешает', 1),
  plural1stPerson: Word('вешаем', 1),
  plural2ndPerson: Word('вешаете', 1),
  plural3rdPerson: Word('вешают', 1),
  masculinePast: Word('вешал', 1),
  femininePast: Word('вешала', 1),
  neuterPast: Word('вешало', 1),
  pluralPast: Word('вешали', 1),
  imperativeInformal: Word('вешай', 1),
  imperativeFormal: Word('вешайте', 1),
  imperfect: ['повесить'],
};

perfectVerbs.set(вешать.name.text, вешать);

export { вешать };