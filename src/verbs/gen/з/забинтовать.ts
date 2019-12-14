import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забинтовать: PerfectVerb = {
  name: Word('забинтовать', 8),
  singular1stPerson: Word('забинтую', 6),
  singular2ndPerson: Word('забинтуешь', 6),
  singular3rdPerson: Word('забинтует', 6),
  plural1stPerson: Word('забинтуем', 6),
  plural2ndPerson: Word('забинтуете', 6),
  plural3rdPerson: Word('забинтуют', 6),
  masculinePast: Word('забинтовал', 8),
  femininePast: Word('забинтовала', 8),
  neuterPast: Word('забинтовало', 8),
  pluralPast: Word('забинтовали', 8),
  imperativeInformal: Word('забинтуй', 6),
  imperativeFormal: Word('забинтуйте', 6),
  imperfect: [],
};

perfectVerbs.set(забинтовать.name.text, забинтовать);

export { забинтовать };