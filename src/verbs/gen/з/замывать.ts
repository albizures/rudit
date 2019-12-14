import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замывать: PerfectVerb = {
  name: Word('замывать', 5),
  singular1stPerson: Word('замываю', 5),
  singular2ndPerson: Word('замываешь', 5),
  singular3rdPerson: Word('замывает', 5),
  plural1stPerson: Word('замываем', 5),
  plural2ndPerson: Word('замываете', 5),
  plural3rdPerson: Word('замывают', 5),
  masculinePast: Word('замывал', 5),
  femininePast: Word('замывала', 5),
  neuterPast: Word('замывало', 5),
  pluralPast: Word('замывали', 5),
  imperativeInformal: Word('замывай', 5),
  imperativeFormal: Word('замывайте', 5),
  imperfect: [],
};

perfectVerbs.set(замывать.name.text, замывать);

export { замывать };