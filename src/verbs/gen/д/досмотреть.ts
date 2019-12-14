import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досмотреть: PerfectVerb = {
  name: Word('досмотреть', 7),
  singular1stPerson: Word('досмотрю', 7),
  singular2ndPerson: Word('досмотришь', 4),
  singular3rdPerson: Word('досмотрит', 4),
  plural1stPerson: Word('досмотрим', 4),
  plural2ndPerson: Word('досмотрите', 4),
  plural3rdPerson: Word('досмотрят', 4),
  masculinePast: Word('досмотрел', 7),
  femininePast: Word('досмотрела', 7),
  neuterPast: Word('досмотрело', 7),
  pluralPast: Word('досмотрели', 7),
  imperativeInformal: Word('досмотри', 7),
  imperativeFormal: Word('досмотрите', 7),
  imperfect: [],
};

perfectVerbs.set(досмотреть.name.text, досмотреть);

export { досмотреть };