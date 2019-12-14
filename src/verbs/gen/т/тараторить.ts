import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тараторить: PerfectVerb = {
  name: Word('тараторить', 7),
  singular1stPerson: Word('тараторю', 5),
  singular2ndPerson: Word('тараторишь', 5),
  singular3rdPerson: Word('тараторит', 5),
  plural1stPerson: Word('тараторим', 5),
  plural2ndPerson: Word('тараторите', 5),
  plural3rdPerson: Word('тараторят', 5),
  masculinePast: Word('тараторил', 7),
  femininePast: Word('тараторила', 7),
  neuterPast: Word('тараторило', 7),
  pluralPast: Word('тараторили', 7),
  imperativeInformal: Word('тараторь', 5),
  imperativeFormal: Word('тараторьте', 5),
  imperfect: [],
};

perfectVerbs.set(тараторить.name.text, тараторить);

export { тараторить };