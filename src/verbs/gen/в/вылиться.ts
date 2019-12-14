import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылиться: PerfectVerb = {
  name: Word('вылиться', 1),
  singular1stPerson: Word('выльюсь', 1),
  singular2ndPerson: Word('выльешься', 1),
  singular3rdPerson: Word('выльется', 1),
  plural1stPerson: Word('выльемся', 1),
  plural2ndPerson: Word('выльетесь', 1),
  plural3rdPerson: Word('выльются', 1),
  masculinePast: Word('вылился', 1),
  femininePast: Word('вылилась', 1),
  neuterPast: Word('вылилось', 1),
  pluralPast: Word('вылились', 1),
  imperativeInformal: Word('вылейся', 1),
  imperativeFormal: Word('вылейтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вылиться.name.text, вылиться);

export { вылиться };