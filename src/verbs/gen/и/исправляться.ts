import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исправляться: PerfectVerb = {
  name: Word('исправляться', 7),
  singular1stPerson: Word('исправляюсь', 7),
  singular2ndPerson: Word('исправляешься', 7),
  singular3rdPerson: Word('исправляется', 7),
  plural1stPerson: Word('исправляемся', 7),
  plural2ndPerson: Word('исправляетесь', 7),
  plural3rdPerson: Word('исправляются', 7),
  masculinePast: Word('исправлялся', 7),
  femininePast: Word('исправлялась', 7),
  neuterPast: Word('исправлялось', 7),
  pluralPast: Word('исправлялись', 7),
  imperativeInformal: Word('исправляйся', 7),
  imperativeFormal: Word('исправляйтесь', 7),
  imperfect: ['исправиться'],
};

perfectVerbs.set(исправляться.name.text, исправляться);

export { исправляться };