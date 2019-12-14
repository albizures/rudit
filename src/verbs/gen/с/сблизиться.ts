import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сблизиться: PerfectVerb = {
  name: Word('сблизиться', 3),
  singular1stPerson: Word('сближусь', 3),
  singular2ndPerson: Word('сблизишься', 3),
  singular3rdPerson: Word('сблизится', 3),
  plural1stPerson: Word('сблизимся', 3),
  plural2ndPerson: Word('сблизитесь', 3),
  plural3rdPerson: Word('сблизятся', 3),
  masculinePast: Word('сблизился', 3),
  femininePast: Word('сблизилась', 3),
  neuterPast: Word('сблизилось', 3),
  pluralPast: Word('сблизились', 3),
  imperativeInformal: Word('сблизься', 3),
  imperativeFormal: Word('сблизьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сблизиться.name.text, сблизиться);

export { сблизиться };