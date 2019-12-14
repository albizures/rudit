import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкушать: PerfectVerb = {
  name: Word('выкушать', 1),
  singular1stPerson: Word('выкушаю', 1),
  singular2ndPerson: Word('выкушаешь', 1),
  singular3rdPerson: Word('выкушает', 1),
  plural1stPerson: Word('выкушаем', 1),
  plural2ndPerson: Word('выкушаете', 1),
  plural3rdPerson: Word('выкушают', 1),
  masculinePast: Word('выкушал', 1),
  femininePast: Word('выкушала', 1),
  neuterPast: Word('выкушало', 1),
  pluralPast: Word('выкушали', 1),
  imperativeInformal: Word('выкушай', 1),
  imperativeFormal: Word('выкушайте', 1),
  imperfect: [],
};

perfectVerbs.set(выкушать.name.text, выкушать);

export { выкушать };