import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привлекать: PerfectVerb = {
  name: Word('привлекать', 7),
  singular1stPerson: Word('привлекаю', 7),
  singular2ndPerson: Word('привлекаешь', 7),
  singular3rdPerson: Word('привлекает', 7),
  plural1stPerson: Word('привлекаем', 7),
  plural2ndPerson: Word('привлекаете', 7),
  plural3rdPerson: Word('привлекают', 7),
  masculinePast: Word('привлекал', 7),
  femininePast: Word('привлекала', 7),
  neuterPast: Word('привлекало', 7),
  pluralPast: Word('привлекали', 7),
  imperativeInformal: Word('привлекай', 7),
  imperativeFormal: Word('привлекайте', 7),
  imperfect: ['привлечь'],
};

perfectVerbs.set(привлекать.name.text, привлекать);

export { привлекать };