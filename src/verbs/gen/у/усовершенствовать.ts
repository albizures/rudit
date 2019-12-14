import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усовершенствовать: PerfectVerb = {
  name: Word('усовершенствовать', 7),
  singular1stPerson: Word('усовершенствую', 7),
  singular2ndPerson: Word('усовершенствуешь', 7),
  singular3rdPerson: Word('усовершенствует', 7),
  plural1stPerson: Word('усовершенствуем', 7),
  plural2ndPerson: Word('усовершенствуете', 7),
  plural3rdPerson: Word('усовершенствуют', 7),
  masculinePast: Word('усовершенствовал', 7),
  femininePast: Word('усовершенствовала', 7),
  neuterPast: Word('усовершенствовало', 7),
  pluralPast: Word('усовершенствовали', 7),
  imperativeInformal: Word('усовершенствуй', 7),
  imperativeFormal: Word('усовершенствуйте', 7),
  imperfect: ['совершенствовать'],
};

perfectVerbs.set(усовершенствовать.name.text, усовершенствовать);

export { усовершенствовать };