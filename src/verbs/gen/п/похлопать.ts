import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похлопать: PerfectVerb = {
  name: Word('похлопать', 4),
  singular1stPerson: Word('похлопаю', 4),
  singular2ndPerson: Word('похлопаешь', 4),
  singular3rdPerson: Word('похлопает', 4),
  plural1stPerson: Word('похлопаем', 4),
  plural2ndPerson: Word('похлопаете', 4),
  plural3rdPerson: Word('похлопают', 4),
  masculinePast: Word('похлопал', 4),
  femininePast: Word('похлопала', 4),
  neuterPast: Word('похлопало', 4),
  pluralPast: Word('похлопали', 4),
  imperativeInformal: Word('похлопай', 4),
  imperativeFormal: Word('похлопайте', 4),
  imperfect: [],
};

perfectVerbs.set(похлопать.name.text, похлопать);

export { похлопать };