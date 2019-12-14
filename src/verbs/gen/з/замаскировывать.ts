import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замаскировывать: PerfectVerb = {
  name: Word('замаскировывать', 8),
  singular1stPerson: Word('замаскировываю', 8),
  singular2ndPerson: Word('замаскировываешь', 8),
  singular3rdPerson: Word('замаскировывает', 8),
  plural1stPerson: Word('замаскировываем', 8),
  plural2ndPerson: Word('замаскировываете', 8),
  plural3rdPerson: Word('замаскировывают', 8),
  masculinePast: Word('замаскировывал', 8),
  femininePast: Word('замаскировывала', 8),
  neuterPast: Word('замаскировывало', 8),
  pluralPast: Word('замаскировывали', 8),
  imperativeInformal: Word('замаскировывай', 8),
  imperativeFormal: Word('замаскировывайте', 8),
  imperfect: [],
};

perfectVerbs.set(замаскировывать.name.text, замаскировывать);

export { замаскировывать };