import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опрыскивать: PerfectVerb = {
  name: Word('опрыскивать', 3),
  singular1stPerson: Word('опрыскиваю', 3),
  singular2ndPerson: Word('опрыскиваешь', 3),
  singular3rdPerson: Word('опрыскивает', 3),
  plural1stPerson: Word('опрыскиваем', 3),
  plural2ndPerson: Word('опрыскиваете', 3),
  plural3rdPerson: Word('опрыскивают', 3),
  masculinePast: Word('опрыскивал', 3),
  femininePast: Word('опрыскивала', 3),
  neuterPast: Word('опрыскивало', 3),
  pluralPast: Word('опрыскивали', 3),
  imperativeInformal: Word('опрыскивай', 3),
  imperativeFormal: Word('опрыскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(опрыскивать.name.text, опрыскивать);

export { опрыскивать };