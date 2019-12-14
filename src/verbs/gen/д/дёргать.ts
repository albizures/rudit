import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёргать: PerfectVerb = {
  name: Word('дёргать', 4),
  singular1stPerson: Word('дёргаю', 4),
  singular2ndPerson: Word('дёргаешь', 4),
  singular3rdPerson: Word('дёргает', 4),
  plural1stPerson: Word('дёргаем', 4),
  plural2ndPerson: Word('дёргаете', 4),
  plural3rdPerson: Word('дёргают', 4),
  masculinePast: Word('дёргал', 4),
  femininePast: Word('дёргала', 4),
  neuterPast: Word('дёргало', 4),
  pluralPast: Word('дёргали', 4),
  imperativeInformal: Word('дёргай', 4),
  imperativeFormal: Word('дёргайте', 4),
  imperfect: [],
};

perfectVerbs.set(дёргать.name.text, дёргать);

export { дёргать };