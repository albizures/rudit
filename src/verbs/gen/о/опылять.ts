import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опылять: PerfectVerb = {
  name: Word('опылять', 4),
  singular1stPerson: Word('опыляю', 4),
  singular2ndPerson: Word('опыляешь', 4),
  singular3rdPerson: Word('опыляет', 4),
  plural1stPerson: Word('опыляем', 4),
  plural2ndPerson: Word('опыляете', 4),
  plural3rdPerson: Word('опыляют', 4),
  masculinePast: Word('опылял', 4),
  femininePast: Word('опыляла', 4),
  neuterPast: Word('опыляло', 4),
  pluralPast: Word('опыляли', 4),
  imperativeInformal: Word('опыляй', 4),
  imperativeFormal: Word('опыляйте', 4),
  imperfect: [],
};

perfectVerbs.set(опылять.name.text, опылять);

export { опылять };