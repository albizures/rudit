import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злиться: PerfectVerb = {
  name: Word('злиться', 2),
  singular1stPerson: Word('злюсь', 2),
  singular2ndPerson: Word('злишься', 2),
  singular3rdPerson: Word('злится', 2),
  plural1stPerson: Word('злимся', 2),
  plural2ndPerson: Word('злитесь', 2),
  plural3rdPerson: Word('злятся', 2),
  masculinePast: Word('злился', 2),
  femininePast: Word('злилась', 2),
  neuterPast: Word('злилось', 2),
  pluralPast: Word('злились', 2),
  imperativeInformal: Word('злись', 2),
  imperativeFormal: Word('злитесь', 2),
  imperfect: [],
};

perfectVerbs.set(злиться.name.text, злиться);

export { злиться };