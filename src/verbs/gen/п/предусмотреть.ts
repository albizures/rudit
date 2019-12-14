import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предусмотреть: PerfectVerb = {
  name: Word('предусмотреть', 10),
  singular1stPerson: Word('предусмотрю', 10),
  singular2ndPerson: Word('предусмотришь', 7),
  singular3rdPerson: Word('предусмотрит', 7),
  plural1stPerson: Word('предусмотрим', 7),
  plural2ndPerson: Word('предусмотрите', 7),
  plural3rdPerson: Word('предусмотрят', 7),
  masculinePast: Word('предусмотрел', 10),
  femininePast: Word('предусмотрела', 10),
  neuterPast: Word('предусмотрело', 10),
  pluralPast: Word('предусмотрели', 10),
  imperativeInformal: Word('предусмотри', 10),
  imperativeFormal: Word('предусмотрите', 10),
  imperfect: ['предусматривать'],
};

perfectVerbs.set(предусмотреть.name.text, предусмотреть);

export { предусмотреть };