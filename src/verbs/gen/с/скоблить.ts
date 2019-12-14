import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скоблить: PerfectVerb = {
  name: Word('скоблить', 5),
  singular1stPerson: Word('скоблю', 5),
  singular2ndPerson: Word('скоблишь', 5),
  singular3rdPerson: Word('скоблит', 5),
  plural1stPerson: Word('скоблим', 5),
  plural2ndPerson: Word('скоблите', 5),
  plural3rdPerson: Word('скоблят', 5),
  masculinePast: Word('скоблил', 5),
  femininePast: Word('скоблила', 5),
  neuterPast: Word('скоблило', 5),
  pluralPast: Word('скоблили', 5),
  imperativeInformal: Word('скобли', 5),
  imperativeFormal: Word('скоблите', 5),
  imperfect: [],
};

perfectVerbs.set(скоблить.name.text, скоблить);

export { скоблить };