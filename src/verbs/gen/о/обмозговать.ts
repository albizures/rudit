import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмозговать: PerfectVerb = {
  name: Word('обмозговать', 8),
  singular1stPerson: Word('обмозгую', 6),
  singular2ndPerson: Word('обмозгуешь', 6),
  singular3rdPerson: Word('обмозгует', 6),
  plural1stPerson: Word('обмозгуем', 6),
  plural2ndPerson: Word('обмозгуете', 6),
  plural3rdPerson: Word('обмозгуют', 6),
  masculinePast: Word('обмозговал', 8),
  femininePast: Word('обмозговала', 8),
  neuterPast: Word('обмозговало', 8),
  pluralPast: Word('обмозговали', 8),
  imperativeInformal: Word('обмозгуй', 6),
  imperativeFormal: Word('обмозгуйте', 6),
  imperfect: [],
};

perfectVerbs.set(обмозговать.name.text, обмозговать);

export { обмозговать };