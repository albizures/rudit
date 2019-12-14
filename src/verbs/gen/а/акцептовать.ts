import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const акцептовать: PerfectVerb = {
  name: Word('акцептовать', 8),
  singular1stPerson: Word('акцептую', 6),
  singular2ndPerson: Word('акцептуешь', 6),
  singular3rdPerson: Word('акцептует', 6),
  plural1stPerson: Word('акцептуем', 6),
  plural2ndPerson: Word('акцептуете', 6),
  plural3rdPerson: Word('акцептуют', 6),
  masculinePast: Word('акцептовал', 8),
  femininePast: Word('акцептовала', 8),
  neuterPast: Word('акцептовало', 8),
  pluralPast: Word('акцептовали', 8),
  imperativeInformal: Word('акцептуй', 6),
  imperativeFormal: Word('акцептуйте', 6),
  imperfect: [],
};

perfectVerbs.set(акцептовать.name.text, акцептовать);

export { акцептовать };