import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оградить: PerfectVerb = {
  name: Word('оградить', 5),
  singular1stPerson: Word('огражу', 5),
  singular2ndPerson: Word('оградишь', 5),
  singular3rdPerson: Word('оградит', 5),
  plural1stPerson: Word('оградим', 5),
  plural2ndPerson: Word('оградите', 5),
  plural3rdPerson: Word('оградят', 5),
  masculinePast: Word('оградил', 5),
  femininePast: Word('оградила', 5),
  neuterPast: Word('оградило', 5),
  pluralPast: Word('оградили', 5),
  imperativeInformal: Word('огради', 5),
  imperativeFormal: Word('оградите', 5),
  imperfect: [],
};

perfectVerbs.set(оградить.name.text, оградить);

export { оградить };