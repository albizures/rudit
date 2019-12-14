import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const путешествовать: PerfectVerb = {
  name: Word('путешествовать', 5),
  singular1stPerson: Word('путешествую', 5),
  singular2ndPerson: Word('путешествуешь', 5),
  singular3rdPerson: Word('путешествует', 5),
  plural1stPerson: Word('путешествуем', 5),
  plural2ndPerson: Word('путешествуете', 5),
  plural3rdPerson: Word('путешествуют', 5),
  masculinePast: Word('путешествовал', 5),
  femininePast: Word('путешествовала', 5),
  neuterPast: Word('путешествовало', 5),
  pluralPast: Word('путешествовали', 5),
  imperativeInformal: Word('путешествуй', 5),
  imperativeFormal: Word('путешествуйте', 5),
  imperfect: [],
};

perfectVerbs.set(путешествовать.name.text, путешествовать);

export { путешествовать };