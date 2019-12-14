import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пустовать: PerfectVerb = {
  name: Word('пустовать', 6),
  singular1stPerson: Word('пустую', 4),
  singular2ndPerson: Word('пустуешь', 4),
  singular3rdPerson: Word('пустует', 4),
  plural1stPerson: Word('пустуем', 4),
  plural2ndPerson: Word('пустуете', 4),
  plural3rdPerson: Word('пустуют', 4),
  masculinePast: Word('пустовал', 6),
  femininePast: Word('пустовала', 6),
  neuterPast: Word('пустовало', 6),
  pluralPast: Word('пустовали', 6),
  imperativeInformal: Word('пустуй', 4),
  imperativeFormal: Word('пустуйте', 4),
  imperfect: [],
};

perfectVerbs.set(пустовать.name.text, пустовать);

export { пустовать };