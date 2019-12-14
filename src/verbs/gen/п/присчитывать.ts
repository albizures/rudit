import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присчитывать: PerfectVerb = {
  name: Word('присчитывать', 5),
  singular1stPerson: Word('присчитываю', 5),
  singular2ndPerson: Word('присчитываешь', 5),
  singular3rdPerson: Word('присчитывает', 5),
  plural1stPerson: Word('присчитываем', 5),
  plural2ndPerson: Word('присчитываете', 5),
  plural3rdPerson: Word('присчитывают', 5),
  masculinePast: Word('присчитывал', 5),
  femininePast: Word('присчитывала', 5),
  neuterPast: Word('присчитывало', 5),
  pluralPast: Word('присчитывали', 5),
  imperativeInformal: Word('присчитывай', 5),
  imperativeFormal: Word('присчитывайте', 5),
  imperfect: [],
};

perfectVerbs.set(присчитывать.name.text, присчитывать);

export { присчитывать };