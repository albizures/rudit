import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развязывать: PerfectVerb = {
  name: Word('развязывать', 4),
  singular1stPerson: Word('развязываю', 4),
  singular2ndPerson: Word('развязываешь', 4),
  singular3rdPerson: Word('развязывает', 4),
  plural1stPerson: Word('развязываем', 4),
  plural2ndPerson: Word('развязываете', 4),
  plural3rdPerson: Word('развязывают', 4),
  masculinePast: Word('развязывал', 4),
  femininePast: Word('развязывала', 4),
  neuterPast: Word('развязывало', 4),
  pluralPast: Word('развязывали', 4),
  imperativeInformal: Word('развязывай', 4),
  imperativeFormal: Word('развязывайте', 4),
  imperfect: [],
};

perfectVerbs.set(развязывать.name.text, развязывать);

export { развязывать };