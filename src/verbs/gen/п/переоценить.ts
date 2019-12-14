import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переоценить: PerfectVerb = {
  name: Word('переоценить', 8),
  singular1stPerson: Word('переоценю', 8),
  singular2ndPerson: Word('переоценишь', 6),
  singular3rdPerson: Word('переоценит', 6),
  plural1stPerson: Word('переоценим', 6),
  plural2ndPerson: Word('переоцените', 6),
  plural3rdPerson: Word('переоценят', 6),
  masculinePast: Word('переоценил', 8),
  femininePast: Word('переоценила', 8),
  neuterPast: Word('переоценило', 8),
  pluralPast: Word('переоценили', 8),
  imperativeInformal: Word('переоцени', 8),
  imperativeFormal: Word('переоцените', 8),
  imperfect: [],
};

perfectVerbs.set(переоценить.name.text, переоценить);

export { переоценить };