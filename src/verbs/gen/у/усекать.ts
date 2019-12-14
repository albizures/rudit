import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усекать: PerfectVerb = {
  name: Word('усекать', 4),
  singular1stPerson: Word('усекаю', 4),
  singular2ndPerson: Word('усекаешь', 4),
  singular3rdPerson: Word('усекает', 4),
  plural1stPerson: Word('усекаем', 4),
  plural2ndPerson: Word('усекаете', 4),
  plural3rdPerson: Word('усекают', 4),
  masculinePast: Word('усекал', 4),
  femininePast: Word('усекала', 4),
  neuterPast: Word('усекало', 4),
  pluralPast: Word('усекали', 4),
  imperativeInformal: Word('усекай', 4),
  imperativeFormal: Word('усекайте', 4),
  imperfect: ['усечь'],
};

perfectVerbs.set(усекать.name.text, усекать);

export { усекать };