import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплёвывать: PerfectVerb = {
  name: Word('сплёвывать', 3),
  singular1stPerson: Word('сплёвываю', 3),
  singular2ndPerson: Word('сплёвываешь', 3),
  singular3rdPerson: Word('сплёвывает', 3),
  plural1stPerson: Word('сплёвываем', 3),
  plural2ndPerson: Word('сплёвываете', 3),
  plural3rdPerson: Word('сплёвывают', 3),
  masculinePast: Word('сплёвывал', 3),
  femininePast: Word('сплёвывала', 3),
  neuterPast: Word('сплёвывало', 3),
  pluralPast: Word('сплёвывали', 3),
  imperativeInformal: Word('сплёвывай', 3),
  imperativeFormal: Word('сплёвывайте', 3),
  imperfect: [],
};

perfectVerbs.set(сплёвывать.name.text, сплёвывать);

export { сплёвывать };