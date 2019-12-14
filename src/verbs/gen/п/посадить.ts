import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посадить: PerfectVerb = {
  name: Word('посадить', 5),
  singular1stPerson: Word('посажу', 5),
  singular2ndPerson: Word('посадишь', 3),
  singular3rdPerson: Word('посадит', 3),
  plural1stPerson: Word('посадим', 3),
  plural2ndPerson: Word('посадите', 3),
  plural3rdPerson: Word('посадят', 3),
  masculinePast: Word('посадил', 5),
  femininePast: Word('посадила', 5),
  neuterPast: Word('посадило', 5),
  pluralPast: Word('посадили', 5),
  imperativeInformal: Word('посади', 5),
  imperativeFormal: Word('посадите', 5),
  imperfect: ['сажать','садить'],
};

perfectVerbs.set(посадить.name.text, посадить);

export { посадить };