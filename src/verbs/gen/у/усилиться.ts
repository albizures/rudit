import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усилиться: PerfectVerb = {
  name: Word('усилиться', 2),
  singular1stPerson: Word('усилюсь', 2),
  singular2ndPerson: Word('усилишься', 2),
  singular3rdPerson: Word('усилится', 2),
  plural1stPerson: Word('усилимся', 2),
  plural2ndPerson: Word('усилитесь', 2),
  plural3rdPerson: Word('усилятся', 2),
  masculinePast: Word('усилился', 2),
  femininePast: Word('усилилась', 2),
  neuterPast: Word('усилилось', 2),
  pluralPast: Word('усилились', 2),
  imperativeInformal: Word('усилься', 2),
  imperativeFormal: Word('усильтесь', 2),
  imperfect: [],
};

perfectVerbs.set(усилиться.name.text, усилиться);

export { усилиться };