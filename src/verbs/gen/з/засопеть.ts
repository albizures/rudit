import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засопеть: PerfectVerb = {
  name: Word('засопеть', 5),
  singular1stPerson: Word('засоплю', 6),
  singular2ndPerson: Word('засопишь', 5),
  singular3rdPerson: Word('засопит', 5),
  plural1stPerson: Word('засопим', 5),
  plural2ndPerson: Word('засопите', 5),
  plural3rdPerson: Word('засопят', 5),
  masculinePast: Word('засопел', 5),
  femininePast: Word('засопела', 5),
  neuterPast: Word('засопело', 5),
  pluralPast: Word('засопели', 5),
  imperativeInformal: Word('засопи', 5),
  imperativeFormal: Word('засопите', 5),
  imperfect: [],
};

perfectVerbs.set(засопеть.name.text, засопеть);

export { засопеть };