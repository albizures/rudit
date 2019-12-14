import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассмотреть: PerfectVerb = {
  name: Word('рассмотреть', 8),
  singular1stPerson: Word('рассмотрю', 8),
  singular2ndPerson: Word('рассмотришь', 5),
  singular3rdPerson: Word('рассмотрит', 5),
  plural1stPerson: Word('рассмотрим', 5),
  plural2ndPerson: Word('рассмотрите', 5),
  plural3rdPerson: Word('рассмотрят', 5),
  masculinePast: Word('рассмотрел', 8),
  femininePast: Word('рассмотрела', 8),
  neuterPast: Word('рассмотрело', 8),
  pluralPast: Word('рассмотрели', 8),
  imperativeInformal: Word('рассмотри', 8),
  imperativeFormal: Word('рассмотрите', 8),
  imperfect: ['рассматривать'],
};

perfectVerbs.set(рассмотреть.name.text, рассмотреть);

export { рассмотреть };