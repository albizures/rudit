import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const калякать: PerfectVerb = {
  name: Word('калякать', 3),
  singular1stPerson: Word('калякаю', 3),
  singular2ndPerson: Word('калякаешь', 3),
  singular3rdPerson: Word('калякает', 3),
  plural1stPerson: Word('калякаем', 3),
  plural2ndPerson: Word('калякаете', 3),
  plural3rdPerson: Word('калякают', 3),
  masculinePast: Word('калякал', 3),
  femininePast: Word('калякала', 3),
  neuterPast: Word('калякало', 3),
  pluralPast: Word('калякали', 3),
  imperativeInformal: Word('калякай', 3),
  imperativeFormal: Word('калякайте', 3),
  imperfect: [],
};

perfectVerbs.set(калякать.name.text, калякать);

export { калякать };