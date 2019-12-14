import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беспокоиться: PerfectVerb = {
  name: Word('беспокоиться', 6),
  singular1stPerson: Word('беспокоюсь', 6),
  singular2ndPerson: Word('беспокоишься', 6),
  singular3rdPerson: Word('беспокоится', 6),
  plural1stPerson: Word('беспокоимся', 6),
  plural2ndPerson: Word('беспокоитесь', 6),
  plural3rdPerson: Word('беспокоятся', 6),
  masculinePast: Word('беспокоился', 6),
  femininePast: Word('беспокоилась', 6),
  neuterPast: Word('беспокоилось', 6),
  pluralPast: Word('беспокоились', 6),
  imperativeInformal: Word('беспокойся', 6),
  imperativeFormal: Word('беспокойтесь', 6),
  imperfect: ['побеспокоиться','забеспокоитсья','обеспокоиться'],
};

perfectVerbs.set(беспокоиться.name.text, беспокоиться);

export { беспокоиться };