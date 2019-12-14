import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переключить: PerfectVerb = {
  name: Word('переключить', 8),
  singular1stPerson: Word('переключу', 8),
  singular2ndPerson: Word('переключишь', 8),
  singular3rdPerson: Word('переключит', 8),
  plural1stPerson: Word('переключим', 8),
  plural2ndPerson: Word('переключите', 8),
  plural3rdPerson: Word('переключат', 8),
  masculinePast: Word('переключил', 8),
  femininePast: Word('переключила', 8),
  neuterPast: Word('переключило', 8),
  pluralPast: Word('переключили', 8),
  imperativeInformal: Word('переключи', 8),
  imperativeFormal: Word('переключите', 8),
  imperfect: [],
};

perfectVerbs.set(переключить.name.text, переключить);

export { переключить };