import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натруживать: PerfectVerb = {
  name: Word('натруживать', 4),
  singular1stPerson: Word('натруживаю', 4),
  singular2ndPerson: Word('натруживаешь', 4),
  singular3rdPerson: Word('натруживает', 4),
  plural1stPerson: Word('натруживаем', 4),
  plural2ndPerson: Word('натруживаете', 4),
  plural3rdPerson: Word('натруживают', 4),
  masculinePast: Word('натруживал', 4),
  femininePast: Word('натруживала', 4),
  neuterPast: Word('натруживало', 4),
  pluralPast: Word('натруживали', 4),
  imperativeInformal: Word('натруживай', 4),
  imperativeFormal: Word('натруживайте', 4),
  imperfect: [],
};

perfectVerbs.set(натруживать.name.text, натруживать);

export { натруживать };