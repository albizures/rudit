import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопеть: PerfectVerb = {
  name: Word('сопеть', 3),
  singular1stPerson: Word('соплю', 4),
  singular2ndPerson: Word('сопишь', 3),
  singular3rdPerson: Word('сопит', 3),
  plural1stPerson: Word('сопим', 3),
  plural2ndPerson: Word('сопите', 3),
  plural3rdPerson: Word('сопят', 3),
  masculinePast: Word('сопел', 3),
  femininePast: Word('сопела', 3),
  neuterPast: Word('сопело', 3),
  pluralPast: Word('сопели', 3),
  imperativeInformal: Word('сопи', 3),
  imperativeFormal: Word('сопите', 3),
  imperfect: [],
};

perfectVerbs.set(сопеть.name.text, сопеть);

export { сопеть };