import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вторить: PerfectVerb = {
  name: Word('вторить', 2),
  singular1stPerson: Word('вторю', 2),
  singular2ndPerson: Word('вторишь', 2),
  singular3rdPerson: Word('вторит', 2),
  plural1stPerson: Word('вторим', 2),
  plural2ndPerson: Word('вторите', 2),
  plural3rdPerson: Word('вторят', 2),
  masculinePast: Word('вторил', 2),
  femininePast: Word('вторила', 2),
  neuterPast: Word('вторило', 2),
  pluralPast: Word('вторили', 2),
  imperativeInformal: Word('вторь', 2),
  imperativeFormal: Word('вторьте', 2),
  imperfect: [],
};

perfectVerbs.set(вторить.name.text, вторить);

export { вторить };