import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огораживать: PerfectVerb = {
  name: Word('огораживать', 4),
  singular1stPerson: Word('огораживаю', 4),
  singular2ndPerson: Word('огораживаешь', 4),
  singular3rdPerson: Word('огораживает', 4),
  plural1stPerson: Word('огораживаем', 4),
  plural2ndPerson: Word('огораживаете', 4),
  plural3rdPerson: Word('огораживают', 4),
  masculinePast: Word('огораживал', 4),
  femininePast: Word('огораживала', 4),
  neuterPast: Word('огораживало', 4),
  pluralPast: Word('огораживали', 4),
  imperativeInformal: Word('огораживай', 4),
  imperativeFormal: Word('огораживайте', 4),
  imperfect: [],
};

perfectVerbs.set(огораживать.name.text, огораживать);

export { огораживать };