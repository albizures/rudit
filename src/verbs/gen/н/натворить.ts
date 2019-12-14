import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натворить: PerfectVerb = {
  name: Word('натворить', 6),
  singular1stPerson: Word('натворю', 6),
  singular2ndPerson: Word('натворишь', 6),
  singular3rdPerson: Word('натворит', 6),
  plural1stPerson: Word('натворим', 6),
  plural2ndPerson: Word('натворите', 6),
  plural3rdPerson: Word('натворят', 6),
  masculinePast: Word('натворил', 6),
  femininePast: Word('натворила', 6),
  neuterPast: Word('натворило', 6),
  pluralPast: Word('натворили', 6),
  imperativeInformal: Word('натвори', 6),
  imperativeFormal: Word('натворите', 6),
  imperfect: [],
};

perfectVerbs.set(натворить.name.text, натворить);

export { натворить };