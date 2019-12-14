import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взывать: PerfectVerb = {
  name: Word('взывать', 4),
  singular1stPerson: Word('взываю', 4),
  singular2ndPerson: Word('взываешь', 4),
  singular3rdPerson: Word('взывает', 4),
  plural1stPerson: Word('взываем', 4),
  plural2ndPerson: Word('взываете', 4),
  plural3rdPerson: Word('взывают', 4),
  masculinePast: Word('взывал', 4),
  femininePast: Word('взывала', 4),
  neuterPast: Word('взывало', 4),
  pluralPast: Word('взывали', 4),
  imperativeInformal: Word('взывай', 4),
  imperativeFormal: Word('взывайте', 4),
  imperfect: [],
};

perfectVerbs.set(взывать.name.text, взывать);

export { взывать };