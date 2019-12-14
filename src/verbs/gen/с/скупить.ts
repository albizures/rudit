import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скупить: PerfectVerb = {
  name: Word('скупить', 4),
  singular1stPerson: Word('скуплю', 5),
  singular2ndPerson: Word('скупишь', 2),
  singular3rdPerson: Word('скупит', 2),
  plural1stPerson: Word('скупим', 2),
  plural2ndPerson: Word('скупите', 2),
  plural3rdPerson: Word('скупят', 2),
  masculinePast: Word('скупил', 4),
  femininePast: Word('скупила', 4),
  neuterPast: Word('скупило', 4),
  pluralPast: Word('скупили', 4),
  imperativeInformal: Word('скупи', 4),
  imperativeFormal: Word('скупите', 4),
  imperfect: [],
};

perfectVerbs.set(скупить.name.text, скупить);

export { скупить };