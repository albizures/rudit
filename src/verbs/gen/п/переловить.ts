import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переловить: PerfectVerb = {
  name: Word('переловить', 7),
  singular1stPerson: Word('переловлю', 8),
  singular2ndPerson: Word('переловишь', 5),
  singular3rdPerson: Word('переловит', 5),
  plural1stPerson: Word('переловим', 5),
  plural2ndPerson: Word('переловите', 5),
  plural3rdPerson: Word('переловят', 5),
  masculinePast: Word('переловил', 7),
  femininePast: Word('переловила', 7),
  neuterPast: Word('переловило', 7),
  pluralPast: Word('переловили', 7),
  imperativeInformal: Word('перелови', 7),
  imperativeFormal: Word('переловите', 7),
  imperfect: [],
};

perfectVerbs.set(переловить.name.text, переловить);

export { переловить };