import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ловиться: PerfectVerb = {
  name: Word('ловиться', 3),
  singular1stPerson: Word('ловлюсь', 4),
  singular2ndPerson: Word('ловишься', 1),
  singular3rdPerson: Word('ловится', 1),
  plural1stPerson: Word('ловимся', 1),
  plural2ndPerson: Word('ловитесь', 1),
  plural3rdPerson: Word('ловятся', 1),
  masculinePast: Word('ловился', 3),
  femininePast: Word('ловилась', 3),
  neuterPast: Word('ловилось', 3),
  pluralPast: Word('ловились', 3),
  imperativeInformal: Word('ловись', 3),
  imperativeFormal: Word('ловитесь', 3),
  imperfect: [],
};

perfectVerbs.set(ловиться.name.text, ловиться);

export { ловиться };