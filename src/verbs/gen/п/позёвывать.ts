import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позёвывать: PerfectVerb = {
  name: Word('позёвывать', 3),
  singular1stPerson: Word('позёвываю', 3),
  singular2ndPerson: Word('позёвываешь', 3),
  singular3rdPerson: Word('позёвывает', 3),
  plural1stPerson: Word('позёвываем', 3),
  plural2ndPerson: Word('позёвываете', 3),
  plural3rdPerson: Word('позёвывают', 3),
  masculinePast: Word('позёвывал', 3),
  femininePast: Word('позёвывала', 3),
  neuterPast: Word('позёвывало', 3),
  pluralPast: Word('позёвывали', 3),
  imperativeInformal: Word('позёвывай', 3),
  imperativeFormal: Word('позёвывайте', 3),
  imperfect: [],
};

perfectVerbs.set(позёвывать.name.text, позёвывать);

export { позёвывать };