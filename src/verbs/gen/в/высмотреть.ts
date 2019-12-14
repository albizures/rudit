import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высмотреть: PerfectVerb = {
  name: Word('высмотреть', 1),
  singular1stPerson: Word('высмотрю', 1),
  singular2ndPerson: Word('высмотришь', 1),
  singular3rdPerson: Word('высмотрит', 1),
  plural1stPerson: Word('высмотрим', 1),
  plural2ndPerson: Word('высмотрите', 1),
  plural3rdPerson: Word('высмотрят', 1),
  masculinePast: Word('высмотрел', 1),
  femininePast: Word('высмотрела', 1),
  neuterPast: Word('высмотрело', 1),
  pluralPast: Word('высмотрели', 1),
  imperativeInformal: Word('высмотри', 1),
  imperativeFormal: Word('высмотрите', 1),
  imperfect: [],
};

perfectVerbs.set(высмотреть.name.text, высмотреть);

export { высмотреть };