import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const родиться: PerfectVerb = {
  name: Word('родиться', 3),
  singular1stPerson: Word('рожусь', 3),
  singular2ndPerson: Word('родишься', 3),
  singular3rdPerson: Word('родится', 3),
  plural1stPerson: Word('родимся', 3),
  plural2ndPerson: Word('родитесь', 3),
  plural3rdPerson: Word('родятся', 3),
  masculinePast: Word('родился', 3),
  femininePast: Word('родилась', 5),
  neuterPast: Word('родилось', 3),
  pluralPast: Word('родились', 3),
  imperativeInformal: Word('родись', 3),
  imperativeFormal: Word('родитесь', 3),
  imperfect: ['рождаться'],
};

perfectVerbs.set(родиться.name.text, родиться);

export { родиться };