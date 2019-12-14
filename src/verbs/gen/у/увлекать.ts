import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увлекать: PerfectVerb = {
  name: Word('увлекать', 5),
  singular1stPerson: Word('увлекаю', 5),
  singular2ndPerson: Word('увлекаешь', 5),
  singular3rdPerson: Word('увлекает', 5),
  plural1stPerson: Word('увлекаем', 5),
  plural2ndPerson: Word('увлекаете', 5),
  plural3rdPerson: Word('увлекают', 5),
  masculinePast: Word('увлекал', 5),
  femininePast: Word('увлекала', 5),
  neuterPast: Word('увлекало', 5),
  pluralPast: Word('увлекали', 5),
  imperativeInformal: Word('увлекай', 5),
  imperativeFormal: Word('увлекайте', 5),
  imperfect: [],
};

perfectVerbs.set(увлекать.name.text, увлекать);

export { увлекать };