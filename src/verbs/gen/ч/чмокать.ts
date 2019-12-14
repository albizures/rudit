import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чмокать: PerfectVerb = {
  name: Word('чмокать', 2),
  singular1stPerson: Word('чмокаю', 2),
  singular2ndPerson: Word('чмокаешь', 2),
  singular3rdPerson: Word('чмокает', 2),
  plural1stPerson: Word('чмокаем', 2),
  plural2ndPerson: Word('чмокаете', 2),
  plural3rdPerson: Word('чмокают', 2),
  masculinePast: Word('чмокал', 2),
  femininePast: Word('чмокала', 2),
  neuterPast: Word('чмокало', 2),
  pluralPast: Word('чмокали', 2),
  imperativeInformal: Word('чмокай', 2),
  imperativeFormal: Word('чмокайте', 2),
  imperfect: [],
};

perfectVerbs.set(чмокать.name.text, чмокать);

export { чмокать };