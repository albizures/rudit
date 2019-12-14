import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const журить: PerfectVerb = {
  name: Word('журить', 3),
  singular1stPerson: Word('журю', 3),
  singular2ndPerson: Word('журишь', 3),
  singular3rdPerson: Word('журит', 3),
  plural1stPerson: Word('журим', 3),
  plural2ndPerson: Word('журите', 3),
  plural3rdPerson: Word('журят', 3),
  masculinePast: Word('журил', 3),
  femininePast: Word('журила', 3),
  neuterPast: Word('журило', 3),
  pluralPast: Word('журили', 3),
  imperativeInformal: Word('жури', 3),
  imperativeFormal: Word('журите', 3),
  imperfect: [],
};

perfectVerbs.set(журить.name.text, журить);

export { журить };