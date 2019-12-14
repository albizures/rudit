import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навредить: PerfectVerb = {
  name: Word('навредить', 6),
  singular1stPerson: Word('наврежу', 6),
  singular2ndPerson: Word('навредишь', 6),
  singular3rdPerson: Word('навредит', 6),
  plural1stPerson: Word('навредим', 6),
  plural2ndPerson: Word('навредите', 6),
  plural3rdPerson: Word('навредят', 6),
  masculinePast: Word('навредил', 6),
  femininePast: Word('навредила', 6),
  neuterPast: Word('навредило', 6),
  pluralPast: Word('навредили', 6),
  imperativeInformal: Word('навреди', 6),
  imperativeFormal: Word('навредите', 6),
  imperfect: [],
};

perfectVerbs.set(навредить.name.text, навредить);

export { навредить };