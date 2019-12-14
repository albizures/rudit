import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изведывать: PerfectVerb = {
  name: Word('изведывать', 3),
  singular1stPerson: Word('изведываю', 3),
  singular2ndPerson: Word('изведываешь', 3),
  singular3rdPerson: Word('изведывает', 3),
  plural1stPerson: Word('изведываем', 3),
  plural2ndPerson: Word('изведываете', 3),
  plural3rdPerson: Word('изведывают', 3),
  masculinePast: Word('изведывал', 3),
  femininePast: Word('изведывала', 3),
  neuterPast: Word('изведывало', 3),
  pluralPast: Word('изведывали', 3),
  imperativeInformal: Word('изведывай', 3),
  imperativeFormal: Word('изведывайте', 3),
  imperfect: [],
};

perfectVerbs.set(изведывать.name.text, изведывать);

export { изведывать };