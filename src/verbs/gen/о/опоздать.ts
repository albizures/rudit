import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опоздать: PerfectVerb = {
  name: Word('опоздать', 5),
  singular1stPerson: Word('опоздаю', 5),
  singular2ndPerson: Word('опоздаешь', 5),
  singular3rdPerson: Word('опоздает', 5),
  plural1stPerson: Word('опоздаем', 5),
  plural2ndPerson: Word('опоздаете', 5),
  plural3rdPerson: Word('опоздают', 5),
  masculinePast: Word('опоздал', 5),
  femininePast: Word('опоздала', 5),
  neuterPast: Word('опоздало', 5),
  pluralPast: Word('опоздали', 5),
  imperativeInformal: Word('опоздай', 5),
  imperativeFormal: Word('опоздайте', 5),
  imperfect: [],
};

perfectVerbs.set(опоздать.name.text, опоздать);

export { опоздать };