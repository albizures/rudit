import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отравлять: PerfectVerb = {
  name: Word('отравлять', 6),
  singular1stPerson: Word('отравляю', 6),
  singular2ndPerson: Word('отравляешь', 6),
  singular3rdPerson: Word('отравляет', 6),
  plural1stPerson: Word('отравляем', 6),
  plural2ndPerson: Word('отравляете', 6),
  plural3rdPerson: Word('отравляют', 6),
  masculinePast: Word('отравлял', 6),
  femininePast: Word('отравляла', 6),
  neuterPast: Word('отравляло', 6),
  pluralPast: Word('отравляли', 6),
  imperativeInformal: Word('отравляй', 6),
  imperativeFormal: Word('отравляйте', 6),
  imperfect: [],
};

perfectVerbs.set(отравлять.name.text, отравлять);

export { отравлять };