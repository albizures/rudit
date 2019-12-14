import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскусывать: PerfectVerb = {
  name: Word('раскусывать', 4),
  singular1stPerson: Word('раскусываю', 4),
  singular2ndPerson: Word('раскусываешь', 4),
  singular3rdPerson: Word('раскусывает', 4),
  plural1stPerson: Word('раскусываем', 4),
  plural2ndPerson: Word('раскусываете', 4),
  plural3rdPerson: Word('раскусывают', 4),
  masculinePast: Word('раскусывал', 4),
  femininePast: Word('раскусывала', 4),
  neuterPast: Word('раскусывало', 4),
  pluralPast: Word('раскусывали', 4),
  imperativeInformal: Word('раскусывай', 4),
  imperativeFormal: Word('раскусывайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскусывать.name.text, раскусывать);

export { раскусывать };