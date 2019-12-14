import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налаживать: PerfectVerb = {
  name: Word('налаживать', 3),
  singular1stPerson: Word('налаживаю', 3),
  singular2ndPerson: Word('налаживаешь', 3),
  singular3rdPerson: Word('налаживает', 3),
  plural1stPerson: Word('налаживаем', 3),
  plural2ndPerson: Word('налаживаете', 3),
  plural3rdPerson: Word('налаживают', 3),
  masculinePast: Word('налаживал', 3),
  femininePast: Word('налаживала', 3),
  neuterPast: Word('налаживало', 3),
  pluralPast: Word('налаживали', 3),
  imperativeInformal: Word('налаживай', 3),
  imperativeFormal: Word('налаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(налаживать.name.text, налаживать);

export { налаживать };