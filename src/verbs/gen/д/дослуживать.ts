import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дослуживать: PerfectVerb = {
  name: Word('дослуживать', 4),
  singular1stPerson: Word('дослуживаю', 4),
  singular2ndPerson: Word('дослуживаешь', 4),
  singular3rdPerson: Word('дослуживает', 4),
  plural1stPerson: Word('дослуживаем', 4),
  plural2ndPerson: Word('дослуживаете', 4),
  plural3rdPerson: Word('дослуживают', 4),
  masculinePast: Word('дослуживал', 4),
  femininePast: Word('дослуживала', 4),
  neuterPast: Word('дослуживало', 4),
  pluralPast: Word('дослуживали', 4),
  imperativeInformal: Word('дослуживай', 4),
  imperativeFormal: Word('дослуживайте', 4),
  imperfect: [],
};

perfectVerbs.set(дослуживать.name.text, дослуживать);

export { дослуживать };