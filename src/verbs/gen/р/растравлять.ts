import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растравлять: PerfectVerb = {
  name: Word('растравлять', 8),
  singular1stPerson: Word('растравляю', 8),
  singular2ndPerson: Word('растравляешь', 8),
  singular3rdPerson: Word('растравляет', 8),
  plural1stPerson: Word('растравляем', 8),
  plural2ndPerson: Word('растравляете', 8),
  plural3rdPerson: Word('растравляют', 8),
  masculinePast: Word('растравлял', 8),
  femininePast: Word('растравляла', 8),
  neuterPast: Word('растравляло', 8),
  pluralPast: Word('растравляли', 8),
  imperativeInformal: Word('растравляй', 8),
  imperativeFormal: Word('растравляйте', 8),
  imperfect: [],
};

perfectVerbs.set(растравлять.name.text, растравлять);

export { растравлять };