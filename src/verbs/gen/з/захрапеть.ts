import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захрапеть: PerfectVerb = {
  name: Word('захрапеть', 6),
  singular1stPerson: Word('захраплю', 7),
  singular2ndPerson: Word('захрапишь', 6),
  singular3rdPerson: Word('захрапит', 6),
  plural1stPerson: Word('захрапим', 6),
  plural2ndPerson: Word('захрапите', 6),
  plural3rdPerson: Word('захрапят', 6),
  masculinePast: Word('захрапел', 6),
  femininePast: Word('захрапела', 6),
  neuterPast: Word('захрапело', 6),
  pluralPast: Word('захрапели', 6),
  imperativeInformal: Word('захрапи', 6),
  imperativeFormal: Word('захрапите', 6),
  imperfect: [],
};

perfectVerbs.set(захрапеть.name.text, захрапеть);

export { захрапеть };