import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдворить: PerfectVerb = {
  name: Word('выдворить', 1),
  singular1stPerson: Word('выдворю', 1),
  singular2ndPerson: Word('выдворишь', 1),
  singular3rdPerson: Word('выдворит', 1),
  plural1stPerson: Word('выдворим', 1),
  plural2ndPerson: Word('выдворите', 1),
  plural3rdPerson: Word('выдворят', 1),
  masculinePast: Word('выдворил', 1),
  femininePast: Word('выдворила', 1),
  neuterPast: Word('выдворило', 1),
  pluralPast: Word('выдворили', 1),
  imperativeInformal: Word('выдвори', 1),
  imperativeFormal: Word('выдворите', 1),
  imperfect: [],
};

perfectVerbs.set(выдворить.name.text, выдворить);

export { выдворить };