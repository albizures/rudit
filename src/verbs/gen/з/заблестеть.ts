import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заблестеть: PerfectVerb = {
  name: Word('заблестеть', 7),
  singular1stPerson: Word('заблещу', 6),
  singular2ndPerson: Word('заблестишь', 7),
  singular3rdPerson: Word('заблестит', 7),
  plural1stPerson: Word('заблестим', 7),
  plural2ndPerson: Word('заблестите', 7),
  plural3rdPerson: Word('заблестят', 7),
  masculinePast: Word('заблестел', 7),
  femininePast: Word('заблестела', 7),
  neuterPast: Word('заблестело', 7),
  pluralPast: Word('заблестели', 7),
  imperativeInformal: Word('заблести', 7),
  imperativeFormal: Word('заблестите', 7),
  imperfect: [],
};

perfectVerbs.set(заблестеть.name.text, заблестеть);

export { заблестеть };