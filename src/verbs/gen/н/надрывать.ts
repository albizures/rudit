import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надрывать: PerfectVerb = {
  name: Word('надрывать', 6),
  singular1stPerson: Word('надрываю', 6),
  singular2ndPerson: Word('надрываешь', 6),
  singular3rdPerson: Word('надрывает', 6),
  plural1stPerson: Word('надрываем', 6),
  plural2ndPerson: Word('надрываете', 6),
  plural3rdPerson: Word('надрывают', 6),
  masculinePast: Word('надрывал', 6),
  femininePast: Word('надрывала', 6),
  neuterPast: Word('надрывало', 6),
  pluralPast: Word('надрывали', 6),
  imperativeInformal: Word('надрывай', 6),
  imperativeFormal: Word('надрывайте', 6),
  imperfect: [],
};

perfectVerbs.set(надрывать.name.text, надрывать);

export { надрывать };