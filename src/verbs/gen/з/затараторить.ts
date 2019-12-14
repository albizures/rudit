import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затараторить: PerfectVerb = {
  name: Word('затараторить', 7),
  singular1stPerson: Word('затараторю', 7),
  singular2ndPerson: Word('затараторишь', 7),
  singular3rdPerson: Word('затараторит', 7),
  plural1stPerson: Word('затараторим', 7),
  plural2ndPerson: Word('затараторите', 7),
  plural3rdPerson: Word('затараторят', 7),
  masculinePast: Word('затараторил', 7),
  femininePast: Word('затараторила', 7),
  neuterPast: Word('затараторило', 7),
  pluralPast: Word('затараторили', 7),
  imperativeInformal: Word('затараторь', 7),
  imperativeFormal: Word('затараторьте', 7),
  imperfect: [],
};

perfectVerbs.set(затараторить.name.text, затараторить);

export { затараторить };