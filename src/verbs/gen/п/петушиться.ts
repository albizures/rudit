import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const петушиться: PerfectVerb = {
  name: Word('петушиться', 5),
  singular1stPerson: Word('петушусь', 5),
  singular2ndPerson: Word('петушишься', 5),
  singular3rdPerson: Word('петушится', 5),
  plural1stPerson: Word('петушимся', 5),
  plural2ndPerson: Word('петушитесь', 5),
  plural3rdPerson: Word('петушатся', 5),
  masculinePast: Word('петушился', 5),
  femininePast: Word('петушилась', 5),
  neuterPast: Word('петушилось', 5),
  pluralPast: Word('петушились', 5),
  imperativeInformal: Word('петушись', 5),
  imperativeFormal: Word('петушитесь', 5),
  imperfect: [],
};

perfectVerbs.set(петушиться.name.text, петушиться);

export { петушиться };