import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надписывать: PerfectVerb = {
  name: Word('надписывать', 4),
  singular1stPerson: Word('надписываю', 4),
  singular2ndPerson: Word('надписываешь', 4),
  singular3rdPerson: Word('надписывает', 4),
  plural1stPerson: Word('надписываем', 4),
  plural2ndPerson: Word('надписываете', 4),
  plural3rdPerson: Word('надписывают', 4),
  masculinePast: Word('надписывал', 4),
  femininePast: Word('надписывала', 4),
  neuterPast: Word('надписывало', 4),
  pluralPast: Word('надписывали', 4),
  imperativeInformal: Word('надписывай', 4),
  imperativeFormal: Word('надписывайте', 4),
  imperfect: [],
};

perfectVerbs.set(надписывать.name.text, надписывать);

export { надписывать };