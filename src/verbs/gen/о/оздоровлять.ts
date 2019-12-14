import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оздоровлять: PerfectVerb = {
  name: Word('оздоровлять', 8),
  singular1stPerson: Word('оздоровляю', 8),
  singular2ndPerson: Word('оздоровляешь', 8),
  singular3rdPerson: Word('оздоровляет', 8),
  plural1stPerson: Word('оздоровляем', 8),
  plural2ndPerson: Word('оздоровляете', 8),
  plural3rdPerson: Word('оздоровляют', 8),
  masculinePast: Word('оздоровлял', 8),
  femininePast: Word('оздоровляла', 8),
  neuterPast: Word('оздоровляло', 8),
  pluralPast: Word('оздоровляли', 8),
  imperativeInformal: Word('оздоровляй', 8),
  imperativeFormal: Word('оздоровляйте', 8),
  imperfect: [],
};

perfectVerbs.set(оздоровлять.name.text, оздоровлять);

export { оздоровлять };