import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызывать: PerfectVerb = {
  name: Word('вызывать', 5),
  singular1stPerson: Word('вызываю', 5),
  singular2ndPerson: Word('вызываешь', 5),
  singular3rdPerson: Word('вызывает', 5),
  plural1stPerson: Word('вызываем', 5),
  plural2ndPerson: Word('вызываете', 5),
  plural3rdPerson: Word('вызывают', 5),
  masculinePast: Word('вызывал', 5),
  femininePast: Word('вызывала', 5),
  neuterPast: Word('вызывало', 5),
  pluralPast: Word('вызывали', 5),
  imperativeInformal: Word('вызывай', 5),
  imperativeFormal: Word('вызывайте', 5),
  imperfect: ['вызвать'],
};

perfectVerbs.set(вызывать.name.text, вызывать);

export { вызывать };