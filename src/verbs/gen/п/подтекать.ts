import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтекать: PerfectVerb = {
  name: Word('подтекать', 6),
  singular1stPerson: Word('подтекаю', 6),
  singular2ndPerson: Word('подтекаешь', 6),
  singular3rdPerson: Word('подтекает', 6),
  plural1stPerson: Word('подтекаем', 6),
  plural2ndPerson: Word('подтекаете', 6),
  plural3rdPerson: Word('подтекают', 6),
  masculinePast: Word('подтекал', 6),
  femininePast: Word('подтекала', 6),
  neuterPast: Word('подтекало', 6),
  pluralPast: Word('подтекали', 6),
  imperativeInformal: Word('подтекай', 6),
  imperativeFormal: Word('подтекайте', 6),
  imperfect: [],
};

perfectVerbs.set(подтекать.name.text, подтекать);

export { подтекать };