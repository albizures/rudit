import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ответствовать: PerfectVerb = {
  name: Word('ответствовать', 3),
  singular1stPerson: Word('ответствую', 3),
  singular2ndPerson: Word('ответствуешь', 3),
  singular3rdPerson: Word('ответствует', 3),
  plural1stPerson: Word('ответствуем', 3),
  plural2ndPerson: Word('ответствуете', 3),
  plural3rdPerson: Word('ответствуют', 3),
  masculinePast: Word('ответствовал', 3),
  femininePast: Word('ответствовала', 3),
  neuterPast: Word('ответствовало', 3),
  pluralPast: Word('ответствовали', 3),
  imperativeInformal: Word('ответствуй', 3),
  imperativeFormal: Word('ответствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(ответствовать.name.text, ответствовать);

export { ответствовать };