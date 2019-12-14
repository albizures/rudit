import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переживать: PerfectVerb = {
  name: Word('переживать', 7),
  singular1stPerson: Word('переживаю', 7),
  singular2ndPerson: Word('переживаешь', 7),
  singular3rdPerson: Word('переживает', 7),
  plural1stPerson: Word('переживаем', 7),
  plural2ndPerson: Word('переживаете', 7),
  plural3rdPerson: Word('переживают', 7),
  masculinePast: Word('переживал', 7),
  femininePast: Word('переживала', 7),
  neuterPast: Word('переживало', 7),
  pluralPast: Word('переживали', 7),
  imperativeInformal: Word('переживай', 7),
  imperativeFormal: Word('переживайте', 7),
  imperfect: ['пережить'],
};

perfectVerbs.set(переживать.name.text, переживать);

export { переживать };