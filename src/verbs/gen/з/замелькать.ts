import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замелькать: PerfectVerb = {
  name: Word('замелькать', 7),
  singular1stPerson: Word('замелькаю', 7),
  singular2ndPerson: Word('замелькаешь', 7),
  singular3rdPerson: Word('замелькает', 7),
  plural1stPerson: Word('замелькаем', 7),
  plural2ndPerson: Word('замелькаете', 7),
  plural3rdPerson: Word('замелькают', 7),
  masculinePast: Word('замелькал', 7),
  femininePast: Word('замелькала', 7),
  neuterPast: Word('замелькало', 7),
  pluralPast: Word('замелькали', 7),
  imperativeInformal: Word('замелькай', 7),
  imperativeFormal: Word('замелькайте', 7),
  imperfect: [],
};

perfectVerbs.set(замелькать.name.text, замелькать);

export { замелькать };