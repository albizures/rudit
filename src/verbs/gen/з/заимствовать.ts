import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заимствовать: PerfectVerb = {
  name: Word('заимствовать', 2),
  singular1stPerson: Word('заимствую', 2),
  singular2ndPerson: Word('заимствуешь', 2),
  singular3rdPerson: Word('заимствует', 2),
  plural1stPerson: Word('заимствуем', 2),
  plural2ndPerson: Word('заимствуете', 2),
  plural3rdPerson: Word('заимствуют', 2),
  masculinePast: Word('заимствовал', 2),
  femininePast: Word('заимствовала', 2),
  neuterPast: Word('заимствовало', 2),
  pluralPast: Word('заимствовали', 2),
  imperativeInformal: Word('заимствуй', 2),
  imperativeFormal: Word('заимствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(заимствовать.name.text, заимствовать);

export { заимствовать };