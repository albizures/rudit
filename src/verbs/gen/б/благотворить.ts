import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благотворить: PerfectVerb = {
  name: Word('благотворить', 9),
  singular1stPerson: Word('благотворю', 9),
  singular2ndPerson: Word('благотворишь', 9),
  singular3rdPerson: Word('благотворит', 9),
  plural1stPerson: Word('благотворим', 9),
  plural2ndPerson: Word('благотворите', 9),
  plural3rdPerson: Word('благотворят', 9),
  masculinePast: Word('благотворил', 9),
  femininePast: Word('благотворила', 9),
  neuterPast: Word('благотворило', 9),
  pluralPast: Word('благотворили', 9),
  imperativeInformal: Word('благотвори', 9),
  imperativeFormal: Word('благотворите', 9),
  imperfect: [],
};

perfectVerbs.set(благотворить.name.text, благотворить);

export { благотворить };