import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацедить: PerfectVerb = {
  name: Word('нацедить', 5),
  singular1stPerson: Word('нацежу', 5),
  singular2ndPerson: Word('нацедишь', 3),
  singular3rdPerson: Word('нацедит', 3),
  plural1stPerson: Word('нацедим', 3),
  plural2ndPerson: Word('нацедите', 3),
  plural3rdPerson: Word('нацедят', 3),
  masculinePast: Word('нацедил', 5),
  femininePast: Word('нацедила', 5),
  neuterPast: Word('нацедило', 5),
  pluralPast: Word('нацедили', 5),
  imperativeInformal: Word('нацеди', 5),
  imperativeFormal: Word('нацедите', 5),
  imperfect: [],
};

perfectVerbs.set(нацедить.name.text, нацедить);

export { нацедить };