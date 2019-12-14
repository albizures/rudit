import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приделывать: PerfectVerb = {
  name: Word('приделывать', 4),
  singular1stPerson: Word('приделываю', 4),
  singular2ndPerson: Word('приделываешь', 4),
  singular3rdPerson: Word('приделывает', 4),
  plural1stPerson: Word('приделываем', 4),
  plural2ndPerson: Word('приделываете', 4),
  plural3rdPerson: Word('приделывают', 4),
  masculinePast: Word('приделывал', 4),
  femininePast: Word('приделывала', 4),
  neuterPast: Word('приделывало', 4),
  pluralPast: Word('приделывали', 4),
  imperativeInformal: Word('приделывай', 4),
  imperativeFormal: Word('приделывайте', 4),
  imperfect: [],
};

perfectVerbs.set(приделывать.name.text, приделывать);

export { приделывать };