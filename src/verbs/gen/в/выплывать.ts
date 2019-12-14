import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплывать: PerfectVerb = {
  name: Word('выплывать', 6),
  singular1stPerson: Word('выплываю', 6),
  singular2ndPerson: Word('выплываешь', 6),
  singular3rdPerson: Word('выплывает', 6),
  plural1stPerson: Word('выплываем', 6),
  plural2ndPerson: Word('выплываете', 6),
  plural3rdPerson: Word('выплывают', 6),
  masculinePast: Word('выплывал', 6),
  femininePast: Word('выплывала', 6),
  neuterPast: Word('выплывало', 6),
  pluralPast: Word('выплывали', 6),
  imperativeInformal: Word('выплывай', 6),
  imperativeFormal: Word('выплывайте', 6),
  imperfect: [],
};

perfectVerbs.set(выплывать.name.text, выплывать);

export { выплывать };