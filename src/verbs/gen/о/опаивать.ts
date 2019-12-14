import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опаивать: PerfectVerb = {
  name: Word('опаивать', 2),
  singular1stPerson: Word('опаиваю', 2),
  singular2ndPerson: Word('опаиваешь', 2),
  singular3rdPerson: Word('опаивает', 2),
  plural1stPerson: Word('опаиваем', 2),
  plural2ndPerson: Word('опаиваете', 2),
  plural3rdPerson: Word('опаивают', 2),
  masculinePast: Word('опаивал', 2),
  femininePast: Word('опаивала', 2),
  neuterPast: Word('опаивало', 2),
  pluralPast: Word('опаивали', 2),
  imperativeInformal: Word('опаивай', 2),
  imperativeFormal: Word('опаивайте', 2),
  imperfect: [],
};

perfectVerbs.set(опаивать.name.text, опаивать);

export { опаивать };