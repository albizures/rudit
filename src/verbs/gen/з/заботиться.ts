import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заботиться: PerfectVerb = {
  name: Word('заботиться', 3),
  singular1stPerson: Word('забочусь', 3),
  singular2ndPerson: Word('заботишься', 3),
  singular3rdPerson: Word('заботится', 3),
  plural1stPerson: Word('заботимся', 3),
  plural2ndPerson: Word('заботитесь', 3),
  plural3rdPerson: Word('заботятся', 3),
  masculinePast: Word('заботился', 3),
  femininePast: Word('заботилась', 3),
  neuterPast: Word('заботилось', 3),
  pluralPast: Word('заботились', 3),
  imperativeInformal: Word('заботься', 3),
  imperativeFormal: Word('заботьтесь', 3),
  imperfect: ['позаботиться'],
};

perfectVerbs.set(заботиться.name.text, заботиться);

export { заботиться };