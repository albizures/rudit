import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присмотреть: PerfectVerb = {
  name: Word('присмотреть', 8),
  singular1stPerson: Word('присмотрю', 8),
  singular2ndPerson: Word('присмотришь', 5),
  singular3rdPerson: Word('присмотрит', 5),
  plural1stPerson: Word('присмотрим', 5),
  plural2ndPerson: Word('присмотрите', 5),
  plural3rdPerson: Word('присмотрят', 5),
  masculinePast: Word('присмотрел', 8),
  femininePast: Word('присмотрела', 8),
  neuterPast: Word('присмотрело', 8),
  pluralPast: Word('присмотрели', 8),
  imperativeInformal: Word('присмотри', 8),
  imperativeFormal: Word('присмотрите', 8),
  imperfect: ['присматривать'],
};

perfectVerbs.set(присмотреть.name.text, присмотреть);

export { присмотреть };