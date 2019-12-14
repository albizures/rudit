import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шелушиться: PerfectVerb = {
  name: Word('шелушиться', 5),
  singular1stPerson: Word('шелушусь', 5),
  singular2ndPerson: Word('шелушишься', 5),
  singular3rdPerson: Word('шелушится', 5),
  plural1stPerson: Word('шелушимся', 5),
  plural2ndPerson: Word('шелушитесь', 5),
  plural3rdPerson: Word('шелушатся', 5),
  masculinePast: Word('шелушился', 5),
  femininePast: Word('шелушилась', 5),
  neuterPast: Word('шелушилось', 5),
  pluralPast: Word('шелушились', 5),
  imperativeInformal: Word('шелушись', 5),
  imperativeFormal: Word('шелушитесь', 5),
  imperfect: [],
};

perfectVerbs.set(шелушиться.name.text, шелушиться);

export { шелушиться };