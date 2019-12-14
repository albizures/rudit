import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довозить: PerfectVerb = {
  name: Word('довозить', 5),
  singular1stPerson: Word('довожу', 5),
  singular2ndPerson: Word('довозишь', 3),
  singular3rdPerson: Word('довозит', 3),
  plural1stPerson: Word('довозим', 3),
  plural2ndPerson: Word('довозите', 3),
  plural3rdPerson: Word('довозят', 3),
  masculinePast: Word('довозил', 5),
  femininePast: Word('довозила', 5),
  neuterPast: Word('довозило', 5),
  pluralPast: Word('довозили', 5),
  imperativeInformal: Word('довози', 5),
  imperativeFormal: Word('довозите', 5),
  imperfect: [],
};

perfectVerbs.set(довозить.name.text, довозить);

export { довозить };