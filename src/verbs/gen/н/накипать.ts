import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накипать: PerfectVerb = {
  name: Word('накипать', 5),
  singular1stPerson: Word('накипаю', 5),
  singular2ndPerson: Word('накипаешь', 5),
  singular3rdPerson: Word('накипает', 5),
  plural1stPerson: Word('накипаем', 5),
  plural2ndPerson: Word('накипаете', 5),
  plural3rdPerson: Word('накипают', 5),
  masculinePast: Word('накипал', 5),
  femininePast: Word('накипала', 5),
  neuterPast: Word('накипало', 5),
  pluralPast: Word('накипали', 5),
  imperativeInformal: Word('накипай', 5),
  imperativeFormal: Word('накипайте', 5),
  imperfect: [],
};

perfectVerbs.set(накипать.name.text, накипать);

export { накипать };