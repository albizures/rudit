import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умствовать: PerfectVerb = {
  name: Word('умствовать', 0),
  singular1stPerson: Word('умствую', 0),
  singular2ndPerson: Word('умствуешь', 0),
  singular3rdPerson: Word('умствует', 0),
  plural1stPerson: Word('умствуем', 0),
  plural2ndPerson: Word('умствуете', 0),
  plural3rdPerson: Word('умствуют', 0),
  masculinePast: Word('умствовал', 0),
  femininePast: Word('умствовала', 0),
  neuterPast: Word('умствовало', 0),
  pluralPast: Word('умствовали', 0),
  imperativeInformal: Word('умствуй', 0),
  imperativeFormal: Word('умствуйте', 0),
  imperfect: [],
};

perfectVerbs.set(умствовать.name.text, умствовать);

export { умствовать };