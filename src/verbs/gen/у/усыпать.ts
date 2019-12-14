import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усыпать: PerfectVerb = {
  name: Word('усыпать', 4),
  singular1stPerson: Word('усыпаю', 4),
  singular2ndPerson: Word('усыпаешь', 4),
  singular3rdPerson: Word('усыпает', 4),
  plural1stPerson: Word('усыпаем', 4),
  plural2ndPerson: Word('усыпаете', 4),
  plural3rdPerson: Word('усыпают', 4),
  masculinePast: Word('усыпал', 4),
  femininePast: Word('усыпала', 4),
  neuterPast: Word('усыпало', 4),
  pluralPast: Word('усыпали', 4),
  imperativeInformal: Word('усыпай', 4),
  imperativeFormal: Word('усыпайте', 4),
  imperfect: [],
};

perfectVerbs.set(усыпать.name.text, усыпать);

export { усыпать };