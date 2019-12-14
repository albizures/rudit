import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опухать: PerfectVerb = {
  name: Word('опухать', 4),
  singular1stPerson: Word('опухаю', 4),
  singular2ndPerson: Word('опухаешь', 4),
  singular3rdPerson: Word('опухает', 4),
  plural1stPerson: Word('опухаем', 4),
  plural2ndPerson: Word('опухаете', 4),
  plural3rdPerson: Word('опухают', 4),
  masculinePast: Word('опухал', 4),
  femininePast: Word('опухала', 4),
  neuterPast: Word('опухало', 4),
  pluralPast: Word('опухали', 4),
  imperativeInformal: Word('опухай', 4),
  imperativeFormal: Word('опухайте', 4),
  imperfect: [],
};

perfectVerbs.set(опухать.name.text, опухать);

export { опухать };