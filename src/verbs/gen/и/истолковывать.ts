import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истолковывать: PerfectVerb = {
  name: Word('истолковывать', 6),
  singular1stPerson: Word('истолковываю', 6),
  singular2ndPerson: Word('истолковываешь', 6),
  singular3rdPerson: Word('истолковывает', 6),
  plural1stPerson: Word('истолковываем', 6),
  plural2ndPerson: Word('истолковываете', 6),
  plural3rdPerson: Word('истолковывают', 6),
  masculinePast: Word('истолковывал', 6),
  femininePast: Word('истолковывала', 6),
  neuterPast: Word('истолковывало', 6),
  pluralPast: Word('истолковывали', 6),
  imperativeInformal: Word('истолковывай', 6),
  imperativeFormal: Word('истолковывайте', 6),
  imperfect: [],
};

perfectVerbs.set(истолковывать.name.text, истолковывать);

export { истолковывать };