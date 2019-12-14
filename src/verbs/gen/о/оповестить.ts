import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оповестить: PerfectVerb = {
  name: Word('оповестить', 7),
  singular1stPerson: Word('оповещу', 6),
  singular2ndPerson: Word('оповестишь', 7),
  singular3rdPerson: Word('оповестит', 7),
  plural1stPerson: Word('оповестим', 7),
  plural2ndPerson: Word('оповестите', 7),
  plural3rdPerson: Word('оповестят', 7),
  masculinePast: Word('оповестил', 7),
  femininePast: Word('оповестила', 7),
  neuterPast: Word('оповестило', 7),
  pluralPast: Word('оповестили', 7),
  imperativeInformal: Word('оповести', 7),
  imperativeFormal: Word('оповестите', 7),
  imperfect: [],
};

perfectVerbs.set(оповестить.name.text, оповестить);

export { оповестить };