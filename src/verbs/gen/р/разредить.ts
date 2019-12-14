import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разредить: PerfectVerb = {
  name: Word('разредить', 6),
  singular1stPerson: Word('разрежу', 6),
  singular2ndPerson: Word('разредишь', 6),
  singular3rdPerson: Word('разредит', 6),
  plural1stPerson: Word('разредим', 6),
  plural2ndPerson: Word('разредите', 6),
  plural3rdPerson: Word('разредят', 6),
  masculinePast: Word('разредил', 6),
  femininePast: Word('разредила', 6),
  neuterPast: Word('разредило', 6),
  pluralPast: Word('разредили', 6),
  imperativeInformal: Word('разреди', 6),
  imperativeFormal: Word('разредите', 6),
  imperfect: [],
};

perfectVerbs.set(разредить.name.text, разредить);

export { разредить };