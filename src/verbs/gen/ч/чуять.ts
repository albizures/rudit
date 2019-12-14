import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чуять: PerfectVerb = {
  name: Word('чуять', 1),
  singular1stPerson: Word('чую', 1),
  singular2ndPerson: Word('чуешь', 1),
  singular3rdPerson: Word('чует', 1),
  plural1stPerson: Word('чуем', 1),
  plural2ndPerson: Word('чуете', 1),
  plural3rdPerson: Word('чуют', 1),
  masculinePast: Word('чуял', 1),
  femininePast: Word('чуяла', 1),
  neuterPast: Word('чуяло', 1),
  pluralPast: Word('чуяли', 1),
  imperativeInformal: Word('чуй', 1),
  imperativeFormal: Word('чуйте', 1),
  imperfect: ['почуять','учуять'],
};

perfectVerbs.set(чуять.name.text, чуять);

export { чуять };