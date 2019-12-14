import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опознать: PerfectVerb = {
  name: Word('опознать', 5),
  singular1stPerson: Word('опознаю', 5),
  singular2ndPerson: Word('опознаешь', 5),
  singular3rdPerson: Word('опознает', 5),
  plural1stPerson: Word('опознаем', 5),
  plural2ndPerson: Word('опознаете', 5),
  plural3rdPerson: Word('опознают', 5),
  masculinePast: Word('опознал', 5),
  femininePast: Word('опознала', 5),
  neuterPast: Word('опознало', 5),
  pluralPast: Word('опознали', 5),
  imperativeInformal: Word('опознай', 5),
  imperativeFormal: Word('опознайте', 5),
  imperfect: ['опознавать'],
};

perfectVerbs.set(опознать.name.text, опознать);

export { опознать };