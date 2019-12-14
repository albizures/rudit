import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примириться: PerfectVerb = {
  name: Word('примириться', 6),
  singular1stPerson: Word('примирюсь', 6),
  singular2ndPerson: Word('примиришься', 6),
  singular3rdPerson: Word('примирится', 6),
  plural1stPerson: Word('примиримся', 6),
  plural2ndPerson: Word('примиритесь', 6),
  plural3rdPerson: Word('примирятся', 6),
  masculinePast: Word('примирился', 6),
  femininePast: Word('примирилась', 6),
  neuterPast: Word('примирилось', 6),
  pluralPast: Word('примирились', 6),
  imperativeInformal: Word('примирись', 6),
  imperativeFormal: Word('примиритесь', 6),
  imperfect: [],
};

perfectVerbs.set(примириться.name.text, примириться);

export { примириться };