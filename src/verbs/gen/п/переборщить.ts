import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переборщить: PerfectVerb = {
  name: Word('переборщить', 8),
  singular1stPerson: Word('переборщу', 8),
  singular2ndPerson: Word('переборщишь', 8),
  singular3rdPerson: Word('переборщит', 8),
  plural1stPerson: Word('переборщим', 8),
  plural2ndPerson: Word('переборщите', 8),
  plural3rdPerson: Word('переборщат', 8),
  masculinePast: Word('переборщил', 8),
  femininePast: Word('переборщила', 8),
  neuterPast: Word('переборщило', 8),
  pluralPast: Word('переборщили', 8),
  imperativeInformal: Word('переборщи', 8),
  imperativeFormal: Word('переборщите', 8),
  imperfect: [],
};

perfectVerbs.set(переборщить.name.text, переборщить);

export { переборщить };