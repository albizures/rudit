import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отождествлять: PerfectVerb = {
  name: Word('отождествлять', 10),
  singular1stPerson: Word('отождествляю', 10),
  singular2ndPerson: Word('отождествляешь', 10),
  singular3rdPerson: Word('отождествляет', 10),
  plural1stPerson: Word('отождествляем', 10),
  plural2ndPerson: Word('отождествляете', 10),
  plural3rdPerson: Word('отождествляют', 10),
  masculinePast: Word('отождествлял', 10),
  femininePast: Word('отождествляла', 10),
  neuterPast: Word('отождествляло', 10),
  pluralPast: Word('отождествляли', 10),
  imperativeInformal: Word('отождествляй', 10),
  imperativeFormal: Word('отождествляйте', 10),
  imperfect: [],
};

perfectVerbs.set(отождествлять.name.text, отождествлять);

export { отождествлять };