import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепланировать: PerfectVerb = {
  name: Word('перепланировать', 12),
  singular1stPerson: Word('перепланирую', 10),
  singular2ndPerson: Word('перепланируешь', 10),
  singular3rdPerson: Word('перепланирует', 10),
  plural1stPerson: Word('перепланируем', 10),
  plural2ndPerson: Word('перепланируете', 10),
  plural3rdPerson: Word('перепланируют', 10),
  masculinePast: Word('перепланировал', 12),
  femininePast: Word('перепланировала', 12),
  neuterPast: Word('перепланировало', 12),
  pluralPast: Word('перепланировали', 12),
  imperativeInformal: Word('перепланируй', 10),
  imperativeFormal: Word('перепланируйте', 10),
  imperfect: [],
};

perfectVerbs.set(перепланировать.name.text, перепланировать);

export { перепланировать };