import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскидывать: PerfectVerb = {
  name: Word('раскидывать', 4),
  singular1stPerson: Word('раскидываю', 4),
  singular2ndPerson: Word('раскидываешь', 4),
  singular3rdPerson: Word('раскидывает', 4),
  plural1stPerson: Word('раскидываем', 4),
  plural2ndPerson: Word('раскидываете', 4),
  plural3rdPerson: Word('раскидывают', 4),
  masculinePast: Word('раскидывал', 4),
  femininePast: Word('раскидывала', 4),
  neuterPast: Word('раскидывало', 4),
  pluralPast: Word('раскидывали', 4),
  imperativeInformal: Word('раскидывай', 4),
  imperativeFormal: Word('раскидывайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскидывать.name.text, раскидывать);

export { раскидывать };