import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёргать: PerfectVerb = {
  name: Word('дёргать', 1),
  singular1stPerson: Word('дёргаю', 1),
  singular2ndPerson: Word('дёргаешь', 1),
  singular3rdPerson: Word('дёргает', 1),
  plural1stPerson: Word('дёргаем', 1),
  plural2ndPerson: Word('дёргаете', 1),
  plural3rdPerson: Word('дёргают', 1),
  masculinePast: Word('дёргал', 1),
  femininePast: Word('дёргала', 1),
  neuterPast: Word('дёргало', 1),
  pluralPast: Word('дёргали', 1),
  imperativeInformal: Word('дёргай', 1),
  imperativeFormal: Word('дёргайте', 1),
  imperfect: [],
};

perfectVerbs.set(дёргать.name.text, дёргать);

export { дёргать };