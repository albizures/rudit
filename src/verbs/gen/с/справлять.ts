import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const справлять: PerfectVerb = {
  name: Word('справлять', 6),
  singular1stPerson: Word('справляю', 6),
  singular2ndPerson: Word('справляешь', 6),
  singular3rdPerson: Word('справляет', 6),
  plural1stPerson: Word('справляем', 6),
  plural2ndPerson: Word('справляете', 6),
  plural3rdPerson: Word('справляют', 6),
  masculinePast: Word('справлял', 6),
  femininePast: Word('справляла', 6),
  neuterPast: Word('справляло', 6),
  pluralPast: Word('справляли', 6),
  imperativeInformal: Word('справляй', 6),
  imperativeFormal: Word('справляйте', 6),
  imperfect: [],
};

perfectVerbs.set(справлять.name.text, справлять);

export { справлять };