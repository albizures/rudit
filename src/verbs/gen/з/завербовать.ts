import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завербовать: PerfectVerb = {
  name: Word('завербовать', 8),
  singular1stPerson: Word('завербую', 6),
  singular2ndPerson: Word('завербуешь', 6),
  singular3rdPerson: Word('завербует', 6),
  plural1stPerson: Word('завербуем', 6),
  plural2ndPerson: Word('завербуете', 6),
  plural3rdPerson: Word('завербуют', 6),
  masculinePast: Word('завербовал', 8),
  femininePast: Word('завербовала', 8),
  neuterPast: Word('завербовало', 8),
  pluralPast: Word('завербовали', 8),
  imperativeInformal: Word('завербуй', 6),
  imperativeFormal: Word('завербуйте', 6),
  imperfect: [],
};

perfectVerbs.set(завербовать.name.text, завербовать);

export { завербовать };