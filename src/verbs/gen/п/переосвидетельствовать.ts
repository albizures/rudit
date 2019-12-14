import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переосвидетельствовать: PerfectVerb = {
  name: Word('переосвидетельствовать', 9),
  singular1stPerson: Word('переосвидетельствую', 9),
  singular2ndPerson: Word('переосвидетельствуешь', 9),
  singular3rdPerson: Word('переосвидетельствует', 9),
  plural1stPerson: Word('переосвидетельствуем', 9),
  plural2ndPerson: Word('переосвидетельствуете', 9),
  plural3rdPerson: Word('переосвидетельствуют', 9),
  masculinePast: Word('переосвидетельствовал', 9),
  femininePast: Word('переосвидетельствовала', 9),
  neuterPast: Word('переосвидетельствовало', 9),
  pluralPast: Word('переосвидетельствовали', 9),
  imperativeInformal: Word('переосвидетельствуй', 9),
  imperativeFormal: Word('переосвидетельствуйте', 9),
  imperfect: [],
};

perfectVerbs.set(переосвидетельствовать.name.text, переосвидетельствовать);

export { переосвидетельствовать };