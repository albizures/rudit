import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсмотреть: PerfectVerb = {
  name: Word('подсмотреть', 8),
  singular1stPerson: Word('подсмотрю', 8),
  singular2ndPerson: Word('подсмотришь', 5),
  singular3rdPerson: Word('подсмотрит', 5),
  plural1stPerson: Word('подсмотрим', 5),
  plural2ndPerson: Word('подсмотрите', 5),
  plural3rdPerson: Word('подсмотрят', 5),
  masculinePast: Word('подсмотрел', 8),
  femininePast: Word('подсмотрела', 8),
  neuterPast: Word('подсмотрело', 8),
  pluralPast: Word('подсмотрели', 8),
  imperativeInformal: Word('подсмотри', 8),
  imperativeFormal: Word('подсмотрите', 8),
  imperfect: ['подсматривать'],
};

perfectVerbs.set(подсмотреть.name.text, подсмотреть);

export { подсмотреть };