import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const румяниться: PerfectVerb = {
  name: Word('румяниться', 3),
  singular1stPerson: Word('румянюсь', 3),
  singular2ndPerson: Word('румянишься', 3),
  singular3rdPerson: Word('румянится', 3),
  plural1stPerson: Word('румянимся', 3),
  plural2ndPerson: Word('румянитесь', 3),
  plural3rdPerson: Word('румянятся', 3),
  masculinePast: Word('румянился', 3),
  femininePast: Word('румянилась', 3),
  neuterPast: Word('румянилось', 3),
  pluralPast: Word('румянились', 3),
  imperativeInformal: Word('румянься', 3),
  imperativeFormal: Word('румяньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(румяниться.name.text, румяниться);

export { румяниться };