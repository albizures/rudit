import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упорствовать: PerfectVerb = {
  name: Word('упорствовать', 2),
  singular1stPerson: Word('упорствую', 2),
  singular2ndPerson: Word('упорствуешь', 2),
  singular3rdPerson: Word('упорствует', 2),
  plural1stPerson: Word('упорствуем', 2),
  plural2ndPerson: Word('упорствуете', 2),
  plural3rdPerson: Word('упорствуют', 2),
  masculinePast: Word('упорствовал', 2),
  femininePast: Word('упорствовала', 2),
  neuterPast: Word('упорствовало', 2),
  pluralPast: Word('упорствовали', 2),
  imperativeInformal: Word('упорствуй', 2),
  imperativeFormal: Word('упорствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(упорствовать.name.text, упорствовать);

export { упорствовать };