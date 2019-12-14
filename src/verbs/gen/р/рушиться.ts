import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рушиться: PerfectVerb = {
  name: Word('рушиться', 1),
  singular1stPerson: Word('рушусь', 1),
  singular2ndPerson: Word('рушишься', 1),
  singular3rdPerson: Word('рушится', 1),
  plural1stPerson: Word('рушимся', 1),
  plural2ndPerson: Word('рушитесь', 1),
  plural3rdPerson: Word('рушатся', 1),
  masculinePast: Word('рушился', 1),
  femininePast: Word('рушилась', 1),
  neuterPast: Word('рушилось', 1),
  pluralPast: Word('рушились', 1),
  imperativeInformal: Word('рушься', 1),
  imperativeFormal: Word('рушьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(рушиться.name.text, рушиться);

export { рушиться };