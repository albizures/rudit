import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебиться: PerfectVerb = {
  name: Word('перебиться', 5),
  singular1stPerson: Word('перебьюсь', 6),
  singular2ndPerson: Word('перебьёшься', 1),
  singular3rdPerson: Word('перебьётся', 1),
  plural1stPerson: Word('перебьёмся', 1),
  plural2ndPerson: Word('перебьётесь', 1),
  plural3rdPerson: Word('перебьются', 6),
  masculinePast: Word('перебился', 5),
  femininePast: Word('перебилась', 5),
  neuterPast: Word('перебилось', 5),
  pluralPast: Word('перебились', 5),
  imperativeInformal: Word('перебейся', 5),
  imperativeFormal: Word('перебейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перебиться.name.text, перебиться);

export { перебиться };