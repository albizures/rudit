import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надсекать: PerfectVerb = {
  name: Word('надсекать', 6),
  singular1stPerson: Word('надсекаю', 6),
  singular2ndPerson: Word('надсекаешь', 6),
  singular3rdPerson: Word('надсекает', 6),
  plural1stPerson: Word('надсекаем', 6),
  plural2ndPerson: Word('надсекаете', 6),
  plural3rdPerson: Word('надсекают', 6),
  masculinePast: Word('надсекал', 6),
  femininePast: Word('надсекала', 6),
  neuterPast: Word('надсекало', 6),
  pluralPast: Word('надсекали', 6),
  imperativeInformal: Word('надсекай', 6),
  imperativeFormal: Word('надсекайте', 6),
  imperfect: [],
};

perfectVerbs.set(надсекать.name.text, надсекать);

export { надсекать };