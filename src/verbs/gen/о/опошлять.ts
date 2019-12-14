import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опошлять: PerfectVerb = {
  name: Word('опошлять', 5),
  singular1stPerson: Word('опошляю', 5),
  singular2ndPerson: Word('опошляешь', 5),
  singular3rdPerson: Word('опошляет', 5),
  plural1stPerson: Word('опошляем', 5),
  plural2ndPerson: Word('опошляете', 5),
  plural3rdPerson: Word('опошляют', 5),
  masculinePast: Word('опошлял', 5),
  femininePast: Word('опошляла', 5),
  neuterPast: Word('опошляло', 5),
  pluralPast: Word('опошляли', 5),
  imperativeInformal: Word('опошляй', 5),
  imperativeFormal: Word('опошляйте', 5),
  imperfect: [],
};

perfectVerbs.set(опошлять.name.text, опошлять);

export { опошлять };