import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дометать: PerfectVerb = {
  name: Word('дометать', 5),
  singular1stPerson: Word('дометаю', 5),
  singular2ndPerson: Word('дометаешь', 5),
  singular3rdPerson: Word('дометает', 5),
  plural1stPerson: Word('дометаем', 5),
  plural2ndPerson: Word('дометаете', 5),
  plural3rdPerson: Word('дометают', 5),
  masculinePast: Word('дометал', 5),
  femininePast: Word('дометала', 5),
  neuterPast: Word('дометало', 5),
  pluralPast: Word('дометали', 5),
  imperativeInformal: Word('дометай', 5),
  imperativeFormal: Word('дометайте', 5),
  imperfect: [],
};

perfectVerbs.set(дометать.name.text, дометать);

export { дометать };