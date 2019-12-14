import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкатывать: PerfectVerb = {
  name: Word('выкатывать', 3),
  singular1stPerson: Word('выкатываю', 3),
  singular2ndPerson: Word('выкатываешь', 3),
  singular3rdPerson: Word('выкатывает', 3),
  plural1stPerson: Word('выкатываем', 3),
  plural2ndPerson: Word('выкатываете', 3),
  plural3rdPerson: Word('выкатывают', 3),
  masculinePast: Word('выкатывал', 3),
  femininePast: Word('выкатывала', 3),
  neuterPast: Word('выкатывало', 3),
  pluralPast: Word('выкатывали', 3),
  imperativeInformal: Word('выкатывай', 3),
  imperativeFormal: Word('выкатывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкатывать.name.text, выкатывать);

export { выкатывать };