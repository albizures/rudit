import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const экзаменовать: PerfectVerb = {
  name: Word('экзаменовать', 9),
  singular1stPerson: Word('экзаменую', 7),
  singular2ndPerson: Word('экзаменуешь', 7),
  singular3rdPerson: Word('экзаменует', 7),
  plural1stPerson: Word('экзаменуем', 7),
  plural2ndPerson: Word('экзаменуете', 7),
  plural3rdPerson: Word('экзаменуют', 7),
  masculinePast: Word('экзаменовал', 9),
  femininePast: Word('экзаменовала', 9),
  neuterPast: Word('экзаменовало', 9),
  pluralPast: Word('экзаменовали', 9),
  imperativeInformal: Word('экзаменуй', 7),
  imperativeFormal: Word('экзаменуйте', 7),
  imperfect: [],
};

perfectVerbs.set(экзаменовать.name.text, экзаменовать);

export { экзаменовать };