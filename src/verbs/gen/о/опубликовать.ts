import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опубликовать: PerfectVerb = {
  name: Word('опубликовать', 9),
  singular1stPerson: Word('опубликую', 7),
  singular2ndPerson: Word('опубликуешь', 7),
  singular3rdPerson: Word('опубликует', 7),
  plural1stPerson: Word('опубликуем', 7),
  plural2ndPerson: Word('опубликуете', 7),
  plural3rdPerson: Word('опубликуют', 7),
  masculinePast: Word('опубликовал', 9),
  femininePast: Word('опубликовала', 9),
  neuterPast: Word('опубликовало', 9),
  pluralPast: Word('опубликовали', 9),
  imperativeInformal: Word('опубликуй', 7),
  imperativeFormal: Word('опубликуйте', 7),
  imperfect: ['опубликовывать','публиковать'],
};

perfectVerbs.set(опубликовать.name.text, опубликовать);

export { опубликовать };