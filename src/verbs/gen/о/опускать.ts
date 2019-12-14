import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опускать: PerfectVerb = {
  name: Word('опускать', 5),
  singular1stPerson: Word('опускаю', 5),
  singular2ndPerson: Word('опускаешь', 5),
  singular3rdPerson: Word('опускает', 5),
  plural1stPerson: Word('опускаем', 5),
  plural2ndPerson: Word('опускаете', 5),
  plural3rdPerson: Word('опускают', 5),
  masculinePast: Word('опускал', 5),
  femininePast: Word('опускала', 5),
  neuterPast: Word('опускало', 5),
  pluralPast: Word('опускали', 5),
  imperativeInformal: Word('опускай', 5),
  imperativeFormal: Word('опускайте', 5),
  imperfect: ['опустить'],
};

perfectVerbs.set(опускать.name.text, опускать);

export { опускать };