import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересмотреть: PerfectVerb = {
  name: Word('пересмотреть', 9),
  singular1stPerson: Word('пересмотрю', 9),
  singular2ndPerson: Word('пересмотришь', 6),
  singular3rdPerson: Word('пересмотрит', 6),
  plural1stPerson: Word('пересмотрим', 6),
  plural2ndPerson: Word('пересмотрите', 6),
  plural3rdPerson: Word('пересмотрят', 6),
  masculinePast: Word('пересмотрел', 9),
  femininePast: Word('пересмотрела', 9),
  neuterPast: Word('пересмотрело', 9),
  pluralPast: Word('пересмотрели', 9),
  imperativeInformal: Word('пересмотри', 9),
  imperativeFormal: Word('пересмотрите', 9),
  imperfect: [],
};

perfectVerbs.set(пересмотреть.name.text, пересмотреть);

export { пересмотреть };