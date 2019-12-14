import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просчитывать: PerfectVerb = {
  name: Word('просчитывать', 5),
  singular1stPerson: Word('просчитываю', 5),
  singular2ndPerson: Word('просчитываешь', 5),
  singular3rdPerson: Word('просчитывает', 5),
  plural1stPerson: Word('просчитываем', 5),
  plural2ndPerson: Word('просчитываете', 5),
  plural3rdPerson: Word('просчитывают', 5),
  masculinePast: Word('просчитывал', 5),
  femininePast: Word('просчитывала', 5),
  neuterPast: Word('просчитывало', 5),
  pluralPast: Word('просчитывали', 5),
  imperativeInformal: Word('просчитывай', 5),
  imperativeFormal: Word('просчитывайте', 5),
  imperfect: [],
};

perfectVerbs.set(просчитывать.name.text, просчитывать);

export { просчитывать };