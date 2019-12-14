import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увозить: PerfectVerb = {
  name: Word('увозить', 4),
  singular1stPerson: Word('увожу', 4),
  singular2ndPerson: Word('увозишь', 2),
  singular3rdPerson: Word('увозит', 2),
  plural1stPerson: Word('увозим', 2),
  plural2ndPerson: Word('увозите', 2),
  plural3rdPerson: Word('увозят', 2),
  masculinePast: Word('увозил', 4),
  femininePast: Word('увозила', 4),
  neuterPast: Word('увозило', 4),
  pluralPast: Word('увозили', 4),
  imperativeInformal: Word('увози', 4),
  imperativeFormal: Word('увозите', 4),
  imperfect: [],
};

perfectVerbs.set(увозить.name.text, увозить);

export { увозить };