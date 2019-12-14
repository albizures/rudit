import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попугать: PerfectVerb = {
  name: Word('попугать', 5),
  singular1stPerson: Word('попугаю', 5),
  singular2ndPerson: Word('попугаешь', 5),
  singular3rdPerson: Word('попугает', 5),
  plural1stPerson: Word('попугаем', 5),
  plural2ndPerson: Word('попугаете', 5),
  plural3rdPerson: Word('попугают', 5),
  masculinePast: Word('попугал', 5),
  femininePast: Word('попугала', 5),
  neuterPast: Word('попугало', 5),
  pluralPast: Word('попугали', 5),
  imperativeInformal: Word('попугай', 5),
  imperativeFormal: Word('попугайте', 5),
  imperfect: ['пугать'],
};

perfectVerbs.set(попугать.name.text, попугать);

export { попугать };