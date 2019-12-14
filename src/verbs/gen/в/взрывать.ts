import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрывать: PerfectVerb = {
  name: Word('взрывать', 5),
  singular1stPerson: Word('взрываю', 5),
  singular2ndPerson: Word('взрываешь', 5),
  singular3rdPerson: Word('взрывает', 5),
  plural1stPerson: Word('взрываем', 5),
  plural2ndPerson: Word('взрываете', 5),
  plural3rdPerson: Word('взрывают', 5),
  masculinePast: Word('взрывал', 5),
  femininePast: Word('взрывала', 5),
  neuterPast: Word('взрывало', 5),
  pluralPast: Word('взрывали', 5),
  imperativeInformal: Word('взрывай', 5),
  imperativeFormal: Word('взрывайте', 5),
  imperfect: [],
};

perfectVerbs.set(взрывать.name.text, взрывать);

export { взрывать };