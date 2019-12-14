import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевиться: PerfectVerb = {
  name: Word('перевиться', 5),
  singular1stPerson: Word('перевьюсь', 6),
  singular2ndPerson: Word('перевьёшься', 6),
  singular3rdPerson: Word('перевьётся', 6),
  plural1stPerson: Word('перевьёмся', 6),
  plural2ndPerson: Word('перевьётесь', 6),
  plural3rdPerson: Word('перевьются', 6),
  masculinePast: Word('перевился', 5),
  femininePast: Word('перевилась', 7),
  neuterPast: Word('перевилось//перевило'сь', 5),
  pluralPast: Word('перевились//перевили'сь', 5),
  imperativeInformal: Word('перевейся', 5),
  imperativeFormal: Word('перевейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перевиться.name.text, перевиться);

export { перевиться };