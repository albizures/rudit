import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просветлять: PerfectVerb = {
  name: Word('просветлять', 8),
  singular1stPerson: Word('просветляю', 8),
  singular2ndPerson: Word('просветляешь', 8),
  singular3rdPerson: Word('просветляет', 8),
  plural1stPerson: Word('просветляем', 8),
  plural2ndPerson: Word('просветляете', 8),
  plural3rdPerson: Word('просветляют', 8),
  masculinePast: Word('просветлял', 8),
  femininePast: Word('просветляла', 8),
  neuterPast: Word('просветляло', 8),
  pluralPast: Word('просветляли', 8),
  imperativeInformal: Word('просветляй', 8),
  imperativeFormal: Word('просветляйте', 8),
  imperfect: [],
};

perfectVerbs.set(просветлять.name.text, просветлять);

export { просветлять };