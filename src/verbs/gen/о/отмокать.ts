import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмокать: PerfectVerb = {
  name: Word('отмокать', 5),
  singular1stPerson: Word('отмокаю', 5),
  singular2ndPerson: Word('отмокаешь', 5),
  singular3rdPerson: Word('отмокает', 5),
  plural1stPerson: Word('отмокаем', 5),
  plural2ndPerson: Word('отмокаете', 5),
  plural3rdPerson: Word('отмокают', 5),
  masculinePast: Word('отмокал', 5),
  femininePast: Word('отмокала', 5),
  neuterPast: Word('отмокало', 5),
  pluralPast: Word('отмокали', 5),
  imperativeInformal: Word('отмокай', 5),
  imperativeFormal: Word('отмокайте', 5),
  imperfect: [],
};

perfectVerbs.set(отмокать.name.text, отмокать);

export { отмокать };