import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссякать: PerfectVerb = {
  name: Word('иссякать', 5),
  singular1stPerson: Word('иссякаю', 5),
  singular2ndPerson: Word('иссякаешь', 5),
  singular3rdPerson: Word('иссякает', 5),
  plural1stPerson: Word('иссякаем', 5),
  plural2ndPerson: Word('иссякаете', 5),
  plural3rdPerson: Word('иссякают', 5),
  masculinePast: Word('иссякал', 5),
  femininePast: Word('иссякала', 5),
  neuterPast: Word('иссякало', 5),
  pluralPast: Word('иссякали', 5),
  imperativeInformal: Word('иссякай', 5),
  imperativeFormal: Word('иссякайте', 5),
  imperfect: [],
};

perfectVerbs.set(иссякать.name.text, иссякать);

export { иссякать };