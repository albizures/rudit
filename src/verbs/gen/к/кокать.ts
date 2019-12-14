import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кокать: PerfectVerb = {
  name: Word('кокать', 1),
  singular1stPerson: Word('кокаю', 1),
  singular2ndPerson: Word('кокаешь', 1),
  singular3rdPerson: Word('кокает', 1),
  plural1stPerson: Word('кокаем', 1),
  plural2ndPerson: Word('кокаете', 1),
  plural3rdPerson: Word('кокают', 1),
  masculinePast: Word('кокал', 1),
  femininePast: Word('кокала', 1),
  neuterPast: Word('кокало', 1),
  pluralPast: Word('кокали', 1),
  imperativeInformal: Word('кокай', 1),
  imperativeFormal: Word('кокайте', 1),
  imperfect: [],
};

perfectVerbs.set(кокать.name.text, кокать);

export { кокать };