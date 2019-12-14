import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переряжать: PerfectVerb = {
  name: Word('переряжать', 7),
  singular1stPerson: Word('переряжаю', 7),
  singular2ndPerson: Word('переряжаешь', 7),
  singular3rdPerson: Word('переряжает', 7),
  plural1stPerson: Word('переряжаем', 7),
  plural2ndPerson: Word('переряжаете', 7),
  plural3rdPerson: Word('переряжают', 7),
  masculinePast: Word('переряжал', 7),
  femininePast: Word('переряжала', 7),
  neuterPast: Word('переряжало', 7),
  pluralPast: Word('переряжали', 7),
  imperativeInformal: Word('переряжай', 7),
  imperativeFormal: Word('переряжайте', 7),
  imperfect: [],
};

perfectVerbs.set(переряжать.name.text, переряжать);

export { переряжать };