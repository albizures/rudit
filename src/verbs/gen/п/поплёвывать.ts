import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплёвывать: PerfectVerb = {
  name: Word('поплёвывать', 4),
  singular1stPerson: Word('поплёвываю', 4),
  singular2ndPerson: Word('поплёвываешь', 4),
  singular3rdPerson: Word('поплёвывает', 4),
  plural1stPerson: Word('поплёвываем', 4),
  plural2ndPerson: Word('поплёвываете', 4),
  plural3rdPerson: Word('поплёвывают', 4),
  masculinePast: Word('поплёвывал', 4),
  femininePast: Word('поплёвывала', 4),
  neuterPast: Word('поплёвывало', 4),
  pluralPast: Word('поплёвывали', 4),
  imperativeInformal: Word('поплёвывай', 4),
  imperativeFormal: Word('поплёвывайте', 4),
  imperfect: [],
};

perfectVerbs.set(поплёвывать.name.text, поплёвывать);

export { поплёвывать };