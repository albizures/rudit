import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахлобучить: PerfectVerb = {
  name: Word('нахлобучить', 6),
  singular1stPerson: Word('нахлобучу', 6),
  singular2ndPerson: Word('нахлобучишь', 6),
  singular3rdPerson: Word('нахлобучит', 6),
  plural1stPerson: Word('нахлобучим', 6),
  plural2ndPerson: Word('нахлобучите', 6),
  plural3rdPerson: Word('нахлобучат', 6),
  masculinePast: Word('нахлобучил', 6),
  femininePast: Word('нахлобучила', 6),
  neuterPast: Word('нахлобучило', 6),
  pluralPast: Word('нахлобучили', 6),
  imperativeInformal: Word('нахлобучь', 6),
  imperativeFormal: Word('нахлобучьте', 6),
  imperfect: [],
};

perfectVerbs.set(нахлобучить.name.text, нахлобучить);

export { нахлобучить };