import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повредить: PerfectVerb = {
  name: Word('повредить', 6),
  singular1stPerson: Word('поврежу', 6),
  singular2ndPerson: Word('повредишь', 6),
  singular3rdPerson: Word('повредит', 6),
  plural1stPerson: Word('повредим', 6),
  plural2ndPerson: Word('повредите', 6),
  plural3rdPerson: Word('повредят', 6),
  masculinePast: Word('повредил', 6),
  femininePast: Word('повредила', 6),
  neuterPast: Word('повредило', 6),
  pluralPast: Word('повредили', 6),
  imperativeInformal: Word('повреди', 6),
  imperativeFormal: Word('повредите', 6),
  imperfect: [],
};

perfectVerbs.set(повредить.name.text, повредить);

export { повредить };