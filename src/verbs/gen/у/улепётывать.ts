import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улепётывать: PerfectVerb = {
  name: Word('улепётывать', 4),
  singular1stPerson: Word('улепётываю', 4),
  singular2ndPerson: Word('улепётываешь', 4),
  singular3rdPerson: Word('улепётывает', 4),
  plural1stPerson: Word('улепётываем', 4),
  plural2ndPerson: Word('улепётываете', 4),
  plural3rdPerson: Word('улепётывают', 4),
  masculinePast: Word('улепётывал', 4),
  femininePast: Word('улепётывала', 4),
  neuterPast: Word('улепётывало', 4),
  pluralPast: Word('улепётывали', 4),
  imperativeInformal: Word('улепётывай', 4),
  imperativeFormal: Word('улепётывайте', 4),
  imperfect: [],
};

perfectVerbs.set(улепётывать.name.text, улепётывать);

export { улепётывать };