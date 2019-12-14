import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрючить: PerfectVerb = {
  name: Word('скрючить', 3),
  singular1stPerson: Word('скрючу', 3),
  singular2ndPerson: Word('скрючишь', 3),
  singular3rdPerson: Word('скрючит', 3),
  plural1stPerson: Word('скрючим', 3),
  plural2ndPerson: Word('скрючите', 3),
  plural3rdPerson: Word('скрючат', 3),
  masculinePast: Word('скрючил', 3),
  femininePast: Word('скрючила', 3),
  neuterPast: Word('скрючило', 3),
  pluralPast: Word('скрючили', 3),
  imperativeInformal: Word('скрючь', 3),
  imperativeFormal: Word('скрючьте', 3),
  imperfect: [],
};

perfectVerbs.set(скрючить.name.text, скрючить);

export { скрючить };