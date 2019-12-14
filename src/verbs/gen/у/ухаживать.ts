import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухаживать: PerfectVerb = {
  name: Word('ухаживать', 2),
  singular1stPerson: Word('ухаживаю', 2),
  singular2ndPerson: Word('ухаживаешь', 2),
  singular3rdPerson: Word('ухаживает', 2),
  plural1stPerson: Word('ухаживаем', 2),
  plural2ndPerson: Word('ухаживаете', 2),
  plural3rdPerson: Word('ухаживают', 2),
  masculinePast: Word('ухаживал', 2),
  femininePast: Word('ухаживала', 2),
  neuterPast: Word('ухаживало', 2),
  pluralPast: Word('ухаживали', 2),
  imperativeInformal: Word('ухаживай', 2),
  imperativeFormal: Word('ухаживайте', 2),
  imperfect: [],
};

perfectVerbs.set(ухаживать.name.text, ухаживать);

export { ухаживать };