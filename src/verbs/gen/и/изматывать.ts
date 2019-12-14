import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изматывать: PerfectVerb = {
  name: Word('изматывать', 3),
  singular1stPerson: Word('изматываю', 3),
  singular2ndPerson: Word('изматываешь', 3),
  singular3rdPerson: Word('изматывает', 3),
  plural1stPerson: Word('изматываем', 3),
  plural2ndPerson: Word('изматываете', 3),
  plural3rdPerson: Word('изматывают', 3),
  masculinePast: Word('изматывал', 3),
  femininePast: Word('изматывала', 3),
  neuterPast: Word('изматывало', 3),
  pluralPast: Word('изматывали', 3),
  imperativeInformal: Word('изматывай', 3),
  imperativeFormal: Word('изматывайте', 3),
  imperfect: [],
};

perfectVerbs.set(изматывать.name.text, изматывать);

export { изматывать };