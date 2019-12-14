import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погасить: PerfectVerb = {
  name: Word('погасить', 5),
  singular1stPerson: Word('погашу', 5),
  singular2ndPerson: Word('погасишь', 3),
  singular3rdPerson: Word('погасит', 3),
  plural1stPerson: Word('погасим', 3),
  plural2ndPerson: Word('погасите', 3),
  plural3rdPerson: Word('погасят', 3),
  masculinePast: Word('погасил', 5),
  femininePast: Word('погасила', 5),
  neuterPast: Word('погасило', 5),
  pluralPast: Word('погасили', 5),
  imperativeInformal: Word('погаси', 5),
  imperativeFormal: Word('погасите', 5),
  imperfect: [],
};

perfectVerbs.set(погасить.name.text, погасить);

export { погасить };