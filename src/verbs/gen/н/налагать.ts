import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налагать: PerfectVerb = {
  name: Word('налагать', 5),
  singular1stPerson: Word('налагаю', 5),
  singular2ndPerson: Word('налагаешь', 5),
  singular3rdPerson: Word('налагает', 5),
  plural1stPerson: Word('налагаем', 5),
  plural2ndPerson: Word('налагаете', 5),
  plural3rdPerson: Word('налагают', 5),
  masculinePast: Word('налагал', 5),
  femininePast: Word('налагала', 5),
  neuterPast: Word('налагало', 5),
  pluralPast: Word('налагали', 5),
  imperativeInformal: Word('налагай', 5),
  imperativeFormal: Word('налагайте', 5),
  imperfect: [],
};

perfectVerbs.set(налагать.name.text, налагать);

export { налагать };