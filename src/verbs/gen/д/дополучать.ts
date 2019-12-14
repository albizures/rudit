import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дополучать: PerfectVerb = {
  name: Word('дополучать', 7),
  singular1stPerson: Word('дополучаю', 7),
  singular2ndPerson: Word('дополучаешь', 7),
  singular3rdPerson: Word('дополучает', 7),
  plural1stPerson: Word('дополучаем', 7),
  plural2ndPerson: Word('дополучаете', 7),
  plural3rdPerson: Word('дополучают', 7),
  masculinePast: Word('дополучал', 7),
  femininePast: Word('дополучала', 7),
  neuterPast: Word('дополучало', 7),
  pluralPast: Word('дополучали', 7),
  imperativeInformal: Word('дополучай', 7),
  imperativeFormal: Word('дополучайте', 7),
  imperfect: [],
};

perfectVerbs.set(дополучать.name.text, дополучать);

export { дополучать };