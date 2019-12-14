import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const седлать: PerfectVerb = {
  name: Word('седлать', 4),
  singular1stPerson: Word('седлаю', 4),
  singular2ndPerson: Word('седлаешь', 4),
  singular3rdPerson: Word('седлает', 4),
  plural1stPerson: Word('седлаем', 4),
  plural2ndPerson: Word('седлаете', 4),
  plural3rdPerson: Word('седлают', 4),
  masculinePast: Word('седлал', 4),
  femininePast: Word('седлала', 4),
  neuterPast: Word('седлало', 4),
  pluralPast: Word('седлали', 4),
  imperativeInformal: Word('седлай', 4),
  imperativeFormal: Word('седлайте', 4),
  imperfect: ['седлать'],
};

perfectVerbs.set(седлать.name.text, седлать);

export { седлать };