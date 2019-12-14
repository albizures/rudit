import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позаимствовать: PerfectVerb = {
  name: Word('позаимствовать', 4),
  singular1stPerson: Word('позаимствую', 4),
  singular2ndPerson: Word('позаимствуешь', 4),
  singular3rdPerson: Word('позаимствует', 4),
  plural1stPerson: Word('позаимствуем', 4),
  plural2ndPerson: Word('позаимствуете', 4),
  plural3rdPerson: Word('позаимствуют', 4),
  masculinePast: Word('позаимствовал', 4),
  femininePast: Word('позаимствовала', 4),
  neuterPast: Word('позаимствовало', 4),
  pluralPast: Word('позаимствовали', 4),
  imperativeInformal: Word('позаимствуй', 4),
  imperativeFormal: Word('позаимствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(позаимствовать.name.text, позаимствовать);

export { позаимствовать };