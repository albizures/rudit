import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забунтовать: PerfectVerb = {
  name: Word('забунтовать', 8),
  singular1stPerson: Word('забунтую', 6),
  singular2ndPerson: Word('забунтуешь', 6),
  singular3rdPerson: Word('забунтует', 6),
  plural1stPerson: Word('забунтуем', 6),
  plural2ndPerson: Word('забунтуете', 6),
  plural3rdPerson: Word('забунтуют', 6),
  masculinePast: Word('забунтовал', 8),
  femininePast: Word('забунтовала', 8),
  neuterPast: Word('забунтовало', 8),
  pluralPast: Word('забунтовали', 8),
  imperativeInformal: Word('забунтуй', 6),
  imperativeFormal: Word('забунтуйте', 6),
  imperfect: [],
};

perfectVerbs.set(забунтовать.name.text, забунтовать);

export { забунтовать };