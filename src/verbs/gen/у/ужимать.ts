import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужимать: PerfectVerb = {
  name: Word('ужимать', 4),
  singular1stPerson: Word('ужимаю', 4),
  singular2ndPerson: Word('ужимаешь', 4),
  singular3rdPerson: Word('ужимает', 4),
  plural1stPerson: Word('ужимаем', 4),
  plural2ndPerson: Word('ужимаете', 4),
  plural3rdPerson: Word('ужимают', 4),
  masculinePast: Word('ужимал', 4),
  femininePast: Word('ужимала', 4),
  neuterPast: Word('ужимало', 4),
  pluralPast: Word('ужимали', 4),
  imperativeInformal: Word('ужимай', 4),
  imperativeFormal: Word('ужимайте', 4),
  imperfect: [],
};

perfectVerbs.set(ужимать.name.text, ужимать);

export { ужимать };