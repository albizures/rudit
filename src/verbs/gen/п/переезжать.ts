import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переезжать: PerfectVerb = {
  name: Word('переезжать', 7),
  singular1stPerson: Word('переезжаю', 7),
  singular2ndPerson: Word('переезжаешь', 7),
  singular3rdPerson: Word('переезжает', 7),
  plural1stPerson: Word('переезжаем', 7),
  plural2ndPerson: Word('переезжаете', 7),
  plural3rdPerson: Word('переезжают', 7),
  masculinePast: Word('переезжал', 7),
  femininePast: Word('переезжала', 7),
  neuterPast: Word('переезжало', 7),
  pluralPast: Word('переезжали', 7),
  imperativeInformal: Word('переезжай', 7),
  imperativeFormal: Word('переезжайте', 7),
  imperfect: ['переехать'],
};

perfectVerbs.set(переезжать.name.text, переезжать);

export { переезжать };