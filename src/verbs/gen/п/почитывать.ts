import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почитывать: PerfectVerb = {
  name: Word('почитывать', 3),
  singular1stPerson: Word('почитываю', 3),
  singular2ndPerson: Word('почитываешь', 3),
  singular3rdPerson: Word('почитывает', 3),
  plural1stPerson: Word('почитываем', 3),
  plural2ndPerson: Word('почитываете', 3),
  plural3rdPerson: Word('почитывают', 3),
  masculinePast: Word('почитывал', 3),
  femininePast: Word('почитывала', 3),
  neuterPast: Word('почитывало', 3),
  pluralPast: Word('почитывали', 3),
  imperativeInformal: Word('почитывай', 3),
  imperativeFormal: Word('почитывайте', 3),
  imperfect: [],
};

perfectVerbs.set(почитывать.name.text, почитывать);

export { почитывать };