import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добывать: PerfectVerb = {
  name: Word('добывать', 5),
  singular1stPerson: Word('добываю', 5),
  singular2ndPerson: Word('добываешь', 5),
  singular3rdPerson: Word('добывает', 5),
  plural1stPerson: Word('добываем', 5),
  plural2ndPerson: Word('добываете', 5),
  plural3rdPerson: Word('добывают', 5),
  masculinePast: Word('добывал', 5),
  femininePast: Word('добывала', 5),
  neuterPast: Word('добывало', 5),
  pluralPast: Word('добывали', 5),
  imperativeInformal: Word('добывай', 5),
  imperativeFormal: Word('добывайте', 5),
  imperfect: ['добыть'],
};

perfectVerbs.set(добывать.name.text, добывать);

export { добывать };