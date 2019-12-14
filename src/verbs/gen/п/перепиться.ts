import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепиться: PerfectVerb = {
  name: Word('перепиться', 5),
  singular1stPerson: Word('перепьюсь', 6),
  singular2ndPerson: Word('перепьёшься', 6),
  singular3rdPerson: Word('перепьётся', 6),
  plural1stPerson: Word('перепьёмся', 6),
  plural2ndPerson: Word('перепьётесь', 6),
  plural3rdPerson: Word('перепьются', 6),
  masculinePast: Word('перепился', 5),
  femininePast: Word('перепилась', 7),
  neuterPast: Word('перепилось//перепило'сь', 5),
  pluralPast: Word('перепились//перепили'сь', 5),
  imperativeInformal: Word('перепейся', 5),
  imperativeFormal: Word('перепейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перепиться.name.text, перепиться);

export { перепиться };