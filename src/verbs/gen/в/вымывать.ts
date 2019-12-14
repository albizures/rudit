import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымывать: PerfectVerb = {
  name: Word('вымывать', 5),
  singular1stPerson: Word('вымываю', 5),
  singular2ndPerson: Word('вымываешь', 5),
  singular3rdPerson: Word('вымывает', 5),
  plural1stPerson: Word('вымываем', 5),
  plural2ndPerson: Word('вымываете', 5),
  plural3rdPerson: Word('вымывают', 5),
  masculinePast: Word('вымывал', 5),
  femininePast: Word('вымывала', 5),
  neuterPast: Word('вымывало', 5),
  pluralPast: Word('вымывали', 5),
  imperativeInformal: Word('вымывай', 5),
  imperativeFormal: Word('вымывайте', 5),
  imperfect: [],
};

perfectVerbs.set(вымывать.name.text, вымывать);

export { вымывать };