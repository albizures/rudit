import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улепётывать: PerfectVerb = {
  name: Word('улепётывать', 8),
  singular1stPerson: Word('улепётываю', 8),
  singular2ndPerson: Word('улепётываешь', 8),
  singular3rdPerson: Word('улепётывает', 8),
  plural1stPerson: Word('улепётываем', 8),
  plural2ndPerson: Word('улепётываете', 8),
  plural3rdPerson: Word('улепётывают', 8),
  masculinePast: Word('улепётывал', 8),
  femininePast: Word('улепётывала', 8),
  neuterPast: Word('улепётывало', 8),
  pluralPast: Word('улепётывали', 8),
  imperativeInformal: Word('улепётывай', 8),
  imperativeFormal: Word('улепётывайте', 8),
  imperfect: [],
};

perfectVerbs.set(улепётывать.name.text, улепётывать);

export { улепётывать };