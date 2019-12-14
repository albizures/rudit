import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const штопать: PerfectVerb = {
  name: Word('штопать', 2),
  singular1stPerson: Word('штопаю', 2),
  singular2ndPerson: Word('штопаешь', 2),
  singular3rdPerson: Word('штопает', 2),
  plural1stPerson: Word('штопаем', 2),
  plural2ndPerson: Word('штопаете', 2),
  plural3rdPerson: Word('штопают', 2),
  masculinePast: Word('штопал', 2),
  femininePast: Word('штопала', 2),
  neuterPast: Word('штопало', 2),
  pluralPast: Word('штопали', 2),
  imperativeInformal: Word('штопай', 2),
  imperativeFormal: Word('штопайте', 2),
  imperfect: ['заштопать'],
};

perfectVerbs.set(штопать.name.text, штопать);

export { штопать };