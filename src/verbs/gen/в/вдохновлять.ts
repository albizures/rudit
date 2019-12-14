import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдохновлять: PerfectVerb = {
  name: Word('вдохновлять', 8),
  singular1stPerson: Word('вдохновляю', 8),
  singular2ndPerson: Word('вдохновляешь', 8),
  singular3rdPerson: Word('вдохновляет', 8),
  plural1stPerson: Word('вдохновляем', 8),
  plural2ndPerson: Word('вдохновляете', 8),
  plural3rdPerson: Word('вдохновляют', 8),
  masculinePast: Word('вдохновлял', 8),
  femininePast: Word('вдохновляла', 8),
  neuterPast: Word('вдохновляло', 8),
  pluralPast: Word('вдохновляли', 8),
  imperativeInformal: Word('вдохновляй', 8),
  imperativeFormal: Word('вдохновляйте', 8),
  imperfect: [],
};

perfectVerbs.set(вдохновлять.name.text, вдохновлять);

export { вдохновлять };