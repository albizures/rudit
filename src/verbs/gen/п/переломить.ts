import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переломить: PerfectVerb = {
  name: Word('переломить', 7),
  singular1stPerson: Word('переломлю', 8),
  singular2ndPerson: Word('переломишь', 5),
  singular3rdPerson: Word('переломит', 5),
  plural1stPerson: Word('переломим', 5),
  plural2ndPerson: Word('переломите', 5),
  plural3rdPerson: Word('переломят', 5),
  masculinePast: Word('переломил', 7),
  femininePast: Word('переломила', 7),
  neuterPast: Word('переломило', 7),
  pluralPast: Word('переломили', 7),
  imperativeInformal: Word('переломи', 7),
  imperativeFormal: Word('переломите', 7),
  imperfect: [],
};

perfectVerbs.set(переломить.name.text, переломить);

export { переломить };