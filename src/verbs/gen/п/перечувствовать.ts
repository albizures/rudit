import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечувствовать: PerfectVerb = {
  name: Word('перечувствовать', 5),
  singular1stPerson: Word('перечувствую', 5),
  singular2ndPerson: Word('перечувствуешь', 5),
  singular3rdPerson: Word('перечувствует', 5),
  plural1stPerson: Word('перечувствуем', 5),
  plural2ndPerson: Word('перечувствуете', 5),
  plural3rdPerson: Word('перечувствуют', 5),
  masculinePast: Word('перечувствовал', 5),
  femininePast: Word('перечувствовала', 5),
  neuterPast: Word('перечувствовало', 5),
  pluralPast: Word('перечувствовали', 5),
  imperativeInformal: Word('перечувствуй', 5),
  imperativeFormal: Word('перечувствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(перечувствовать.name.text, перечувствовать);

export { перечувствовать };