import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пилиться: PerfectVerb = {
  name: Word('пилиться', 3),
  singular1stPerson: Word('пилюсь', 3),
  singular2ndPerson: Word('пилишься', 1),
  singular3rdPerson: Word('пилится', 1),
  plural1stPerson: Word('пилимся', 1),
  plural2ndPerson: Word('пилитесь', 1),
  plural3rdPerson: Word('пилятся', 1),
  masculinePast: Word('пилился', 3),
  femininePast: Word('пилилась', 3),
  neuterPast: Word('пилилось', 3),
  pluralPast: Word('пилились', 3),
  imperativeInformal: Word('пились', 3),
  imperativeFormal: Word('пилитесь', 3),
  imperfect: [],
};

perfectVerbs.set(пилиться.name.text, пилиться);

export { пилиться };