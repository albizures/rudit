import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опубликовывать: PerfectVerb = {
  name: Word('опубликовывать', 7),
  singular1stPerson: Word('опубликовываю', 7),
  singular2ndPerson: Word('опубликовываешь', 7),
  singular3rdPerson: Word('опубликовывает', 7),
  plural1stPerson: Word('опубликовываем', 7),
  plural2ndPerson: Word('опубликовываете', 7),
  plural3rdPerson: Word('опубликовывают', 7),
  masculinePast: Word('опубликовывал', 7),
  femininePast: Word('опубликовывала', 7),
  neuterPast: Word('опубликовывало', 7),
  pluralPast: Word('опубликовывали', 7),
  imperativeInformal: Word('опубликовывай', 7),
  imperativeFormal: Word('опубликовывайте', 7),
  imperfect: ['опубликовать'],
};

perfectVerbs.set(опубликовывать.name.text, опубликовывать);

export { опубликовывать };