import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учиться: PerfectVerb = {
  name: Word('учиться', 2),
  singular1stPerson: Word('учусь', 2),
  singular2ndPerson: Word('учишься', 0),
  singular3rdPerson: Word('учится', 0),
  plural1stPerson: Word('учимся', 0),
  plural2ndPerson: Word('учитесь', 0),
  plural3rdPerson: Word('учатся', 0),
  masculinePast: Word('учился', 2),
  femininePast: Word('училась', 2),
  neuterPast: Word('училось', 2),
  pluralPast: Word('учились', 2),
  imperativeInformal: Word('учись', 2),
  imperativeFormal: Word('учитесь', 2),
  imperfect: ['выучиться'],
};

perfectVerbs.set(учиться.name.text, учиться);

export { учиться };