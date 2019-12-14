import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соглядатайствовать: PerfectVerb = {
  name: Word('соглядатайствовать', 6),
  singular1stPerson: Word('соглядатайствую', 6),
  singular2ndPerson: Word('соглядатайствуешь', 6),
  singular3rdPerson: Word('соглядатайствует', 6),
  plural1stPerson: Word('соглядатайствуем', 6),
  plural2ndPerson: Word('соглядатайствуете', 6),
  plural3rdPerson: Word('соглядатайствуют', 6),
  masculinePast: Word('соглядатайствовал', 6),
  femininePast: Word('соглядатайствовала', 6),
  neuterPast: Word('соглядатайствовало', 6),
  pluralPast: Word('соглядатайствовали', 6),
  imperativeInformal: Word('соглядатайствуй', 6),
  imperativeFormal: Word('соглядатайствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(соглядатайствовать.name.text, соглядатайствовать);

export { соглядатайствовать };