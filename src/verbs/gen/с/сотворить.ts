import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сотворить: PerfectVerb = {
  name: Word('сотворить', 6),
  singular1stPerson: Word('сотворю', 6),
  singular2ndPerson: Word('сотворишь', 6),
  singular3rdPerson: Word('сотворит', 6),
  plural1stPerson: Word('сотворим', 6),
  plural2ndPerson: Word('сотворите', 6),
  plural3rdPerson: Word('сотворят', 6),
  masculinePast: Word('сотворил', 6),
  femininePast: Word('сотворила', 6),
  neuterPast: Word('сотворило', 6),
  pluralPast: Word('сотворили', 6),
  imperativeInformal: Word('сотвори', 6),
  imperativeFormal: Word('сотворите', 6),
  imperfect: [],
};

perfectVerbs.set(сотворить.name.text, сотворить);

export { сотворить };