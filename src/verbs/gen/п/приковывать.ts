import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приковывать: PerfectVerb = {
  name: Word('приковывать', 4),
  singular1stPerson: Word('приковываю', 4),
  singular2ndPerson: Word('приковываешь', 4),
  singular3rdPerson: Word('приковывает', 4),
  plural1stPerson: Word('приковываем', 4),
  plural2ndPerson: Word('приковываете', 4),
  plural3rdPerson: Word('приковывают', 4),
  masculinePast: Word('приковывал', 4),
  femininePast: Word('приковывала', 4),
  neuterPast: Word('приковывало', 4),
  pluralPast: Word('приковывали', 4),
  imperativeInformal: Word('приковывай', 4),
  imperativeFormal: Word('приковывайте', 4),
  imperfect: [],
};

perfectVerbs.set(приковывать.name.text, приковывать);

export { приковывать };