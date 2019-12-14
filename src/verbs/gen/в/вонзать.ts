import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вонзать: PerfectVerb = {
  name: Word('вонзать', 4),
  singular1stPerson: Word('вонзаю', 4),
  singular2ndPerson: Word('вонзаешь', 4),
  singular3rdPerson: Word('вонзает', 4),
  plural1stPerson: Word('вонзаем', 4),
  plural2ndPerson: Word('вонзаете', 4),
  plural3rdPerson: Word('вонзают', 4),
  masculinePast: Word('вонзал', 4),
  femininePast: Word('вонзала', 4),
  neuterPast: Word('вонзало', 4),
  pluralPast: Word('вонзали', 4),
  imperativeInformal: Word('вонзай', 4),
  imperativeFormal: Word('вонзайте', 4),
  imperfect: [],
};

perfectVerbs.set(вонзать.name.text, вонзать);

export { вонзать };