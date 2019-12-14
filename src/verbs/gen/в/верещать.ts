import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const верещать: PerfectVerb = {
  name: Word('верещать', 5),
  singular1stPerson: Word('верещу', 5),
  singular2ndPerson: Word('верещишь', 5),
  singular3rdPerson: Word('верещит', 5),
  plural1stPerson: Word('верещим', 5),
  plural2ndPerson: Word('верещите', 5),
  plural3rdPerson: Word('верещат', 5),
  masculinePast: Word('верещал', 5),
  femininePast: Word('верещала', 5),
  neuterPast: Word('верещало', 5),
  pluralPast: Word('верещали', 5),
  imperativeInformal: Word('верещи', 5),
  imperativeFormal: Word('верещите', 5),
  imperfect: [],
};

perfectVerbs.set(верещать.name.text, верещать);

export { верещать };