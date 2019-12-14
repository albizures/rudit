import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересекать: PerfectVerb = {
  name: Word('пересекать', 7),
  singular1stPerson: Word('пересекаю', 7),
  singular2ndPerson: Word('пересекаешь', 7),
  singular3rdPerson: Word('пересекает', 7),
  plural1stPerson: Word('пересекаем', 7),
  plural2ndPerson: Word('пересекаете', 7),
  plural3rdPerson: Word('пересекают', 7),
  masculinePast: Word('пересекал', 7),
  femininePast: Word('пересекала', 7),
  neuterPast: Word('пересекало', 7),
  pluralPast: Word('пересекали', 7),
  imperativeInformal: Word('пересекай', 7),
  imperativeFormal: Word('пересекайте', 7),
  imperfect: [],
};

perfectVerbs.set(пересекать.name.text, пересекать);

export { пересекать };