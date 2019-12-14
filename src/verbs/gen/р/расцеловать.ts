import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцеловать: PerfectVerb = {
  name: Word('расцеловать', 8),
  singular1stPerson: Word('расцелую', 6),
  singular2ndPerson: Word('расцелуешь', 6),
  singular3rdPerson: Word('расцелует', 6),
  plural1stPerson: Word('расцелуем', 6),
  plural2ndPerson: Word('расцелуете', 6),
  plural3rdPerson: Word('расцелуют', 6),
  masculinePast: Word('расцеловал', 8),
  femininePast: Word('расцеловала', 8),
  neuterPast: Word('расцеловало', 8),
  pluralPast: Word('расцеловали', 8),
  imperativeInformal: Word('расцелуй', 6),
  imperativeFormal: Word('расцелуйте', 6),
  imperfect: [],
};

perfectVerbs.set(расцеловать.name.text, расцеловать);

export { расцеловать };