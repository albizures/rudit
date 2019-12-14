import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вплывать: PerfectVerb = {
  name: Word('вплывать', 5),
  singular1stPerson: Word('вплываю', 5),
  singular2ndPerson: Word('вплываешь', 5),
  singular3rdPerson: Word('вплывает', 5),
  plural1stPerson: Word('вплываем', 5),
  plural2ndPerson: Word('вплываете', 5),
  plural3rdPerson: Word('вплывают', 5),
  masculinePast: Word('вплывал', 5),
  femininePast: Word('вплывала', 5),
  neuterPast: Word('вплывало', 5),
  pluralPast: Word('вплывали', 5),
  imperativeInformal: Word('вплывай', 5),
  imperativeFormal: Word('вплывайте', 5),
  imperfect: [],
};

perfectVerbs.set(вплывать.name.text, вплывать);

export { вплывать };