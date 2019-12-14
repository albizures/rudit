import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таиться: PerfectVerb = {
  name: Word('таиться', 2),
  singular1stPerson: Word('таюсь', 2),
  singular2ndPerson: Word('таишься', 2),
  singular3rdPerson: Word('таится', 2),
  plural1stPerson: Word('таимся', 2),
  plural2ndPerson: Word('таитесь', 2),
  plural3rdPerson: Word('таятся', 2),
  masculinePast: Word('таился', 2),
  femininePast: Word('таилась', 2),
  neuterPast: Word('таилось', 2),
  pluralPast: Word('таились', 2),
  imperativeInformal: Word('таись', 2),
  imperativeFormal: Word('таитесь', 2),
  imperfect: [],
};

perfectVerbs.set(таиться.name.text, таиться);

export { таиться };