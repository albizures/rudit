import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропекать: PerfectVerb = {
  name: Word('пропекать', 6),
  singular1stPerson: Word('пропекаю', 6),
  singular2ndPerson: Word('пропекаешь', 6),
  singular3rdPerson: Word('пропекает', 6),
  plural1stPerson: Word('пропекаем', 6),
  plural2ndPerson: Word('пропекаете', 6),
  plural3rdPerson: Word('пропекают', 6),
  masculinePast: Word('пропекал', 6),
  femininePast: Word('пропекала', 6),
  neuterPast: Word('пропекало', 6),
  pluralPast: Word('пропекали', 6),
  imperativeInformal: Word('пропекай', 6),
  imperativeFormal: Word('пропекайте', 6),
  imperfect: [],
};

perfectVerbs.set(пропекать.name.text, пропекать);

export { пропекать };