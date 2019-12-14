import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмотреть: PerfectVerb = {
  name: Word('осмотреть', 6),
  singular1stPerson: Word('осмотрю', 6),
  singular2ndPerson: Word('осмотришь', 3),
  singular3rdPerson: Word('осмотрит', 3),
  plural1stPerson: Word('осмотрим', 3),
  plural2ndPerson: Word('осмотрите', 3),
  plural3rdPerson: Word('осмотрят', 3),
  masculinePast: Word('осмотрел', 6),
  femininePast: Word('осмотрела', 6),
  neuterPast: Word('осмотрело', 6),
  pluralPast: Word('осмотрели', 6),
  imperativeInformal: Word('осмотри', 6),
  imperativeFormal: Word('осмотрите', 6),
  imperfect: ['осматривать'],
};

perfectVerbs.set(осмотреть.name.text, осмотреть);

export { осмотреть };