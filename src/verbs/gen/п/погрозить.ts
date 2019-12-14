import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрозить: PerfectVerb = {
  name: Word('погрозить', 6),
  singular1stPerson: Word('погрожу', 6),
  singular2ndPerson: Word('погрозишь', 6),
  singular3rdPerson: Word('погрозит', 6),
  plural1stPerson: Word('погрозим', 6),
  plural2ndPerson: Word('погрозите', 6),
  plural3rdPerson: Word('погрозят', 6),
  masculinePast: Word('погрозил', 6),
  femininePast: Word('погрозила', 6),
  neuterPast: Word('погрозило', 6),
  pluralPast: Word('погрозили', 6),
  imperativeInformal: Word('погрози', 6),
  imperativeFormal: Word('погрозите', 6),
  imperfect: [],
};

perfectVerbs.set(погрозить.name.text, погрозить);

export { погрозить };