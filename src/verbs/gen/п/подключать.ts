import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подключать: PerfectVerb = {
  name: Word('подключать', 7),
  singular1stPerson: Word('подключаю', 7),
  singular2ndPerson: Word('подключаешь', 7),
  singular3rdPerson: Word('подключает', 7),
  plural1stPerson: Word('подключаем', 7),
  plural2ndPerson: Word('подключаете', 7),
  plural3rdPerson: Word('подключают', 7),
  masculinePast: Word('подключал', 7),
  femininePast: Word('подключала', 7),
  neuterPast: Word('подключало', 7),
  pluralPast: Word('подключали', 7),
  imperativeInformal: Word('подключай', 7),
  imperativeFormal: Word('подключайте', 7),
  imperfect: [],
};

perfectVerbs.set(подключать.name.text, подключать);

export { подключать };