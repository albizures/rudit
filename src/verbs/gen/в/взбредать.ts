import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбредать: PerfectVerb = {
  name: Word('взбредать', 6),
  singular1stPerson: Word('взбредаю', 6),
  singular2ndPerson: Word('взбредаешь', 6),
  singular3rdPerson: Word('взбредает', 6),
  plural1stPerson: Word('взбредаем', 6),
  plural2ndPerson: Word('взбредаете', 6),
  plural3rdPerson: Word('взбредают', 6),
  masculinePast: Word('взбредал', 6),
  femininePast: Word('взбредала', 6),
  neuterPast: Word('взбредало', 6),
  pluralPast: Word('взбредали', 6),
  imperativeInformal: Word('взбредай', 6),
  imperativeFormal: Word('взбредайте', 6),
  imperfect: [],
};

perfectVerbs.set(взбредать.name.text, взбредать);

export { взбредать };