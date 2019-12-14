import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослепить: PerfectVerb = {
  name: Word('ослепить', 5),
  singular1stPerson: Word('ослеплю', 6),
  singular2ndPerson: Word('ослепишь', 5),
  singular3rdPerson: Word('ослепит', 5),
  plural1stPerson: Word('ослепим', 5),
  plural2ndPerson: Word('ослепите', 5),
  plural3rdPerson: Word('ослепят', 5),
  masculinePast: Word('ослепил', 5),
  femininePast: Word('ослепила', 5),
  neuterPast: Word('ослепило', 5),
  pluralPast: Word('ослепили', 5),
  imperativeInformal: Word('ослепи', 5),
  imperativeFormal: Word('ослепите', 5),
  imperfect: [],
};

perfectVerbs.set(ослепить.name.text, ослепить);

export { ослепить };