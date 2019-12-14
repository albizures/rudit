import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переписывать: PerfectVerb = {
  name: Word('переписывать', 5),
  singular1stPerson: Word('переписываю', 5),
  singular2ndPerson: Word('переписываешь', 5),
  singular3rdPerson: Word('переписывает', 5),
  plural1stPerson: Word('переписываем', 5),
  plural2ndPerson: Word('переписываете', 5),
  plural3rdPerson: Word('переписывают', 5),
  masculinePast: Word('переписывал', 5),
  femininePast: Word('переписывала', 5),
  neuterPast: Word('переписывало', 5),
  pluralPast: Word('переписывали', 5),
  imperativeInformal: Word('переписывай', 5),
  imperativeFormal: Word('переписывайте', 5),
  imperfect: [],
};

perfectVerbs.set(переписывать.name.text, переписывать);

export { переписывать };