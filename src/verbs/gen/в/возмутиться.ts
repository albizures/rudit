import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возмутиться: PerfectVerb = {
  name: Word('возмутиться', 6),
  singular1stPerson: Word('возмущусь', 6),
  singular2ndPerson: Word('возмутишься', 6),
  singular3rdPerson: Word('возмутится', 6),
  plural1stPerson: Word('возмутимся', 6),
  plural2ndPerson: Word('возмутитесь', 6),
  plural3rdPerson: Word('возмутятся', 6),
  masculinePast: Word('возмутился', 6),
  femininePast: Word('возмутилась', 6),
  neuterPast: Word('возмутилось', 6),
  pluralPast: Word('возмутились', 6),
  imperativeInformal: Word('возмутись', 6),
  imperativeFormal: Word('возмутитесь', 6),
  imperfect: [],
};

perfectVerbs.set(возмутиться.name.text, возмутиться);

export { возмутиться };