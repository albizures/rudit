import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просмотреть: PerfectVerb = {
  name: Word('просмотреть', 8),
  singular1stPerson: Word('просмотрю', 8),
  singular2ndPerson: Word('просмотришь', 5),
  singular3rdPerson: Word('просмотрит', 5),
  plural1stPerson: Word('просмотрим', 5),
  plural2ndPerson: Word('просмотрите', 5),
  plural3rdPerson: Word('просмотрят', 5),
  masculinePast: Word('просмотрел', 8),
  femininePast: Word('просмотрела', 8),
  neuterPast: Word('просмотрело', 8),
  pluralPast: Word('просмотрели', 8),
  imperativeInformal: Word('просмотри', 8),
  imperativeFormal: Word('просмотрите', 8),
  imperfect: [],
};

perfectVerbs.set(просмотреть.name.text, просмотреть);

export { просмотреть };