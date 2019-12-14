import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гипсовать: PerfectVerb = {
  name: Word('гипсовать', 6),
  singular1stPerson: Word('гипсую', 4),
  singular2ndPerson: Word('гипсуешь', 4),
  singular3rdPerson: Word('гипсует', 4),
  plural1stPerson: Word('гипсуем', 4),
  plural2ndPerson: Word('гипсуете', 4),
  plural3rdPerson: Word('гипсуют', 4),
  masculinePast: Word('гипсовал', 6),
  femininePast: Word('гипсовала', 6),
  neuterPast: Word('гипсовало', 6),
  pluralPast: Word('гипсовали', 6),
  imperativeInformal: Word('гипсуй', 4),
  imperativeFormal: Word('гипсуйте', 4),
  imperfect: [],
};

perfectVerbs.set(гипсовать.name.text, гипсовать);

export { гипсовать };