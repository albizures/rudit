import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добрасывать: PerfectVerb = {
  name: Word('добрасывать', 4),
  singular1stPerson: Word('добрасываю', 4),
  singular2ndPerson: Word('добрасываешь', 4),
  singular3rdPerson: Word('добрасывает', 4),
  plural1stPerson: Word('добрасываем', 4),
  plural2ndPerson: Word('добрасываете', 4),
  plural3rdPerson: Word('добрасывают', 4),
  masculinePast: Word('добрасывал', 4),
  femininePast: Word('добрасывала', 4),
  neuterPast: Word('добрасывало', 4),
  pluralPast: Word('добрасывали', 4),
  imperativeInformal: Word('добрасывай', 4),
  imperativeFormal: Word('добрасывайте', 4),
  imperfect: [],
};

perfectVerbs.set(добрасывать.name.text, добрасывать);

export { добрасывать };