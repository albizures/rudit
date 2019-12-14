import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опрокидывать: PerfectVerb = {
  name: Word('опрокидывать', 5),
  singular1stPerson: Word('опрокидываю', 5),
  singular2ndPerson: Word('опрокидываешь', 5),
  singular3rdPerson: Word('опрокидывает', 5),
  plural1stPerson: Word('опрокидываем', 5),
  plural2ndPerson: Word('опрокидываете', 5),
  plural3rdPerson: Word('опрокидывают', 5),
  masculinePast: Word('опрокидывал', 5),
  femininePast: Word('опрокидывала', 5),
  neuterPast: Word('опрокидывало', 5),
  pluralPast: Word('опрокидывали', 5),
  imperativeInformal: Word('опрокидывай', 5),
  imperativeFormal: Word('опрокидывайте', 5),
  imperfect: [],
};

perfectVerbs.set(опрокидывать.name.text, опрокидывать);

export { опрокидывать };