import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпытывать: PerfectVerb = {
  name: Word('выпытывать', 3),
  singular1stPerson: Word('выпытываю', 3),
  singular2ndPerson: Word('выпытываешь', 3),
  singular3rdPerson: Word('выпытывает', 3),
  plural1stPerson: Word('выпытываем', 3),
  plural2ndPerson: Word('выпытываете', 3),
  plural3rdPerson: Word('выпытывают', 3),
  masculinePast: Word('выпытывал', 3),
  femininePast: Word('выпытывала', 3),
  neuterPast: Word('выпытывало', 3),
  pluralPast: Word('выпытывали', 3),
  imperativeInformal: Word('выпытывай', 3),
  imperativeFormal: Word('выпытывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпытывать.name.text, выпытывать);

export { выпытывать };