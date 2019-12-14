import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбегать: PerfectVerb = {
  name: Word('взбегать', 5),
  singular1stPerson: Word('взбегаю', 5),
  singular2ndPerson: Word('взбегаешь', 5),
  singular3rdPerson: Word('взбегает', 5),
  plural1stPerson: Word('взбегаем', 5),
  plural2ndPerson: Word('взбегаете', 5),
  plural3rdPerson: Word('взбегают', 5),
  masculinePast: Word('взбегал', 5),
  femininePast: Word('взбегала', 5),
  neuterPast: Word('взбегало', 5),
  pluralPast: Word('взбегали', 5),
  imperativeInformal: Word('взбегай', 5),
  imperativeFormal: Word('взбегайте', 5),
  imperfect: [],
};

perfectVerbs.set(взбегать.name.text, взбегать);

export { взбегать };