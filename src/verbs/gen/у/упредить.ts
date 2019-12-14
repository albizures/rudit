import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упредить: PerfectVerb = {
  name: Word('упредить', 5),
  singular1stPerson: Word('упрежу', 5),
  singular2ndPerson: Word('упредишь', 5),
  singular3rdPerson: Word('упредит', 5),
  plural1stPerson: Word('упредим', 5),
  plural2ndPerson: Word('упредите', 5),
  plural3rdPerson: Word('упредят', 5),
  masculinePast: Word('упредил', 5),
  femininePast: Word('упредила', 5),
  neuterPast: Word('упредило', 5),
  pluralPast: Word('упредили', 5),
  imperativeInformal: Word('упреди', 5),
  imperativeFormal: Word('упредите', 5),
  imperfect: [],
};

perfectVerbs.set(упредить.name.text, упредить);

export { упредить };