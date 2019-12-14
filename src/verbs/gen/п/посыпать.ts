import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посыпать: PerfectVerb = {
  name: Word('посыпать', 5),
  singular1stPerson: Word('посыпаю', 5),
  singular2ndPerson: Word('посыпаешь', 5),
  singular3rdPerson: Word('посыпает', 5),
  plural1stPerson: Word('посыпаем', 5),
  plural2ndPerson: Word('посыпаете', 5),
  plural3rdPerson: Word('посыпают', 5),
  masculinePast: Word('посыпал', 5),
  femininePast: Word('посыпала', 5),
  neuterPast: Word('посыпало', 5),
  pluralPast: Word('посыпали', 5),
  imperativeInformal: Word('посыпай', 5),
  imperativeFormal: Word('посыпайте', 5),
  imperfect: [],
};

perfectVerbs.set(посыпать.name.text, посыпать);

export { посыпать };