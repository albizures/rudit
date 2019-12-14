import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тащить: PerfectVerb = {
  name: Word('тащить', 3),
  singular1stPerson: Word('тащу', 3),
  singular2ndPerson: Word('тащишь', 1),
  singular3rdPerson: Word('тащит', 1),
  plural1stPerson: Word('тащим', 1),
  plural2ndPerson: Word('тащите', 1),
  plural3rdPerson: Word('тащат', 1),
  masculinePast: Word('тащил', 3),
  femininePast: Word('тащила', 3),
  neuterPast: Word('тащило', 3),
  pluralPast: Word('тащили', 3),
  imperativeInformal: Word('тащи', 3),
  imperativeFormal: Word('тащите', 3),
  imperfect: ['вытащить'],
};

perfectVerbs.set(тащить.name.text, тащить);

export { тащить };