import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отморозить: PerfectVerb = {
  name: Word('отморозить', 5),
  singular1stPerson: Word('отморожу', 5),
  singular2ndPerson: Word('отморозишь', 5),
  singular3rdPerson: Word('отморозит', 5),
  plural1stPerson: Word('отморозим', 5),
  plural2ndPerson: Word('отморозите', 5),
  plural3rdPerson: Word('отморозят', 5),
  masculinePast: Word('отморозил', 5),
  femininePast: Word('отморозила', 5),
  neuterPast: Word('отморозило', 5),
  pluralPast: Word('отморозили', 5),
  imperativeInformal: Word('отморозь', 5),
  imperativeFormal: Word('отморозьте', 5),
  imperfect: [],
};

perfectVerbs.set(отморозить.name.text, отморозить);

export { отморозить };