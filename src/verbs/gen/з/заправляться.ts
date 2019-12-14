import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заправляться: PerfectVerb = {
  name: Word('заправляться', 7),
  singular1stPerson: Word('заправляюсь', 7),
  singular2ndPerson: Word('заправляешься', 7),
  singular3rdPerson: Word('заправляется', 7),
  plural1stPerson: Word('заправляемся', 7),
  plural2ndPerson: Word('заправляетесь', 7),
  plural3rdPerson: Word('заправляются', 7),
  masculinePast: Word('заправлялся', 7),
  femininePast: Word('заправлялась', 7),
  neuterPast: Word('заправлялось', 7),
  pluralPast: Word('заправлялись', 7),
  imperativeInformal: Word('заправляйся', 7),
  imperativeFormal: Word('заправляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(заправляться.name.text, заправляться);

export { заправляться };