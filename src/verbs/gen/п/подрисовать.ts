import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрисовать: PerfectVerb = {
  name: Word('подрисовать', 8),
  singular1stPerson: Word('подрисую', 6),
  singular2ndPerson: Word('подрисуешь', 6),
  singular3rdPerson: Word('подрисует', 6),
  plural1stPerson: Word('подрисуем', 6),
  plural2ndPerson: Word('подрисуете', 6),
  plural3rdPerson: Word('подрисуют', 6),
  masculinePast: Word('подрисовал', 8),
  femininePast: Word('подрисовала', 8),
  neuterPast: Word('подрисовало', 8),
  pluralPast: Word('подрисовали', 8),
  imperativeInformal: Word('подрисуй', 6),
  imperativeFormal: Word('подрисуйте', 6),
  imperfect: [],
};

perfectVerbs.set(подрисовать.name.text, подрисовать);

export { подрисовать };