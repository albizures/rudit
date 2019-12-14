import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплёвывать: PerfectVerb = {
  name: Word('выплёвывать', 4),
  singular1stPerson: Word('выплёвываю', 4),
  singular2ndPerson: Word('выплёвываешь', 4),
  singular3rdPerson: Word('выплёвывает', 4),
  plural1stPerson: Word('выплёвываем', 4),
  plural2ndPerson: Word('выплёвываете', 4),
  plural3rdPerson: Word('выплёвывают', 4),
  masculinePast: Word('выплёвывал', 4),
  femininePast: Word('выплёвывала', 4),
  neuterPast: Word('выплёвывало', 4),
  pluralPast: Word('выплёвывали', 4),
  imperativeInformal: Word('выплёвывай', 4),
  imperativeFormal: Word('выплёвывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выплёвывать.name.text, выплёвывать);

export { выплёвывать };