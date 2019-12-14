import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплёвывать: PerfectVerb = {
  name: Word('сплёвывать', 7),
  singular1stPerson: Word('сплёвываю', 7),
  singular2ndPerson: Word('сплёвываешь', 7),
  singular3rdPerson: Word('сплёвывает', 7),
  plural1stPerson: Word('сплёвываем', 7),
  plural2ndPerson: Word('сплёвываете', 7),
  plural3rdPerson: Word('сплёвывают', 7),
  masculinePast: Word('сплёвывал', 7),
  femininePast: Word('сплёвывала', 7),
  neuterPast: Word('сплёвывало', 7),
  pluralPast: Word('сплёвывали', 7),
  imperativeInformal: Word('сплёвывай', 7),
  imperativeFormal: Word('сплёвывайте', 7),
  imperfect: [],
};

perfectVerbs.set(сплёвывать.name.text, сплёвывать);

export { сплёвывать };