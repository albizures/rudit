import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слопать: PerfectVerb = {
  name: Word('слопать', 2),
  singular1stPerson: Word('слопаю', 2),
  singular2ndPerson: Word('слопаешь', 2),
  singular3rdPerson: Word('слопает', 2),
  plural1stPerson: Word('слопаем', 2),
  plural2ndPerson: Word('слопаете', 2),
  plural3rdPerson: Word('слопают', 2),
  masculinePast: Word('слопал', 2),
  femininePast: Word('слопала', 2),
  neuterPast: Word('слопало', 2),
  pluralPast: Word('слопали', 2),
  imperativeInformal: Word('слопай', 2),
  imperativeFormal: Word('слопайте', 2),
  imperfect: [],
};

perfectVerbs.set(слопать.name.text, слопать);

export { слопать };