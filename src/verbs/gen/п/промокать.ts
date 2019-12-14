import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промокать: PerfectVerb = {
  name: Word('промокать', 6),
  singular1stPerson: Word('промокаю', 6),
  singular2ndPerson: Word('промокаешь', 6),
  singular3rdPerson: Word('промокает', 6),
  plural1stPerson: Word('промокаем', 6),
  plural2ndPerson: Word('промокаете', 6),
  plural3rdPerson: Word('промокают', 6),
  masculinePast: Word('промокал', 6),
  femininePast: Word('промокала', 6),
  neuterPast: Word('промокало', 6),
  pluralPast: Word('промокали', 6),
  imperativeInformal: Word('промокай', 6),
  imperativeFormal: Word('промокайте', 6),
  imperfect: [],
};

perfectVerbs.set(промокать.name.text, промокать);

export { промокать };