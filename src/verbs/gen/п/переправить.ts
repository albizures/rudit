import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переправить: PerfectVerb = {
  name: Word('переправить', 6),
  singular1stPerson: Word('переправлю', 6),
  singular2ndPerson: Word('переправишь', 6),
  singular3rdPerson: Word('переправит', 6),
  plural1stPerson: Word('переправим', 6),
  plural2ndPerson: Word('переправите', 6),
  plural3rdPerson: Word('переправят', 6),
  masculinePast: Word('переправил', 6),
  femininePast: Word('переправила', 6),
  neuterPast: Word('переправило', 6),
  pluralPast: Word('переправили', 6),
  imperativeInformal: Word('переправь', 6),
  imperativeFormal: Word('переправьте', 6),
  imperfect: [],
};

perfectVerbs.set(переправить.name.text, переправить);

export { переправить };