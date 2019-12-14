import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрыскать: PerfectVerb = {
  name: Word('попрыскать', 4),
  singular1stPerson: Word('попрыскаю', 4),
  singular2ndPerson: Word('попрыскаешь', 4),
  singular3rdPerson: Word('попрыскает', 4),
  plural1stPerson: Word('попрыскаем', 4),
  plural2ndPerson: Word('попрыскаете', 4),
  plural3rdPerson: Word('попрыскают', 4),
  masculinePast: Word('попрыскал', 4),
  femininePast: Word('попрыскала', 4),
  neuterPast: Word('попрыскало', 4),
  pluralPast: Word('попрыскали', 4),
  imperativeInformal: Word('попрыскай', 4),
  imperativeFormal: Word('попрыскайте', 4),
  imperfect: [],
};

perfectVerbs.set(попрыскать.name.text, попрыскать);

export { попрыскать };