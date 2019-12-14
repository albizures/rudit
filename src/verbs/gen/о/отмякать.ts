import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмякать: PerfectVerb = {
  name: Word('отмякать', 5),
  singular1stPerson: Word('отмякаю', 5),
  singular2ndPerson: Word('отмякаешь', 5),
  singular3rdPerson: Word('отмякает', 5),
  plural1stPerson: Word('отмякаем', 5),
  plural2ndPerson: Word('отмякаете', 5),
  plural3rdPerson: Word('отмякают', 5),
  masculinePast: Word('отмякал', 5),
  femininePast: Word('отмякала', 5),
  neuterPast: Word('отмякало', 5),
  pluralPast: Word('отмякали', 5),
  imperativeInformal: Word('отмякай', 5),
  imperativeFormal: Word('отмякайте', 5),
  imperfect: [],
};

perfectVerbs.set(отмякать.name.text, отмякать);

export { отмякать };