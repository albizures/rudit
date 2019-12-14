import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опаздывать: PerfectVerb = {
  name: Word('опаздывать', 2),
  singular1stPerson: Word('опаздываю', 2),
  singular2ndPerson: Word('опаздываешь', 2),
  singular3rdPerson: Word('опаздывает', 2),
  plural1stPerson: Word('опаздываем', 2),
  plural2ndPerson: Word('опаздываете', 2),
  plural3rdPerson: Word('опаздывают', 2),
  masculinePast: Word('опаздывал', 2),
  femininePast: Word('опаздывала', 2),
  neuterPast: Word('опаздывало', 2),
  pluralPast: Word('опаздывали', 2),
  imperativeInformal: Word('опаздывай', 2),
  imperativeFormal: Word('опаздывайте', 2),
  imperfect: ['опоздать'],
};

perfectVerbs.set(опаздывать.name.text, опаздывать);

export { опаздывать };