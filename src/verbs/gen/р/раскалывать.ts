import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскалывать: PerfectVerb = {
  name: Word('раскалывать', 4),
  singular1stPerson: Word('раскалываю', 4),
  singular2ndPerson: Word('раскалываешь', 4),
  singular3rdPerson: Word('раскалывает', 4),
  plural1stPerson: Word('раскалываем', 4),
  plural2ndPerson: Word('раскалываете', 4),
  plural3rdPerson: Word('раскалывают', 4),
  masculinePast: Word('раскалывал', 4),
  femininePast: Word('раскалывала', 4),
  neuterPast: Word('раскалывало', 4),
  pluralPast: Word('раскалывали', 4),
  imperativeInformal: Word('раскалывай', 4),
  imperativeFormal: Word('раскалывайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскалывать.name.text, раскалывать);

export { раскалывать };