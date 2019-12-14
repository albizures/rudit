import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опьянять: PerfectVerb = {
  name: Word('опьянять', 5),
  singular1stPerson: Word('опьяняю', 5),
  singular2ndPerson: Word('опьяняешь', 5),
  singular3rdPerson: Word('опьяняет', 5),
  plural1stPerson: Word('опьяняем', 5),
  plural2ndPerson: Word('опьяняете', 5),
  plural3rdPerson: Word('опьяняют', 5),
  masculinePast: Word('опьянял', 5),
  femininePast: Word('опьяняла', 5),
  neuterPast: Word('опьяняло', 5),
  pluralPast: Word('опьяняли', 5),
  imperativeInformal: Word('опьяняй', 5),
  imperativeFormal: Word('опьяняйте', 5),
  imperfect: [],
};

perfectVerbs.set(опьянять.name.text, опьянять);

export { опьянять };