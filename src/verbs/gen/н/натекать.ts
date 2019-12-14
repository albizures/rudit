import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натекать: PerfectVerb = {
  name: Word('натекать', 5),
  singular1stPerson: Word('натекаю', 5),
  singular2ndPerson: Word('натекаешь', 5),
  singular3rdPerson: Word('натекает', 5),
  plural1stPerson: Word('натекаем', 5),
  plural2ndPerson: Word('натекаете', 5),
  plural3rdPerson: Word('натекают', 5),
  masculinePast: Word('натекал', 5),
  femininePast: Word('натекала', 5),
  neuterPast: Word('натекало', 5),
  pluralPast: Word('натекали', 5),
  imperativeInformal: Word('натекай', 5),
  imperativeFormal: Word('натекайте', 5),
  imperfect: [],
};

perfectVerbs.set(натекать.name.text, натекать);

export { натекать };