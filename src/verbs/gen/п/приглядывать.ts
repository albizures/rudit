import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглядывать: PerfectVerb = {
  name: Word('приглядывать', 5),
  singular1stPerson: Word('приглядываю', 5),
  singular2ndPerson: Word('приглядываешь', 5),
  singular3rdPerson: Word('приглядывает', 5),
  plural1stPerson: Word('приглядываем', 5),
  plural2ndPerson: Word('приглядываете', 5),
  plural3rdPerson: Word('приглядывают', 5),
  masculinePast: Word('приглядывал', 5),
  femininePast: Word('приглядывала', 5),
  neuterPast: Word('приглядывало', 5),
  pluralPast: Word('приглядывали', 5),
  imperativeInformal: Word('приглядывай', 5),
  imperativeFormal: Word('приглядывайте', 5),
  imperfect: ['приглядеть'],
};

perfectVerbs.set(приглядывать.name.text, приглядывать);

export { приглядывать };