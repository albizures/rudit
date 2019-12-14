import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассекать: PerfectVerb = {
  name: Word('рассекать', 6),
  singular1stPerson: Word('рассекаю', 6),
  singular2ndPerson: Word('рассекаешь', 6),
  singular3rdPerson: Word('рассекает', 6),
  plural1stPerson: Word('рассекаем', 6),
  plural2ndPerson: Word('рассекаете', 6),
  plural3rdPerson: Word('рассекают', 6),
  masculinePast: Word('рассекал', 6),
  femininePast: Word('рассекала', 6),
  neuterPast: Word('рассекало', 6),
  pluralPast: Word('рассекали', 6),
  imperativeInformal: Word('рассекай', 6),
  imperativeFormal: Word('рассекайте', 6),
  imperfect: [],
};

perfectVerbs.set(рассекать.name.text, рассекать);

export { рассекать };