import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымокать: PerfectVerb = {
  name: Word('вымокать', 5),
  singular1stPerson: Word('вымокаю', 5),
  singular2ndPerson: Word('вымокаешь', 5),
  singular3rdPerson: Word('вымокает', 5),
  plural1stPerson: Word('вымокаем', 5),
  plural2ndPerson: Word('вымокаете', 5),
  plural3rdPerson: Word('вымокают', 5),
  masculinePast: Word('вымокал', 5),
  femininePast: Word('вымокала', 5),
  neuterPast: Word('вымокало', 5),
  pluralPast: Word('вымокали', 5),
  imperativeInformal: Word('вымокай', 5),
  imperativeFormal: Word('вымокайте', 5),
  imperfect: [],
};

perfectVerbs.set(вымокать.name.text, вымокать);

export { вымокать };