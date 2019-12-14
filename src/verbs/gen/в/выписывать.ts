import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выписывать: PerfectVerb = {
  name: Word('выписывать', 3),
  singular1stPerson: Word('выписываю', 3),
  singular2ndPerson: Word('выписываешь', 3),
  singular3rdPerson: Word('выписывает', 3),
  plural1stPerson: Word('выписываем', 3),
  plural2ndPerson: Word('выписываете', 3),
  plural3rdPerson: Word('выписывают', 3),
  masculinePast: Word('выписывал', 3),
  femininePast: Word('выписывала', 3),
  neuterPast: Word('выписывало', 3),
  pluralPast: Word('выписывали', 3),
  imperativeInformal: Word('выписывай', 3),
  imperativeFormal: Word('выписывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выписывать.name.text, выписывать);

export { выписывать };