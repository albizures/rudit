import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылепить: PerfectVerb = {
  name: Word('вылепить', 1),
  singular1stPerson: Word('вылеплю', 1),
  singular2ndPerson: Word('вылепишь', 1),
  singular3rdPerson: Word('вылепит', 1),
  plural1stPerson: Word('вылепим', 1),
  plural2ndPerson: Word('вылепите', 1),
  plural3rdPerson: Word('вылепят', 1),
  masculinePast: Word('вылепил', 1),
  femininePast: Word('вылепила', 1),
  neuterPast: Word('вылепило', 1),
  pluralPast: Word('вылепили', 1),
  imperativeInformal: Word('вылепи', 1),
  imperativeFormal: Word('вылепите', 1),
  imperfect: [],
};

perfectVerbs.set(вылепить.name.text, вылепить);

export { вылепить };