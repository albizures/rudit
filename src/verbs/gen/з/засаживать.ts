import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засаживать: PerfectVerb = {
  name: Word('засаживать', 3),
  singular1stPerson: Word('засаживаю', 3),
  singular2ndPerson: Word('засаживаешь', 3),
  singular3rdPerson: Word('засаживает', 3),
  plural1stPerson: Word('засаживаем', 3),
  plural2ndPerson: Word('засаживаете', 3),
  plural3rdPerson: Word('засаживают', 3),
  masculinePast: Word('засаживал', 3),
  femininePast: Word('засаживала', 3),
  neuterPast: Word('засаживало', 3),
  pluralPast: Word('засаживали', 3),
  imperativeInformal: Word('засаживай', 3),
  imperativeFormal: Word('засаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(засаживать.name.text, засаживать);

export { засаживать };