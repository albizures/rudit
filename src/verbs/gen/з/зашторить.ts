import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашторить: PerfectVerb = {
  name: Word('зашторить', 4),
  singular1stPerson: Word('зашторю', 4),
  singular2ndPerson: Word('зашторишь', 4),
  singular3rdPerson: Word('зашторит', 4),
  plural1stPerson: Word('зашторим', 4),
  plural2ndPerson: Word('зашторите', 4),
  plural3rdPerson: Word('зашторят', 4),
  masculinePast: Word('зашторил', 4),
  femininePast: Word('зашторила', 4),
  neuterPast: Word('зашторило', 4),
  pluralPast: Word('зашторили', 4),
  imperativeInformal: Word('зашторь', 4),
  imperativeFormal: Word('зашторьте', 4),
  imperfect: [],
};

perfectVerbs.set(зашторить.name.text, зашторить);

export { зашторить };