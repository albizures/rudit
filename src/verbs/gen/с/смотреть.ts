import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смотреть: PerfectVerb = {
  name: Word('смотреть', 5),
  singular1stPerson: Word('смотрю', 5),
  singular2ndPerson: Word('смотришь', 2),
  singular3rdPerson: Word('смотрит', 2),
  plural1stPerson: Word('смотрим', 2),
  plural2ndPerson: Word('смотрите', 2),
  plural3rdPerson: Word('смотрят', 2),
  masculinePast: Word('смотрел', 5),
  femininePast: Word('смотрела', 5),
  neuterPast: Word('смотрело', 5),
  pluralPast: Word('смотрели', 5),
  imperativeInformal: Word('смотри', 5),
  imperativeFormal: Word('смотрите', 5),
  imperfect: ['посмотреть'],
};

perfectVerbs.set(смотреть.name.text, смотреть);

export { смотреть };