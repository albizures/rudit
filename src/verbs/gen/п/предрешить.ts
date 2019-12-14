import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предрешить: PerfectVerb = {
  name: Word('предрешить', 7),
  singular1stPerson: Word('предрешу', 7),
  singular2ndPerson: Word('предрешишь', 7),
  singular3rdPerson: Word('предрешит', 7),
  plural1stPerson: Word('предрешим', 7),
  plural2ndPerson: Word('предрешите', 7),
  plural3rdPerson: Word('предрешат', 7),
  masculinePast: Word('предрешил', 7),
  femininePast: Word('предрешила', 7),
  neuterPast: Word('предрешило', 7),
  pluralPast: Word('предрешили', 7),
  imperativeInformal: Word('предреши', 7),
  imperativeFormal: Word('предрешите', 7),
  imperfect: [],
};

perfectVerbs.set(предрешить.name.text, предрешить);

export { предрешить };