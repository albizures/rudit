import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлопать: PerfectVerb = {
  name: Word('захлопать', 4),
  singular1stPerson: Word('захлопаю', 4),
  singular2ndPerson: Word('захлопаешь', 4),
  singular3rdPerson: Word('захлопает', 4),
  plural1stPerson: Word('захлопаем', 4),
  plural2ndPerson: Word('захлопаете', 4),
  plural3rdPerson: Word('захлопают', 4),
  masculinePast: Word('захлопал', 4),
  femininePast: Word('захлопала', 4),
  neuterPast: Word('захлопало', 4),
  pluralPast: Word('захлопали', 4),
  imperativeInformal: Word('захлопай', 4),
  imperativeFormal: Word('захлопайте', 4),
  imperfect: [],
};

perfectVerbs.set(захлопать.name.text, захлопать);

export { захлопать };