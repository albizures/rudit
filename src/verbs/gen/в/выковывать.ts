import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выковывать: PerfectVerb = {
  name: Word('выковывать', 3),
  singular1stPerson: Word('выковываю', 3),
  singular2ndPerson: Word('выковываешь', 3),
  singular3rdPerson: Word('выковывает', 3),
  plural1stPerson: Word('выковываем', 3),
  plural2ndPerson: Word('выковываете', 3),
  plural3rdPerson: Word('выковывают', 3),
  masculinePast: Word('выковывал', 3),
  femininePast: Word('выковывала', 3),
  neuterPast: Word('выковывало', 3),
  pluralPast: Word('выковывали', 3),
  imperativeInformal: Word('выковывай', 3),
  imperativeFormal: Word('выковывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выковывать.name.text, выковывать);

export { выковывать };