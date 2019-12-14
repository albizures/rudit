import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облепить: PerfectVerb = {
  name: Word('облепить', 5),
  singular1stPerson: Word('облеплю', 6),
  singular2ndPerson: Word('облепишь', 3),
  singular3rdPerson: Word('облепит', 3),
  plural1stPerson: Word('облепим', 3),
  plural2ndPerson: Word('облепите', 3),
  plural3rdPerson: Word('облепят', 3),
  masculinePast: Word('облепил', 5),
  femininePast: Word('облепила', 5),
  neuterPast: Word('облепило', 5),
  pluralPast: Word('облепили', 5),
  imperativeInformal: Word('облепи', 5),
  imperativeFormal: Word('облепите', 5),
  imperfect: [],
};

perfectVerbs.set(облепить.name.text, облепить);

export { облепить };