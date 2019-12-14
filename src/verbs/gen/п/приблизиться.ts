import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приблизиться: PerfectVerb = {
  name: Word('приблизиться', 5),
  singular1stPerson: Word('приближусь', 5),
  singular2ndPerson: Word('приблизишься', 5),
  singular3rdPerson: Word('приблизится', 5),
  plural1stPerson: Word('приблизимся', 5),
  plural2ndPerson: Word('приблизитесь', 5),
  plural3rdPerson: Word('приблизятся', 5),
  masculinePast: Word('приблизился', 5),
  femininePast: Word('приблизилась', 5),
  neuterPast: Word('приблизилось', 5),
  pluralPast: Word('приблизились', 5),
  imperativeInformal: Word('приблизься', 5),
  imperativeFormal: Word('приблизьтесь', 5),
  imperfect: ['приближаться'],
};

perfectVerbs.set(приблизиться.name.text, приблизиться);

export { приблизиться };