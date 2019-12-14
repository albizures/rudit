import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переигрывать: PerfectVerb = {
  name: Word('переигрывать', 4),
  singular1stPerson: Word('переигрываю', 4),
  singular2ndPerson: Word('переигрываешь', 4),
  singular3rdPerson: Word('переигрывает', 4),
  plural1stPerson: Word('переигрываем', 4),
  plural2ndPerson: Word('переигрываете', 4),
  plural3rdPerson: Word('переигрывают', 4),
  masculinePast: Word('переигрывал', 4),
  femininePast: Word('переигрывала', 4),
  neuterPast: Word('переигрывало', 4),
  pluralPast: Word('переигрывали', 4),
  imperativeInformal: Word('переигрывай', 4),
  imperativeFormal: Word('переигрывайте', 4),
  imperfect: [],
};

perfectVerbs.set(переигрывать.name.text, переигрывать);

export { переигрывать };