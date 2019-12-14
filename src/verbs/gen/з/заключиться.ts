import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заключиться: PerfectVerb = {
  name: Word('заключиться', 6),
  singular1stPerson: Word('заключусь', 6),
  singular2ndPerson: Word('заключишься', 6),
  singular3rdPerson: Word('заключится', 6),
  plural1stPerson: Word('заключимся', 6),
  plural2ndPerson: Word('заключитесь', 6),
  plural3rdPerson: Word('заключатся', 6),
  masculinePast: Word('заключился', 6),
  femininePast: Word('заключилась', 6),
  neuterPast: Word('заключилось', 6),
  pluralPast: Word('заключились', 6),
  imperativeInformal: Word('заключись', 6),
  imperativeFormal: Word('заключитесь', 6),
  imperfect: [],
};

perfectVerbs.set(заключиться.name.text, заключиться);

export { заключиться };