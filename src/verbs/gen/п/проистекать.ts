import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проистекать: PerfectVerb = {
  name: Word('проистекать', 8),
  singular1stPerson: Word('проистекаю', 8),
  singular2ndPerson: Word('проистекаешь', 8),
  singular3rdPerson: Word('проистекает', 8),
  plural1stPerson: Word('проистекаем', 8),
  plural2ndPerson: Word('проистекаете', 8),
  plural3rdPerson: Word('проистекают', 8),
  masculinePast: Word('проистекал', 8),
  femininePast: Word('проистекала', 8),
  neuterPast: Word('проистекало', 8),
  pluralPast: Word('проистекали', 8),
  imperativeInformal: Word('проистекай', 8),
  imperativeFormal: Word('проистекайте', 8),
  imperfect: [],
};

perfectVerbs.set(проистекать.name.text, проистекать);

export { проистекать };