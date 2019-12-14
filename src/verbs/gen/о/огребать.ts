import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огребать: PerfectVerb = {
  name: Word('огребать', 5),
  singular1stPerson: Word('огребаю', 5),
  singular2ndPerson: Word('огребаешь', 5),
  singular3rdPerson: Word('огребает', 5),
  plural1stPerson: Word('огребаем', 5),
  plural2ndPerson: Word('огребаете', 5),
  plural3rdPerson: Word('огребают', 5),
  masculinePast: Word('огребал', 5),
  femininePast: Word('огребала', 5),
  neuterPast: Word('огребало', 5),
  pluralPast: Word('огребали', 5),
  imperativeInformal: Word('огребай', 5),
  imperativeFormal: Word('огребайте', 5),
  imperfect: [],
};

perfectVerbs.set(огребать.name.text, огребать);

export { огребать };