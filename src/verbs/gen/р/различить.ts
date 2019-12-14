import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const различить: PerfectVerb = {
  name: Word('различить', 6),
  singular1stPerson: Word('различу', 6),
  singular2ndPerson: Word('различишь', 6),
  singular3rdPerson: Word('различит', 6),
  plural1stPerson: Word('различим', 6),
  plural2ndPerson: Word('различите', 6),
  plural3rdPerson: Word('различат', 6),
  masculinePast: Word('различил', 6),
  femininePast: Word('различила', 6),
  neuterPast: Word('различило', 6),
  pluralPast: Word('различили', 6),
  imperativeInformal: Word('различи', 6),
  imperativeFormal: Word('различите', 6),
  imperfect: [],
};

perfectVerbs.set(различить.name.text, различить);

export { различить };