import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переаттестовывать: PerfectVerb = {
  name: Word('переаттестовывать', 10),
  singular1stPerson: Word('переаттестовываю', 10),
  singular2ndPerson: Word('переаттестовываешь', 10),
  singular3rdPerson: Word('переаттестовывает', 10),
  plural1stPerson: Word('переаттестовываем', 10),
  plural2ndPerson: Word('переаттестовываете', 10),
  plural3rdPerson: Word('переаттестовывают', 10),
  masculinePast: Word('переаттестовывал', 10),
  femininePast: Word('переаттестовывала', 10),
  neuterPast: Word('переаттестовывало', 10),
  pluralPast: Word('переаттестовывали', 10),
  imperativeInformal: Word('переаттестовывай', 10),
  imperativeFormal: Word('переаттестовывайте', 10),
  imperfect: [],
};

perfectVerbs.set(переаттестовывать.name.text, переаттестовывать);

export { переаттестовывать };