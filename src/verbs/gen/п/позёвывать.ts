import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позёвывать: PerfectVerb = {
  name: Word('позёвывать', 7),
  singular1stPerson: Word('позёвываю', 7),
  singular2ndPerson: Word('позёвываешь', 7),
  singular3rdPerson: Word('позёвывает', 7),
  plural1stPerson: Word('позёвываем', 7),
  plural2ndPerson: Word('позёвываете', 7),
  plural3rdPerson: Word('позёвывают', 7),
  masculinePast: Word('позёвывал', 7),
  femininePast: Word('позёвывала', 7),
  neuterPast: Word('позёвывало', 7),
  pluralPast: Word('позёвывали', 7),
  imperativeInformal: Word('позёвывай', 7),
  imperativeFormal: Word('позёвывайте', 7),
  imperfect: [],
};

perfectVerbs.set(позёвывать.name.text, позёвывать);

export { позёвывать };