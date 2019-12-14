import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брякать: PerfectVerb = {
  name: Word('брякать', 2),
  singular1stPerson: Word('брякаю', 2),
  singular2ndPerson: Word('брякаешь', 2),
  singular3rdPerson: Word('брякает', 2),
  plural1stPerson: Word('брякаем', 2),
  plural2ndPerson: Word('брякаете', 2),
  plural3rdPerson: Word('брякают', 2),
  masculinePast: Word('брякал', 2),
  femininePast: Word('брякала', 2),
  neuterPast: Word('брякало', 2),
  pluralPast: Word('брякали', 2),
  imperativeInformal: Word('брякай', 2),
  imperativeFormal: Word('брякайте', 2),
  imperfect: [],
};

perfectVerbs.set(брякать.name.text, брякать);

export { брякать };