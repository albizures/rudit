import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебазировать: PerfectVerb = {
  name: Word('перебазировать', 7),
  singular1stPerson: Word('перебазирую', 7),
  singular2ndPerson: Word('перебазируешь', 7),
  singular3rdPerson: Word('перебазирует', 7),
  plural1stPerson: Word('перебазируем', 7),
  plural2ndPerson: Word('перебазируете', 7),
  plural3rdPerson: Word('перебазируют', 7),
  masculinePast: Word('перебазировал', 7),
  femininePast: Word('перебазировала', 7),
  neuterPast: Word('перебазировало', 7),
  pluralPast: Word('перебазировали', 7),
  imperativeInformal: Word('перебазируй', 7),
  imperativeFormal: Word('перебазируйте', 7),
  imperfect: [],
};

perfectVerbs.set(перебазировать.name.text, перебазировать);

export { перебазировать };