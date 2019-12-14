import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смириться: PerfectVerb = {
  name: Word('смириться', 4),
  singular1stPerson: Word('смирюсь', 4),
  singular2ndPerson: Word('смиришься', 4),
  singular3rdPerson: Word('смирится', 4),
  plural1stPerson: Word('смиримся', 4),
  plural2ndPerson: Word('смиритесь', 4),
  plural3rdPerson: Word('смирятся', 4),
  masculinePast: Word('смирился', 4),
  femininePast: Word('смирилась', 4),
  neuterPast: Word('смирилось', 4),
  pluralPast: Word('смирились', 4),
  imperativeInformal: Word('смирись', 4),
  imperativeFormal: Word('смиритесь', 4),
  imperfect: [],
};

perfectVerbs.set(смириться.name.text, смириться);

export { смириться };