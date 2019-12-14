import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплёвывать: PerfectVerb = {
  name: Word('выплёвывать', 8),
  singular1stPerson: Word('выплёвываю', 8),
  singular2ndPerson: Word('выплёвываешь', 8),
  singular3rdPerson: Word('выплёвывает', 8),
  plural1stPerson: Word('выплёвываем', 8),
  plural2ndPerson: Word('выплёвываете', 8),
  plural3rdPerson: Word('выплёвывают', 8),
  masculinePast: Word('выплёвывал', 8),
  femininePast: Word('выплёвывала', 8),
  neuterPast: Word('выплёвывало', 8),
  pluralPast: Word('выплёвывали', 8),
  imperativeInformal: Word('выплёвывай', 8),
  imperativeFormal: Word('выплёвывайте', 8),
  imperfect: [],
};

perfectVerbs.set(выплёвывать.name.text, выплёвывать);

export { выплёвывать };