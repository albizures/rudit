import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const страшить: PerfectVerb = {
  name: Word('страшить', 5),
  singular1stPerson: Word('страшу', 5),
  singular2ndPerson: Word('страшишь', 5),
  singular3rdPerson: Word('страшит', 5),
  plural1stPerson: Word('страшим', 5),
  plural2ndPerson: Word('страшите', 5),
  plural3rdPerson: Word('страшат', 5),
  masculinePast: Word('страшил', 5),
  femininePast: Word('страшила', 5),
  neuterPast: Word('страшило', 5),
  pluralPast: Word('страшили', 5),
  imperativeInformal: Word('страши', 5),
  imperativeFormal: Word('страшите', 5),
  imperfect: [],
};

perfectVerbs.set(страшить.name.text, страшить);

export { страшить };