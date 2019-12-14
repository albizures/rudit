import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бузить: PerfectVerb = {
  name: Word('бузить', 3),
  singular1stPerson: Word('бужу', 3),
  singular2ndPerson: Word('бузишь', 3),
  singular3rdPerson: Word('бузит', 3),
  plural1stPerson: Word('бузим', 3),
  plural2ndPerson: Word('бузите', 3),
  plural3rdPerson: Word('бузят', 3),
  masculinePast: Word('бузил', 3),
  femininePast: Word('бузила', 3),
  neuterPast: Word('бузило', 3),
  pluralPast: Word('бузили', 3),
  imperativeInformal: Word('бузи', 3),
  imperativeFormal: Word('бузите', 3),
  imperfect: [],
};

perfectVerbs.set(бузить.name.text, бузить);

export { бузить };