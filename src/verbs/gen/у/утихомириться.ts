import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утихомириться: PerfectVerb = {
  name: Word('утихомириться', 6),
  singular1stPerson: Word('утихомирюсь', 6),
  singular2ndPerson: Word('утихомиришься', 6),
  singular3rdPerson: Word('утихомирится', 6),
  plural1stPerson: Word('утихомиримся', 6),
  plural2ndPerson: Word('утихомиритесь', 6),
  plural3rdPerson: Word('утихомирятся', 6),
  masculinePast: Word('утихомирился', 6),
  femininePast: Word('утихомирилась', 6),
  neuterPast: Word('утихомирилось', 6),
  pluralPast: Word('утихомирились', 6),
  imperativeInformal: Word('утихомирься', 6),
  imperativeFormal: Word('утихомирьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(утихомириться.name.text, утихомириться);

export { утихомириться };