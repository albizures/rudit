import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изживать: PerfectVerb = {
  name: Word('изживать', 5),
  singular1stPerson: Word('изживаю', 5),
  singular2ndPerson: Word('изживаешь', 5),
  singular3rdPerson: Word('изживает', 5),
  plural1stPerson: Word('изживаем', 5),
  plural2ndPerson: Word('изживаете', 5),
  plural3rdPerson: Word('изживают', 5),
  masculinePast: Word('изживал', 5),
  femininePast: Word('изживала', 5),
  neuterPast: Word('изживало', 5),
  pluralPast: Word('изживали', 5),
  imperativeInformal: Word('изживай', 5),
  imperativeFormal: Word('изживайте', 5),
  imperfect: [],
};

perfectVerbs.set(изживать.name.text, изживать);

export { изживать };