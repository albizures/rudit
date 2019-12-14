import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побеспокоиться: PerfectVerb = {
  name: Word('побеспокоиться', 8),
  singular1stPerson: Word('побеспокоюсь', 8),
  singular2ndPerson: Word('побеспокоишься', 8),
  singular3rdPerson: Word('побеспокоится', 8),
  plural1stPerson: Word('побеспокоимся', 8),
  plural2ndPerson: Word('побеспокоитесь', 8),
  plural3rdPerson: Word('побеспокоятся', 8),
  masculinePast: Word('побеспокоился', 8),
  femininePast: Word('побеспокоилась', 8),
  neuterPast: Word('побеспокоилось', 8),
  pluralPast: Word('побеспокоились', 8),
  imperativeInformal: Word('побеспокойся', 8),
  imperativeFormal: Word('побеспокойтесь', 8),
  imperfect: [],
};

perfectVerbs.set(побеспокоиться.name.text, побеспокоиться);

export { побеспокоиться };