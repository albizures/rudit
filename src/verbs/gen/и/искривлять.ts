import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искривлять: PerfectVerb = {
  name: Word('искривлять', 7),
  singular1stPerson: Word('искривляю', 7),
  singular2ndPerson: Word('искривляешь', 7),
  singular3rdPerson: Word('искривляет', 7),
  plural1stPerson: Word('искривляем', 7),
  plural2ndPerson: Word('искривляете', 7),
  plural3rdPerson: Word('искривляют', 7),
  masculinePast: Word('искривлял', 7),
  femininePast: Word('искривляла', 7),
  neuterPast: Word('искривляло', 7),
  pluralPast: Word('искривляли', 7),
  imperativeInformal: Word('искривляй', 7),
  imperativeFormal: Word('искривляйте', 7),
  imperfect: [],
};

perfectVerbs.set(искривлять.name.text, искривлять);

export { искривлять };