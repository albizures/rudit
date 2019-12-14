import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымерзать: PerfectVerb = {
  name: Word('вымерзать', 6),
  singular1stPerson: Word('вымерзаю', 6),
  singular2ndPerson: Word('вымерзаешь', 6),
  singular3rdPerson: Word('вымерзает', 6),
  plural1stPerson: Word('вымерзаем', 6),
  plural2ndPerson: Word('вымерзаете', 6),
  plural3rdPerson: Word('вымерзают', 6),
  masculinePast: Word('вымерзал', 6),
  femininePast: Word('вымерзала', 6),
  neuterPast: Word('вымерзало', 6),
  pluralPast: Word('вымерзали', 6),
  imperativeInformal: Word('вымерзай', 6),
  imperativeFormal: Word('вымерзайте', 6),
  imperfect: [],
};

perfectVerbs.set(вымерзать.name.text, вымерзать);

export { вымерзать };