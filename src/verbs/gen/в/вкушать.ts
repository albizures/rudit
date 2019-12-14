import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкушать: PerfectVerb = {
  name: Word('вкушать', 4),
  singular1stPerson: Word('вкушаю', 4),
  singular2ndPerson: Word('вкушаешь', 4),
  singular3rdPerson: Word('вкушает', 4),
  plural1stPerson: Word('вкушаем', 4),
  plural2ndPerson: Word('вкушаете', 4),
  plural3rdPerson: Word('вкушают', 4),
  masculinePast: Word('вкушал', 4),
  femininePast: Word('вкушала', 4),
  neuterPast: Word('вкушало', 4),
  pluralPast: Word('вкушали', 4),
  imperativeInformal: Word('вкушай', 4),
  imperativeFormal: Word('вкушайте', 4),
  imperfect: [],
};

perfectVerbs.set(вкушать.name.text, вкушать);

export { вкушать };