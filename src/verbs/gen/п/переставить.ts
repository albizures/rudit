import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переставить: PerfectVerb = {
  name: Word('переставить', 6),
  singular1stPerson: Word('переставлю', 6),
  singular2ndPerson: Word('переставишь', 6),
  singular3rdPerson: Word('переставит', 6),
  plural1stPerson: Word('переставим', 6),
  plural2ndPerson: Word('переставите', 6),
  plural3rdPerson: Word('переставят', 6),
  masculinePast: Word('переставил', 6),
  femininePast: Word('переставила', 6),
  neuterPast: Word('переставило', 6),
  pluralPast: Word('переставили', 6),
  imperativeInformal: Word('переставь', 6),
  imperativeFormal: Word('переставьте', 6),
  imperfect: ['переставлять'],
};

perfectVerbs.set(переставить.name.text, переставить);

export { переставить };