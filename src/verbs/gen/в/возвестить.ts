import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвестить: PerfectVerb = {
  name: Word('возвестить', 7),
  singular1stPerson: Word('возвещу', 6),
  singular2ndPerson: Word('возвестишь', 7),
  singular3rdPerson: Word('возвестит', 7),
  plural1stPerson: Word('возвестим', 7),
  plural2ndPerson: Word('возвестите', 7),
  plural3rdPerson: Word('возвестят', 7),
  masculinePast: Word('возвестил', 7),
  femininePast: Word('возвестила', 7),
  neuterPast: Word('возвестило', 7),
  pluralPast: Word('возвестили', 7),
  imperativeInformal: Word('возвести', 7),
  imperativeFormal: Word('возвестите', 7),
  imperfect: [],
};

perfectVerbs.set(возвестить.name.text, возвестить);

export { возвестить };