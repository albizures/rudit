import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утекать: PerfectVerb = {
  name: Word('утекать', 4),
  singular1stPerson: Word('утекаю', 4),
  singular2ndPerson: Word('утекаешь', 4),
  singular3rdPerson: Word('утекает', 4),
  plural1stPerson: Word('утекаем', 4),
  plural2ndPerson: Word('утекаете', 4),
  plural3rdPerson: Word('утекают', 4),
  masculinePast: Word('утекал', 4),
  femininePast: Word('утекала', 4),
  neuterPast: Word('утекало', 4),
  pluralPast: Word('утекали', 4),
  imperativeInformal: Word('утекай', 4),
  imperativeFormal: Word('утекайте', 4),
  imperfect: [],
};

perfectVerbs.set(утекать.name.text, утекать);

export { утекать };