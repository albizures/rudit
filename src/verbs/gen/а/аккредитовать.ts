import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аккредитовать: PerfectVerb = {
  name: Word('аккредитовать', 10),
  singular1stPerson: Word('аккредитую', 8),
  singular2ndPerson: Word('аккредитуешь', 8),
  singular3rdPerson: Word('аккредитует', 8),
  plural1stPerson: Word('аккредитуем', 8),
  plural2ndPerson: Word('аккредитуете', 8),
  plural3rdPerson: Word('аккредитуют', 8),
  masculinePast: Word('аккредитовал', 10),
  femininePast: Word('аккредитовала', 10),
  neuterPast: Word('аккредитовало', 10),
  pluralPast: Word('аккредитовали', 10),
  imperativeInformal: Word('аккредитуй', 8),
  imperativeFormal: Word('аккредитуйте', 8),
  imperfect: [],
};

perfectVerbs.set(аккредитовать.name.text, аккредитовать);

export { аккредитовать };