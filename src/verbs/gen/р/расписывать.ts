import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расписывать: PerfectVerb = {
  name: Word('расписывать', 4),
  singular1stPerson: Word('расписываю', 4),
  singular2ndPerson: Word('расписываешь', 4),
  singular3rdPerson: Word('расписывает', 4),
  plural1stPerson: Word('расписываем', 4),
  plural2ndPerson: Word('расписываете', 4),
  plural3rdPerson: Word('расписывают', 4),
  masculinePast: Word('расписывал', 4),
  femininePast: Word('расписывала', 4),
  neuterPast: Word('расписывало', 4),
  pluralPast: Word('расписывали', 4),
  imperativeInformal: Word('расписывай', 4),
  imperativeFormal: Word('расписывайте', 4),
  imperfect: [],
};

perfectVerbs.set(расписывать.name.text, расписывать);

export { расписывать };