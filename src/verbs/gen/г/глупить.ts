import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глупить: PerfectVerb = {
  name: Word('глупить', 4),
  singular1stPerson: Word('глуплю', 5),
  singular2ndPerson: Word('глупишь', 4),
  singular3rdPerson: Word('глупит', 4),
  plural1stPerson: Word('глупим', 4),
  plural2ndPerson: Word('глупите', 4),
  plural3rdPerson: Word('глупят', 4),
  masculinePast: Word('глупил', 4),
  femininePast: Word('глупила', 4),
  neuterPast: Word('глупило', 4),
  pluralPast: Word('глупили', 4),
  imperativeInformal: Word('глупи', 4),
  imperativeFormal: Word('глупите', 4),
  imperfect: [],
};

perfectVerbs.set(глупить.name.text, глупить);

export { глупить };