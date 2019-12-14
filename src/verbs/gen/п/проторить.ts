import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проторить: PerfectVerb = {
  name: Word('проторить', 6),
  singular1stPerson: Word('проторю', 6),
  singular2ndPerson: Word('проторишь', 6),
  singular3rdPerson: Word('проторит', 6),
  plural1stPerson: Word('проторим', 6),
  plural2ndPerson: Word('проторите', 6),
  plural3rdPerson: Word('проторят', 6),
  masculinePast: Word('проторил', 6),
  femininePast: Word('проторила', 6),
  neuterPast: Word('проторило', 6),
  pluralPast: Word('проторили', 6),
  imperativeInformal: Word('протори', 6),
  imperativeFormal: Word('проторите', 6),
  imperfect: [],
};

perfectVerbs.set(проторить.name.text, проторить);

export { проторить };