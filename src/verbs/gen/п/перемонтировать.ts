import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемонтировать: PerfectVerb = {
  name: Word('перемонтировать', 8),
  singular1stPerson: Word('перемонтирую', 8),
  singular2ndPerson: Word('перемонтируешь', 8),
  singular3rdPerson: Word('перемонтирует', 8),
  plural1stPerson: Word('перемонтируем', 8),
  plural2ndPerson: Word('перемонтируете', 8),
  plural3rdPerson: Word('перемонтируют', 8),
  masculinePast: Word('перемонтировал', 8),
  femininePast: Word('перемонтировала', 8),
  neuterPast: Word('перемонтировало', 8),
  pluralPast: Word('перемонтировали', 8),
  imperativeInformal: Word('перемонтируй', 8),
  imperativeFormal: Word('перемонтируйте', 8),
  imperfect: [],
};

perfectVerbs.set(перемонтировать.name.text, перемонтировать);

export { перемонтировать };