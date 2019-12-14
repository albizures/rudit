import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учредить: PerfectVerb = {
  name: Word('учредить', 5),
  singular1stPerson: Word('учрежу', 5),
  singular2ndPerson: Word('учредишь', 5),
  singular3rdPerson: Word('учредит', 5),
  plural1stPerson: Word('учредим', 5),
  plural2ndPerson: Word('учредите', 5),
  plural3rdPerson: Word('учредят', 5),
  masculinePast: Word('учредил', 5),
  femininePast: Word('учредила', 5),
  neuterPast: Word('учредило', 5),
  pluralPast: Word('учредили', 5),
  imperativeInformal: Word('учреди', 5),
  imperativeFormal: Word('учредите', 5),
  imperfect: [],
};

perfectVerbs.set(учредить.name.text, учредить);

export { учредить };