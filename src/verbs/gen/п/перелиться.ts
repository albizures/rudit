import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелиться: PerfectVerb = {
  name: Word('перелиться', 5),
  singular1stPerson: Word('перельюсь', 6),
  singular2ndPerson: Word('перельёшься', 1),
  singular3rdPerson: Word('перельётся', 1),
  plural1stPerson: Word('перельёмся', 1),
  plural2ndPerson: Word('перельётесь', 1),
  plural3rdPerson: Word('перельются', 6),
  masculinePast: Word('перелился', 5),
  femininePast: Word('перелилась', 7),
  neuterPast: Word('перелилось//перелило'сь', 5),
  pluralPast: Word('перелились//перелили'сь', 5),
  imperativeInformal: Word('перелейся', 5),
  imperativeFormal: Word('перелейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перелиться.name.text, перелиться);

export { перелиться };