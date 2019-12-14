import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похрапеть: PerfectVerb = {
  name: Word('похрапеть', 6),
  singular1stPerson: Word('похраплю', 7),
  singular2ndPerson: Word('похрапишь', 6),
  singular3rdPerson: Word('похрапит', 6),
  plural1stPerson: Word('похрапим', 6),
  plural2ndPerson: Word('похрапите', 6),
  plural3rdPerson: Word('похрапят', 6),
  masculinePast: Word('похрапел', 6),
  femininePast: Word('похрапела', 6),
  neuterPast: Word('похрапело', 6),
  pluralPast: Word('похрапели', 6),
  imperativeInformal: Word('похрапи', 6),
  imperativeFormal: Word('похрапите', 6),
  imperfect: [],
};

perfectVerbs.set(похрапеть.name.text, похрапеть);

export { похрапеть };