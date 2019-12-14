import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбраковывать: PerfectVerb = {
  name: Word('отбраковывать', 6),
  singular1stPerson: Word('отбраковываю', 6),
  singular2ndPerson: Word('отбраковываешь', 6),
  singular3rdPerson: Word('отбраковывает', 6),
  plural1stPerson: Word('отбраковываем', 6),
  plural2ndPerson: Word('отбраковываете', 6),
  plural3rdPerson: Word('отбраковывают', 6),
  masculinePast: Word('отбраковывал', 6),
  femininePast: Word('отбраковывала', 6),
  neuterPast: Word('отбраковывало', 6),
  pluralPast: Word('отбраковывали', 6),
  imperativeInformal: Word('отбраковывай', 6),
  imperativeFormal: Word('отбраковывайте', 6),
  imperfect: [],
};

perfectVerbs.set(отбраковывать.name.text, отбраковывать);

export { отбраковывать };