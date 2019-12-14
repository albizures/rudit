import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насыпать: PerfectVerb = {
  name: Word('насыпать', 5),
  singular1stPerson: Word('насыпаю', 5),
  singular2ndPerson: Word('насыпаешь', 5),
  singular3rdPerson: Word('насыпает', 5),
  plural1stPerson: Word('насыпаем', 5),
  plural2ndPerson: Word('насыпаете', 5),
  plural3rdPerson: Word('насыпают', 5),
  masculinePast: Word('насыпал', 5),
  femininePast: Word('насыпала', 5),
  neuterPast: Word('насыпало', 5),
  pluralPast: Word('насыпали', 5),
  imperativeInformal: Word('насыпай', 5),
  imperativeFormal: Word('насыпайте', 5),
  imperfect: [],
};

perfectVerbs.set(насыпать.name.text, насыпать);

export { насыпать };