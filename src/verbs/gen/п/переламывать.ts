import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переламывать: PerfectVerb = {
  name: Word('переламывать', 5),
  singular1stPerson: Word('переламываю', 5),
  singular2ndPerson: Word('переламываешь', 5),
  singular3rdPerson: Word('переламывает', 5),
  plural1stPerson: Word('переламываем', 5),
  plural2ndPerson: Word('переламываете', 5),
  plural3rdPerson: Word('переламывают', 5),
  masculinePast: Word('переламывал', 5),
  femininePast: Word('переламывала', 5),
  neuterPast: Word('переламывало', 5),
  pluralPast: Word('переламывали', 5),
  imperativeInformal: Word('переламывай', 5),
  imperativeFormal: Word('переламывайте', 5),
  imperfect: [],
};

perfectVerbs.set(переламывать.name.text, переламывать);

export { переламывать };