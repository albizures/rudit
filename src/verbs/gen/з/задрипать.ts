import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задрипать: PerfectVerb = {
  name: Word('задрипать', 4),
  singular1stPerson: Word('задрипаю', 4),
  singular2ndPerson: Word('задрипаешь', 4),
  singular3rdPerson: Word('задрипает', 4),
  plural1stPerson: Word('задрипаем', 4),
  plural2ndPerson: Word('задрипаете', 4),
  plural3rdPerson: Word('задрипают', 4),
  masculinePast: Word('задрипал', 4),
  femininePast: Word('задрипала', 4),
  neuterPast: Word('задрипало', 4),
  pluralPast: Word('задрипали', 4),
  imperativeInformal: Word('задрипай', 4),
  imperativeFormal: Word('задрипайте', 4),
  imperfect: [],
};

perfectVerbs.set(задрипать.name.text, задрипать);

export { задрипать };