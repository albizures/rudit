import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскидывать: PerfectVerb = {
  name: Word('вскидывать', 3),
  singular1stPerson: Word('вскидываю', 3),
  singular2ndPerson: Word('вскидываешь', 3),
  singular3rdPerson: Word('вскидывает', 3),
  plural1stPerson: Word('вскидываем', 3),
  plural2ndPerson: Word('вскидываете', 3),
  plural3rdPerson: Word('вскидывают', 3),
  masculinePast: Word('вскидывал', 3),
  femininePast: Word('вскидывала', 3),
  neuterPast: Word('вскидывало', 3),
  pluralPast: Word('вскидывали', 3),
  imperativeInformal: Word('вскидывай', 3),
  imperativeFormal: Word('вскидывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вскидывать.name.text, вскидывать);

export { вскидывать };