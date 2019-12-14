import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опутать: PerfectVerb = {
  name: Word('опутать', 2),
  singular1stPerson: Word('опутаю', 2),
  singular2ndPerson: Word('опутаешь', 2),
  singular3rdPerson: Word('опутает', 2),
  plural1stPerson: Word('опутаем', 2),
  plural2ndPerson: Word('опутаете', 2),
  plural3rdPerson: Word('опутают', 2),
  masculinePast: Word('опутал', 2),
  femininePast: Word('опутала', 2),
  neuterPast: Word('опутало', 2),
  pluralPast: Word('опутали', 2),
  imperativeInformal: Word('опутай', 2),
  imperativeFormal: Word('опутайте', 2),
  imperfect: [],
};

perfectVerbs.set(опутать.name.text, опутать);

export { опутать };