import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кушать: PerfectVerb = {
  name: Word('кушать', 1),
  singular1stPerson: Word('кушаю', 1),
  singular2ndPerson: Word('кушаешь', 1),
  singular3rdPerson: Word('кушает', 1),
  plural1stPerson: Word('кушаем', 1),
  plural2ndPerson: Word('кушаете', 1),
  plural3rdPerson: Word('кушают', 1),
  masculinePast: Word('кушал', 1),
  femininePast: Word('кушала', 1),
  neuterPast: Word('кушало', 1),
  pluralPast: Word('кушали', 1),
  imperativeInformal: Word('кушай', 1),
  imperativeFormal: Word('кушайте', 1),
  imperfect: ['покушать','скушать'],
};

perfectVerbs.set(кушать.name.text, кушать);

export { кушать };