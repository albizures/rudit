import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подивить: PerfectVerb = {
  name: Word('подивить', 5),
  singular1stPerson: Word('подивлю', 6),
  singular2ndPerson: Word('подивишь', 5),
  singular3rdPerson: Word('подивит', 5),
  plural1stPerson: Word('подивим', 5),
  plural2ndPerson: Word('подивите', 5),
  plural3rdPerson: Word('подивят', 5),
  masculinePast: Word('подивил', 5),
  femininePast: Word('подивила', 5),
  neuterPast: Word('подивило', 5),
  pluralPast: Word('подивили', 5),
  imperativeInformal: Word('подиви', 5),
  imperativeFormal: Word('подивите', 5),
  imperfect: [],
};

perfectVerbs.set(подивить.name.text, подивить);

export { подивить };