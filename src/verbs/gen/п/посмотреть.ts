import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посмотреть: PerfectVerb = {
  name: Word('посмотреть', 7),
  singular1stPerson: Word('посмотрю', 7),
  singular2ndPerson: Word('посмотришь', 4),
  singular3rdPerson: Word('посмотрит', 4),
  plural1stPerson: Word('посмотрим', 4),
  plural2ndPerson: Word('посмотрите', 4),
  plural3rdPerson: Word('посмотрят', 4),
  masculinePast: Word('посмотрел', 7),
  femininePast: Word('посмотрела', 7),
  neuterPast: Word('посмотрело', 7),
  pluralPast: Word('посмотрели', 7),
  imperativeInformal: Word('посмотри', 7),
  imperativeFormal: Word('посмотрите', 7),
  imperfect: ['смотреть'],
};

perfectVerbs.set(посмотреть.name.text, посмотреть);

export { посмотреть };