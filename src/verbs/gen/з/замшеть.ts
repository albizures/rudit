import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замшеть: PerfectVerb = {
  name: Word('замшеть', 4),
  singular1stPerson: Word('замшею', 4),
  singular2ndPerson: Word('замшеешь', 4),
  singular3rdPerson: Word('замшеет', 4),
  plural1stPerson: Word('замшеем', 4),
  plural2ndPerson: Word('замшеете', 4),
  plural3rdPerson: Word('замшеют', 4),
  masculinePast: Word('замшел', 4),
  femininePast: Word('замшела', 4),
  neuterPast: Word('замшело', 4),
  pluralPast: Word('замшели', 4),
  imperativeInformal: Word('замшей', 4),
  imperativeFormal: Word('замшейте', 4),
  imperfect: [],
};

perfectVerbs.set(замшеть.name.text, замшеть);

export { замшеть };