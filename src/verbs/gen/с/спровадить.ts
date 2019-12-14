import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спровадить: PerfectVerb = {
  name: Word('спровадить', 5),
  singular1stPerson: Word('спроважу', 5),
  singular2ndPerson: Word('спровадишь', 5),
  singular3rdPerson: Word('спровадит', 5),
  plural1stPerson: Word('спровадим', 5),
  plural2ndPerson: Word('спровадите', 5),
  plural3rdPerson: Word('спровадят', 5),
  masculinePast: Word('спровадил', 5),
  femininePast: Word('спровадила', 5),
  neuterPast: Word('спровадило', 5),
  pluralPast: Word('спровадили', 5),
  imperativeInformal: Word('спровадь', 5),
  imperativeFormal: Word('спровадьте', 5),
  imperfect: [],
};

perfectVerbs.set(спровадить.name.text, спровадить);

export { спровадить };