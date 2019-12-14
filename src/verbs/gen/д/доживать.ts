import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доживать: PerfectVerb = {
  name: Word('доживать', 5),
  singular1stPerson: Word('доживаю', 5),
  singular2ndPerson: Word('доживаешь', 5),
  singular3rdPerson: Word('доживает', 5),
  plural1stPerson: Word('доживаем', 5),
  plural2ndPerson: Word('доживаете', 5),
  plural3rdPerson: Word('доживают', 5),
  masculinePast: Word('доживал', 5),
  femininePast: Word('доживала', 5),
  neuterPast: Word('доживало', 5),
  pluralPast: Word('доживали', 5),
  imperativeInformal: Word('доживай', 5),
  imperativeFormal: Word('доживайте', 5),
  imperfect: [],
};

perfectVerbs.set(доживать.name.text, доживать);

export { доживать };