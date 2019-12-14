import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокидывать: PerfectVerb = {
  name: Word('прокидывать', 4),
  singular1stPerson: Word('прокидываю', 4),
  singular2ndPerson: Word('прокидываешь', 4),
  singular3rdPerson: Word('прокидывает', 4),
  plural1stPerson: Word('прокидываем', 4),
  plural2ndPerson: Word('прокидываете', 4),
  plural3rdPerson: Word('прокидывают', 4),
  masculinePast: Word('прокидывал', 4),
  femininePast: Word('прокидывала', 4),
  neuterPast: Word('прокидывало', 4),
  pluralPast: Word('прокидывали', 4),
  imperativeInformal: Word('прокидывай', 4),
  imperativeFormal: Word('прокидывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокидывать.name.text, прокидывать);

export { прокидывать };