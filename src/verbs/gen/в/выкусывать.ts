import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкусывать: PerfectVerb = {
  name: Word('выкусывать', 3),
  singular1stPerson: Word('выкусываю', 3),
  singular2ndPerson: Word('выкусываешь', 3),
  singular3rdPerson: Word('выкусывает', 3),
  plural1stPerson: Word('выкусываем', 3),
  plural2ndPerson: Word('выкусываете', 3),
  plural3rdPerson: Word('выкусывают', 3),
  masculinePast: Word('выкусывал', 3),
  femininePast: Word('выкусывала', 3),
  neuterPast: Word('выкусывало', 3),
  pluralPast: Word('выкусывали', 3),
  imperativeInformal: Word('выкусывай', 3),
  imperativeFormal: Word('выкусывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкусывать.name.text, выкусывать);

export { выкусывать };