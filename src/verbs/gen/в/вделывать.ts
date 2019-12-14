import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вделывать: PerfectVerb = {
  name: Word('вделывать', 2),
  singular1stPerson: Word('вделываю', 2),
  singular2ndPerson: Word('вделываешь', 2),
  singular3rdPerson: Word('вделывает', 2),
  plural1stPerson: Word('вделываем', 2),
  plural2ndPerson: Word('вделываете', 2),
  plural3rdPerson: Word('вделывают', 2),
  masculinePast: Word('вделывал', 2),
  femininePast: Word('вделывала', 2),
  neuterPast: Word('вделывало', 2),
  pluralPast: Word('вделывали', 2),
  imperativeInformal: Word('вделывай', 2),
  imperativeFormal: Word('вделывайте', 2),
  imperfect: [],
};

perfectVerbs.set(вделывать.name.text, вделывать);

export { вделывать };