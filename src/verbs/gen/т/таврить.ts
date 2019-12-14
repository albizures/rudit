import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таврить: PerfectVerb = {
  name: Word('таврить', 4),
  singular1stPerson: Word('таврю', 4),
  singular2ndPerson: Word('тавришь', 4),
  singular3rdPerson: Word('таврит', 4),
  plural1stPerson: Word('таврим', 4),
  plural2ndPerson: Word('таврите', 4),
  plural3rdPerson: Word('таврят', 4),
  masculinePast: Word('таврил', 4),
  femininePast: Word('таврила', 4),
  neuterPast: Word('таврило', 4),
  pluralPast: Word('таврили', 4),
  imperativeInformal: Word('таври', 4),
  imperativeFormal: Word('таврите', 4),
  imperfect: [],
};

perfectVerbs.set(таврить.name.text, таврить);

export { таврить };