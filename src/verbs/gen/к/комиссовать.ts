import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комиссовать: PerfectVerb = {
  name: Word('комиссовать', 8),
  singular1stPerson: Word('комиссую', 6),
  singular2ndPerson: Word('комиссуешь', 6),
  singular3rdPerson: Word('комиссует', 6),
  plural1stPerson: Word('комиссуем', 6),
  plural2ndPerson: Word('комиссуете', 6),
  plural3rdPerson: Word('комиссуют', 6),
  masculinePast: Word('комиссовал', 8),
  femininePast: Word('комиссовала', 8),
  neuterPast: Word('комиссовало', 8),
  pluralPast: Word('комиссовали', 8),
  imperativeInformal: Word('комиссуй', 6),
  imperativeFormal: Word('комиссуйте', 6),
  imperfect: [],
};

perfectVerbs.set(комиссовать.name.text, комиссовать);

export { комиссовать };