import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ознакомиться: PerfectVerb = {
  name: Word('ознакомиться', 5),
  singular1stPerson: Word('ознакомлюсь', 5),
  singular2ndPerson: Word('ознакомишься', 5),
  singular3rdPerson: Word('ознакомится', 5),
  plural1stPerson: Word('ознакомимся', 5),
  plural2ndPerson: Word('ознакомитесь', 5),
  plural3rdPerson: Word('ознакомятся', 5),
  masculinePast: Word('ознакомился', 5),
  femininePast: Word('ознакомилась', 5),
  neuterPast: Word('ознакомилось', 5),
  pluralPast: Word('ознакомились', 5),
  imperativeInformal: Word('ознакомься', 5),
  imperativeFormal: Word('ознакомьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ознакомиться.name.text, ознакомиться);

export { ознакомиться };