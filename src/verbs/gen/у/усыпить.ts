import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усыпить: PerfectVerb = {
  name: Word('усыпить', 4),
  singular1stPerson: Word('усыплю', 5),
  singular2ndPerson: Word('усыпишь', 4),
  singular3rdPerson: Word('усыпит', 4),
  plural1stPerson: Word('усыпим', 4),
  plural2ndPerson: Word('усыпите', 4),
  plural3rdPerson: Word('усыпят', 4),
  masculinePast: Word('усыпил', 4),
  femininePast: Word('усыпила', 4),
  neuterPast: Word('усыпило', 4),
  pluralPast: Word('усыпили', 4),
  imperativeInformal: Word('усыпи', 4),
  imperativeFormal: Word('усыпите', 4),
  imperfect: [],
};

perfectVerbs.set(усыпить.name.text, усыпить);

export { усыпить };