import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опротестовывать: PerfectVerb = {
  name: Word('опротестовывать', 8),
  singular1stPerson: Word('опротестовываю', 8),
  singular2ndPerson: Word('опротестовываешь', 8),
  singular3rdPerson: Word('опротестовывает', 8),
  plural1stPerson: Word('опротестовываем', 8),
  plural2ndPerson: Word('опротестовываете', 8),
  plural3rdPerson: Word('опротестовывают', 8),
  masculinePast: Word('опротестовывал', 8),
  femininePast: Word('опротестовывала', 8),
  neuterPast: Word('опротестовывало', 8),
  pluralPast: Word('опротестовывали', 8),
  imperativeInformal: Word('опротестовывай', 8),
  imperativeFormal: Word('опротестовывайте', 8),
  imperfect: [],
};

perfectVerbs.set(опротестовывать.name.text, опротестовывать);

export { опротестовывать };