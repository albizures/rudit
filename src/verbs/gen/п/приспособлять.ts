import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспособлять: PerfectVerb = {
  name: Word('приспособлять', 10),
  singular1stPerson: Word('приспособляю', 10),
  singular2ndPerson: Word('приспособляешь', 10),
  singular3rdPerson: Word('приспособляет', 10),
  plural1stPerson: Word('приспособляем', 10),
  plural2ndPerson: Word('приспособляете', 10),
  plural3rdPerson: Word('приспособляют', 10),
  masculinePast: Word('приспособлял', 10),
  femininePast: Word('приспособляла', 10),
  neuterPast: Word('приспособляло', 10),
  pluralPast: Word('приспособляли', 10),
  imperativeInformal: Word('приспособляй', 10),
  imperativeFormal: Word('приспособляйте', 10),
  imperfect: [],
};

perfectVerbs.set(приспособлять.name.text, приспособлять);

export { приспособлять };