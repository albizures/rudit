import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трудиться: PerfectVerb = {
  name: Word('трудиться', 4),
  singular1stPerson: Word('тружусь', 4),
  singular2ndPerson: Word('трудишься', 2),
  singular3rdPerson: Word('трудится', 2),
  plural1stPerson: Word('трудимся', 2),
  plural2ndPerson: Word('трудитесь', 2),
  plural3rdPerson: Word('трудятся', 2),
  masculinePast: Word('трудился', 4),
  femininePast: Word('трудилась', 4),
  neuterPast: Word('трудилось', 4),
  pluralPast: Word('трудились', 4),
  imperativeInformal: Word('трудись', 4),
  imperativeFormal: Word('трудитесь', 4),
  imperfect: ['потрудиться'],
};

perfectVerbs.set(трудиться.name.text, трудиться);

export { трудиться };