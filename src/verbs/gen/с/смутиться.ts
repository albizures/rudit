import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смутиться: PerfectVerb = {
  name: Word('смутиться', 4),
  singular1stPerson: Word('смучусь', 4),
  singular2ndPerson: Word('смутишься', 4),
  singular3rdPerson: Word('смутится', 4),
  plural1stPerson: Word('смутимся', 4),
  plural2ndPerson: Word('смутитесь', 4),
  plural3rdPerson: Word('смутятся', 4),
  masculinePast: Word('смутился', 4),
  femininePast: Word('смутилась', 4),
  neuterPast: Word('смутилось', 4),
  pluralPast: Word('смутились', 4),
  imperativeInformal: Word('смутись', 4),
  imperativeFormal: Word('смутитесь', 4),
  imperfect: ['смущаться'],
};

perfectVerbs.set(смутиться.name.text, смутиться);

export { смутиться };