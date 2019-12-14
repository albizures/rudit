import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const губернаторствовать: PerfectVerb = {
  name: Word('губернаторствовать', 6),
  singular1stPerson: Word('губернаторствую', 6),
  singular2ndPerson: Word('губернаторствуешь', 6),
  singular3rdPerson: Word('губернаторствует', 6),
  plural1stPerson: Word('губернаторствуем', 6),
  plural2ndPerson: Word('губернаторствуете', 6),
  plural3rdPerson: Word('губернаторствуют', 6),
  masculinePast: Word('губернаторствовал', 6),
  femininePast: Word('губернаторствовала', 6),
  neuterPast: Word('губернаторствовало', 6),
  pluralPast: Word('губернаторствовали', 6),
  imperativeInformal: Word('губернаторствуй', 6),
  imperativeFormal: Word('губернаторствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(губернаторствовать.name.text, губернаторствовать);

export { губернаторствовать };