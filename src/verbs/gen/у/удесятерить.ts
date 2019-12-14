import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удесятерить: PerfectVerb = {
  name: Word('удесятерить', 8),
  singular1stPerson: Word('удесятерю', 8),
  singular2ndPerson: Word('удесятеришь', 8),
  singular3rdPerson: Word('удесятерит', 8),
  plural1stPerson: Word('удесятерим', 8),
  plural2ndPerson: Word('удесятерите', 8),
  plural3rdPerson: Word('удесятерят', 8),
  masculinePast: Word('удесятерил', 8),
  femininePast: Word('удесятерила', 8),
  neuterPast: Word('удесятерило', 8),
  pluralPast: Word('удесятерили', 8),
  imperativeInformal: Word('удесятери', 8),
  imperativeFormal: Word('удесятерите', 8),
  imperfect: [],
};

perfectVerbs.set(удесятерить.name.text, удесятерить);

export { удесятерить };