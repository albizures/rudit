import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const золить: PerfectVerb = {
  name: Word('золить', 3),
  singular1stPerson: Word('золю', 3),
  singular2ndPerson: Word('золишь', 3),
  singular3rdPerson: Word('золит', 3),
  plural1stPerson: Word('золим', 3),
  plural2ndPerson: Word('золите', 3),
  plural3rdPerson: Word('золят', 3),
  masculinePast: Word('золил', 3),
  femininePast: Word('золила', 3),
  neuterPast: Word('золило', 3),
  pluralPast: Word('золили', 3),
  imperativeInformal: Word('золи', 3),
  imperativeFormal: Word('золите', 3),
  imperfect: [],
};

perfectVerbs.set(золить.name.text, золить);

export { золить };