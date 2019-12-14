import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сковывать: PerfectVerb = {
  name: Word('сковывать', 2),
  singular1stPerson: Word('сковываю', 2),
  singular2ndPerson: Word('сковываешь', 2),
  singular3rdPerson: Word('сковывает', 2),
  plural1stPerson: Word('сковываем', 2),
  plural2ndPerson: Word('сковываете', 2),
  plural3rdPerson: Word('сковывают', 2),
  masculinePast: Word('сковывал', 2),
  femininePast: Word('сковывала', 2),
  neuterPast: Word('сковывало', 2),
  pluralPast: Word('сковывали', 2),
  imperativeInformal: Word('сковывай', 2),
  imperativeFormal: Word('сковывайте', 2),
  imperfect: [],
};

perfectVerbs.set(сковывать.name.text, сковывать);

export { сковывать };