import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утопать: PerfectVerb = {
  name: Word('утопать', 4),
  singular1stPerson: Word('утопаю', 4),
  singular2ndPerson: Word('утопаешь', 4),
  singular3rdPerson: Word('утопает', 4),
  plural1stPerson: Word('утопаем', 4),
  plural2ndPerson: Word('утопаете', 4),
  plural3rdPerson: Word('утопают', 4),
  masculinePast: Word('утопал', 4),
  femininePast: Word('утопала', 4),
  neuterPast: Word('утопало', 4),
  pluralPast: Word('утопали', 4),
  imperativeInformal: Word('утопай', 4),
  imperativeFormal: Word('утопайте', 4),
  imperfect: [],
};

perfectVerbs.set(утопать.name.text, утопать);

export { утопать };