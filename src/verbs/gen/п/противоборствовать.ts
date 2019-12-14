import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противоборствовать: PerfectVerb = {
  name: Word('противоборствовать', 8),
  singular1stPerson: Word('противоборствую', 8),
  singular2ndPerson: Word('противоборствуешь', 8),
  singular3rdPerson: Word('противоборствует', 8),
  plural1stPerson: Word('противоборствуем', 8),
  plural2ndPerson: Word('противоборствуете', 8),
  plural3rdPerson: Word('противоборствуют', 8),
  masculinePast: Word('противоборствовал', 8),
  femininePast: Word('противоборствовала', 8),
  neuterPast: Word('противоборствовало', 8),
  pluralPast: Word('противоборствовали', 8),
  imperativeInformal: Word('противоборствуй', 8),
  imperativeFormal: Word('противоборствуйте', 8),
  imperfect: [],
};

perfectVerbs.set(противоборствовать.name.text, противоборствовать);

export { противоборствовать };