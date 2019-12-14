import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошвартовать: PerfectVerb = {
  name: Word('ошвартовать', 8),
  singular1stPerson: Word('ошвартую', 6),
  singular2ndPerson: Word('ошвартуешь', 6),
  singular3rdPerson: Word('ошвартует', 6),
  plural1stPerson: Word('ошвартуем', 6),
  plural2ndPerson: Word('ошвартуете', 6),
  plural3rdPerson: Word('ошвартуют', 6),
  masculinePast: Word('ошвартовал', 8),
  femininePast: Word('ошвартовала', 8),
  neuterPast: Word('ошвартовало', 8),
  pluralPast: Word('ошвартовали', 8),
  imperativeInformal: Word('ошвартуй', 6),
  imperativeFormal: Word('ошвартуйте', 6),
  imperfect: [],
};

perfectVerbs.set(ошвартовать.name.text, ошвартовать);

export { ошвартовать };