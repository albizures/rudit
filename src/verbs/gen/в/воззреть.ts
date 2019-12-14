import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воззреть: PerfectVerb = {
  name: Word('воззреть', 5),
  singular1stPerson: Word('воззрю', 5),
  singular2ndPerson: Word('воззришь', 5),
  singular3rdPerson: Word('воззрит', 5),
  plural1stPerson: Word('воззрим', 5),
  plural2ndPerson: Word('воззрите', 5),
  plural3rdPerson: Word('воззрят', 5),
  masculinePast: Word('воззрел', 5),
  femininePast: Word('воззрела', 5),
  neuterPast: Word('воззрело', 5),
  pluralPast: Word('воззрели', 5),
  imperativeInformal: Word('воззри', 5),
  imperativeFormal: Word('воззрите', 5),
  imperfect: [],
};

perfectVerbs.set(воззреть.name.text, воззреть);

export { воззреть };