import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отправляться: PerfectVerb = {
  name: Word('отправляться', 7),
  singular1stPerson: Word('отправляюсь', 7),
  singular2ndPerson: Word('отправляешься', 7),
  singular3rdPerson: Word('отправляется', 7),
  plural1stPerson: Word('отправляемся', 7),
  plural2ndPerson: Word('отправляетесь', 7),
  plural3rdPerson: Word('отправляются', 7),
  masculinePast: Word('отправлялся', 7),
  femininePast: Word('отправлялась', 7),
  neuterPast: Word('отправлялось', 7),
  pluralPast: Word('отправлялись', 7),
  imperativeInformal: Word('отправляйся', 7),
  imperativeFormal: Word('отправляйтесь', 7),
  imperfect: ['отправиться'],
};

perfectVerbs.set(отправляться.name.text, отправляться);

export { отправляться };