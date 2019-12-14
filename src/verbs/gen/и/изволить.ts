import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изволить: PerfectVerb = {
  name: Word('изволить', 3),
  singular1stPerson: Word('изволю', 3),
  singular2ndPerson: Word('изволишь', 3),
  singular3rdPerson: Word('изволит', 3),
  plural1stPerson: Word('изволим', 3),
  plural2ndPerson: Word('изволите', 3),
  plural3rdPerson: Word('изволят', 3),
  masculinePast: Word('изволил', 3),
  femininePast: Word('изволила', 3),
  neuterPast: Word('изволило', 3),
  pluralPast: Word('изволили', 3),
  imperativeInformal: Word('изволь', 3),
  imperativeFormal: Word('извольте', 3),
  imperfect: [],
};

perfectVerbs.set(изволить.name.text, изволить);

export { изволить };