import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насидеть: PerfectVerb = {
  name: Word('насидеть', 5),
  singular1stPerson: Word('насижу', 5),
  singular2ndPerson: Word('насидишь', 5),
  singular3rdPerson: Word('насидит', 5),
  plural1stPerson: Word('насидим', 5),
  plural2ndPerson: Word('насидите', 5),
  plural3rdPerson: Word('насидят', 5),
  masculinePast: Word('насидел', 5),
  femininePast: Word('насидела', 5),
  neuterPast: Word('насидело', 5),
  pluralPast: Word('насидели', 5),
  imperativeInformal: Word('насиди', 5),
  imperativeFormal: Word('насидите', 5),
  imperfect: [],
};

perfectVerbs.set(насидеть.name.text, насидеть);

export { насидеть };