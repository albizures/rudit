import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привозить: PerfectVerb = {
  name: Word('привозить', 6),
  singular1stPerson: Word('привожу', 6),
  singular2ndPerson: Word('привозишь', 4),
  singular3rdPerson: Word('привозит', 4),
  plural1stPerson: Word('привозим', 4),
  plural2ndPerson: Word('привозите', 4),
  plural3rdPerson: Word('привозят', 4),
  masculinePast: Word('привозил', 6),
  femininePast: Word('привозила', 6),
  neuterPast: Word('привозило', 6),
  pluralPast: Word('привозили', 6),
  imperativeInformal: Word('привози', 6),
  imperativeFormal: Word('привозите', 6),
  imperfect: ['привезти'],
};

perfectVerbs.set(привозить.name.text, привозить);

export { привозить };