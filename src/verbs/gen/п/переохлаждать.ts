import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переохлаждать: PerfectVerb = {
  name: Word('переохлаждать', 10),
  singular1stPerson: Word('переохлаждаю', 10),
  singular2ndPerson: Word('переохлаждаешь', 10),
  singular3rdPerson: Word('переохлаждает', 10),
  plural1stPerson: Word('переохлаждаем', 10),
  plural2ndPerson: Word('переохлаждаете', 10),
  plural3rdPerson: Word('переохлаждают', 10),
  masculinePast: Word('переохлаждал', 10),
  femininePast: Word('переохлаждала', 10),
  neuterPast: Word('переохлаждало', 10),
  pluralPast: Word('переохлаждали', 10),
  imperativeInformal: Word('переохлаждай', 10),
  imperativeFormal: Word('переохлаждайте', 10),
  imperfect: [],
};

perfectVerbs.set(переохлаждать.name.text, переохлаждать);

export { переохлаждать };