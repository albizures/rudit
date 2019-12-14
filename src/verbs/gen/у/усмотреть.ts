import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усмотреть: PerfectVerb = {
  name: Word('усмотреть', 6),
  singular1stPerson: Word('усмотрю', 6),
  singular2ndPerson: Word('усмотришь', 3),
  singular3rdPerson: Word('усмотрит', 3),
  plural1stPerson: Word('усмотрим', 3),
  plural2ndPerson: Word('усмотрите', 3),
  plural3rdPerson: Word('усмотрят', 3),
  masculinePast: Word('усмотрел', 6),
  femininePast: Word('усмотрела', 6),
  neuterPast: Word('усмотрело', 6),
  pluralPast: Word('усмотрели', 6),
  imperativeInformal: Word('усмотри', 6),
  imperativeFormal: Word('усмотрите', 6),
  imperfect: [],
};

perfectVerbs.set(усмотреть.name.text, усмотреть);

export { усмотреть };