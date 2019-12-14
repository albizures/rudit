import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплёвывать: PerfectVerb = {
  name: Word('поплёвывать', 8),
  singular1stPerson: Word('поплёвываю', 8),
  singular2ndPerson: Word('поплёвываешь', 8),
  singular3rdPerson: Word('поплёвывает', 8),
  plural1stPerson: Word('поплёвываем', 8),
  plural2ndPerson: Word('поплёвываете', 8),
  plural3rdPerson: Word('поплёвывают', 8),
  masculinePast: Word('поплёвывал', 8),
  femininePast: Word('поплёвывала', 8),
  neuterPast: Word('поплёвывало', 8),
  pluralPast: Word('поплёвывали', 8),
  imperativeInformal: Word('поплёвывай', 8),
  imperativeFormal: Word('поплёвывайте', 8),
  imperfect: [],
};

perfectVerbs.set(поплёвывать.name.text, поплёвывать);

export { поплёвывать };