import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налипать: PerfectVerb = {
  name: Word('налипать', 5),
  singular1stPerson: Word('налипаю', 5),
  singular2ndPerson: Word('налипаешь', 5),
  singular3rdPerson: Word('налипает', 5),
  plural1stPerson: Word('налипаем', 5),
  plural2ndPerson: Word('налипаете', 5),
  plural3rdPerson: Word('налипают', 5),
  masculinePast: Word('налипал', 5),
  femininePast: Word('налипала', 5),
  neuterPast: Word('налипало', 5),
  pluralPast: Word('налипали', 5),
  imperativeInformal: Word('налипай', 5),
  imperativeFormal: Word('налипайте', 5),
  imperfect: [],
};

perfectVerbs.set(налипать.name.text, налипать);

export { налипать };