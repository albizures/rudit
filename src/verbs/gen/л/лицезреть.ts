import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лицезреть: PerfectVerb = {
  name: Word('лицезреть', 6),
  singular1stPerson: Word('лицезрю', 6),
  singular2ndPerson: Word('лицезришь', 6),
  singular3rdPerson: Word('лицезрит', 6),
  plural1stPerson: Word('лицезрим', 6),
  plural2ndPerson: Word('лицезрите', 6),
  plural3rdPerson: Word('лицезрят', 6),
  masculinePast: Word('лицезрел', 6),
  femininePast: Word('лицезрела', 6),
  neuterPast: Word('лицезрело', 6),
  pluralPast: Word('лицезрели', 6),
  imperativeInformal: Word('лицезри', 6),
  imperativeFormal: Word('лицезрите', 6),
  imperfect: [],
};

perfectVerbs.set(лицезреть.name.text, лицезреть);

export { лицезреть };