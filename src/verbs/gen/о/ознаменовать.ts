import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ознаменовать: PerfectVerb = {
  name: Word('ознаменовать', 9),
  singular1stPerson: Word('ознаменую', 7),
  singular2ndPerson: Word('ознаменуешь', 7),
  singular3rdPerson: Word('ознаменует', 7),
  plural1stPerson: Word('ознаменуем', 7),
  plural2ndPerson: Word('ознаменуете', 7),
  plural3rdPerson: Word('ознаменуют', 7),
  masculinePast: Word('ознаменовал', 9),
  femininePast: Word('ознаменовала', 9),
  neuterPast: Word('ознаменовало', 9),
  pluralPast: Word('ознаменовали', 9),
  imperativeInformal: Word('ознаменуй', 7),
  imperativeFormal: Word('ознаменуйте', 7),
  imperfect: [],
};

perfectVerbs.set(ознаменовать.name.text, ознаменовать);

export { ознаменовать };