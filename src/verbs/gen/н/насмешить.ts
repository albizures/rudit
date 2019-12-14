import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насмешить: PerfectVerb = {
  name: Word('насмешить', 6),
  singular1stPerson: Word('насмешу', 6),
  singular2ndPerson: Word('насмешишь', 6),
  singular3rdPerson: Word('насмешит', 6),
  plural1stPerson: Word('насмешим', 6),
  plural2ndPerson: Word('насмешите', 6),
  plural3rdPerson: Word('насмешат', 6),
  masculinePast: Word('насмешил', 6),
  femininePast: Word('насмешила', 6),
  neuterPast: Word('насмешило', 6),
  pluralPast: Word('насмешили', 6),
  imperativeInformal: Word('насмеши', 6),
  imperativeFormal: Word('насмешите', 6),
  imperfect: [],
};

perfectVerbs.set(насмешить.name.text, насмешить);

export { насмешить };