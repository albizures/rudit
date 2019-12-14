import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опутывать: PerfectVerb = {
  name: Word('опутывать', 2),
  singular1stPerson: Word('опутываю', 2),
  singular2ndPerson: Word('опутываешь', 2),
  singular3rdPerson: Word('опутывает', 2),
  plural1stPerson: Word('опутываем', 2),
  plural2ndPerson: Word('опутываете', 2),
  plural3rdPerson: Word('опутывают', 2),
  masculinePast: Word('опутывал', 2),
  femininePast: Word('опутывала', 2),
  neuterPast: Word('опутывало', 2),
  pluralPast: Word('опутывали', 2),
  imperativeInformal: Word('опутывай', 2),
  imperativeFormal: Word('опутывайте', 2),
  imperfect: [],
};

perfectVerbs.set(опутывать.name.text, опутывать);

export { опутывать };