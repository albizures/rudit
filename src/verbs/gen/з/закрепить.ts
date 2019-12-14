import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрепить: PerfectVerb = {
  name: Word('закрепить', 6),
  singular1stPerson: Word('закреплю', 7),
  singular2ndPerson: Word('закрепишь', 6),
  singular3rdPerson: Word('закрепит', 6),
  plural1stPerson: Word('закрепим', 6),
  plural2ndPerson: Word('закрепите', 6),
  plural3rdPerson: Word('закрепят', 6),
  masculinePast: Word('закрепил', 6),
  femininePast: Word('закрепила', 6),
  neuterPast: Word('закрепило', 6),
  pluralPast: Word('закрепили', 6),
  imperativeInformal: Word('закрепи', 6),
  imperativeFormal: Word('закрепите', 6),
  imperfect: [],
};

perfectVerbs.set(закрепить.name.text, закрепить);

export { закрепить };