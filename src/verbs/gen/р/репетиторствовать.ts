import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const репетиторствовать: PerfectVerb = {
  name: Word('репетиторствовать', 5),
  singular1stPerson: Word('репетиторствую', 5),
  singular2ndPerson: Word('репетиторствуешь', 5),
  singular3rdPerson: Word('репетиторствует', 5),
  plural1stPerson: Word('репетиторствуем', 5),
  plural2ndPerson: Word('репетиторствуете', 5),
  plural3rdPerson: Word('репетиторствуют', 5),
  masculinePast: Word('репетиторствовал', 5),
  femininePast: Word('репетиторствовала', 5),
  neuterPast: Word('репетиторствовало', 5),
  pluralPast: Word('репетиторствовали', 5),
  imperativeInformal: Word('репетиторствуй', 5),
  imperativeFormal: Word('репетиторствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(репетиторствовать.name.text, репетиторствовать);

export { репетиторствовать };