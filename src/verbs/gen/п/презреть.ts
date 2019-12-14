import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const презреть: PerfectVerb = {
  name: Word('презреть', 5),
  singular1stPerson: Word('презрю', 5),
  singular2ndPerson: Word('презришь', 5),
  singular3rdPerson: Word('презрит', 5),
  plural1stPerson: Word('презрим', 5),
  plural2ndPerson: Word('презрите', 5),
  plural3rdPerson: Word('презрят', 5),
  masculinePast: Word('презрел', 5),
  femininePast: Word('презрела', 5),
  neuterPast: Word('презрело', 5),
  pluralPast: Word('презрели', 5),
  imperativeInformal: Word('презри', 5),
  imperativeFormal: Word('презрите', 5),
  imperfect: ['презирать'],
};

perfectVerbs.set(презреть.name.text, презреть);

export { презреть };