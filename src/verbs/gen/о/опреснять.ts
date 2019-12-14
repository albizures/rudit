import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опреснять: PerfectVerb = {
  name: Word('опреснять', 6),
  singular1stPerson: Word('опресняю', 6),
  singular2ndPerson: Word('опресняешь', 6),
  singular3rdPerson: Word('опресняет', 6),
  plural1stPerson: Word('опресняем', 6),
  plural2ndPerson: Word('опресняете', 6),
  plural3rdPerson: Word('опресняют', 6),
  masculinePast: Word('опреснял', 6),
  femininePast: Word('опресняла', 6),
  neuterPast: Word('опресняло', 6),
  pluralPast: Word('опресняли', 6),
  imperativeInformal: Word('опресняй', 6),
  imperativeFormal: Word('опресняйте', 6),
  imperfect: [],
};

perfectVerbs.set(опреснять.name.text, опреснять);

export { опреснять };