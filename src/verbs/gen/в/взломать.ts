import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взломать: PerfectVerb = {
  name: Word('взломать', 5),
  singular1stPerson: Word('взломаю', 5),
  singular2ndPerson: Word('взломаешь', 5),
  singular3rdPerson: Word('взломает', 5),
  plural1stPerson: Word('взломаем', 5),
  plural2ndPerson: Word('взломаете', 5),
  plural3rdPerson: Word('взломают', 5),
  masculinePast: Word('взломал', 5),
  femininePast: Word('взломала', 5),
  neuterPast: Word('взломало', 5),
  pluralPast: Word('взломали', 5),
  imperativeInformal: Word('взломай', 5),
  imperativeFormal: Word('взломайте', 5),
  imperfect: [],
};

perfectVerbs.set(взломать.name.text, взломать);

export { взломать };