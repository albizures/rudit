import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простирать: PerfectVerb = {
  name: Word('простирать', 7),
  singular1stPerson: Word('простираю', 7),
  singular2ndPerson: Word('простираешь', 7),
  singular3rdPerson: Word('простирает', 7),
  plural1stPerson: Word('простираем', 7),
  plural2ndPerson: Word('простираете', 7),
  plural3rdPerson: Word('простирают', 7),
  masculinePast: Word('простирал', 7),
  femininePast: Word('простирала', 7),
  neuterPast: Word('простирало', 7),
  pluralPast: Word('простирали', 7),
  imperativeInformal: Word('простирай', 7),
  imperativeFormal: Word('простирайте', 7),
  imperfect: [],
};

perfectVerbs.set(простирать.name.text, простирать);

export { простирать };