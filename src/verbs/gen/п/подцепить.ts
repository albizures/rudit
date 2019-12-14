import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подцепить: PerfectVerb = {
  name: Word('подцепить', 6),
  singular1stPerson: Word('подцеплю', 7),
  singular2ndPerson: Word('подцепишь', 4),
  singular3rdPerson: Word('подцепит', 4),
  plural1stPerson: Word('подцепим', 4),
  plural2ndPerson: Word('подцепите', 4),
  plural3rdPerson: Word('подцепят', 4),
  masculinePast: Word('подцепил', 6),
  femininePast: Word('подцепила', 6),
  neuterPast: Word('подцепило', 6),
  pluralPast: Word('подцепили', 6),
  imperativeInformal: Word('подцепи', 6),
  imperativeFormal: Word('подцепите', 6),
  imperfect: [],
};

perfectVerbs.set(подцепить.name.text, подцепить);

export { подцепить };