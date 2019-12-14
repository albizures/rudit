import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмерзать: PerfectVerb = {
  name: Word('вмерзать', 5),
  singular1stPerson: Word('вмерзаю', 5),
  singular2ndPerson: Word('вмерзаешь', 5),
  singular3rdPerson: Word('вмерзает', 5),
  plural1stPerson: Word('вмерзаем', 5),
  plural2ndPerson: Word('вмерзаете', 5),
  plural3rdPerson: Word('вмерзают', 5),
  masculinePast: Word('вмерзал', 5),
  femininePast: Word('вмерзала', 5),
  neuterPast: Word('вмерзало', 5),
  pluralPast: Word('вмерзали', 5),
  imperativeInformal: Word('вмерзай', 5),
  imperativeFormal: Word('вмерзайте', 5),
  imperfect: [],
};

perfectVerbs.set(вмерзать.name.text, вмерзать);

export { вмерзать };