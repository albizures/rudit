import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссекать: PerfectVerb = {
  name: Word('иссекать', 5),
  singular1stPerson: Word('иссекаю', 5),
  singular2ndPerson: Word('иссекаешь', 5),
  singular3rdPerson: Word('иссекает', 5),
  plural1stPerson: Word('иссекаем', 5),
  plural2ndPerson: Word('иссекаете', 5),
  plural3rdPerson: Word('иссекают', 5),
  masculinePast: Word('иссекал', 5),
  femininePast: Word('иссекала', 5),
  neuterPast: Word('иссекало', 5),
  pluralPast: Word('иссекали', 5),
  imperativeInformal: Word('иссекай', 5),
  imperativeFormal: Word('иссекайте', 5),
  imperfect: [],
};

perfectVerbs.set(иссекать.name.text, иссекать);

export { иссекать };