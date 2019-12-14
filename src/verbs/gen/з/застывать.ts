import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застывать: PerfectVerb = {
  name: Word('застывать', 6),
  singular1stPerson: Word('застываю', 6),
  singular2ndPerson: Word('застываешь', 6),
  singular3rdPerson: Word('застывает', 6),
  plural1stPerson: Word('застываем', 6),
  plural2ndPerson: Word('застываете', 6),
  plural3rdPerson: Word('застывают', 6),
  masculinePast: Word('застывал', 6),
  femininePast: Word('застывала', 6),
  neuterPast: Word('застывало', 6),
  pluralPast: Word('застывали', 6),
  imperativeInformal: Word('застывай', 6),
  imperativeFormal: Word('застывайте', 6),
  imperfect: [],
};

perfectVerbs.set(застывать.name.text, застывать);

export { застывать };