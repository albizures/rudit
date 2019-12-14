import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынестись: PerfectVerb = {
  name: Word('вынестись', 1),
  singular1stPerson: Word('вынесусь', 1),
  singular2ndPerson: Word('вынесешься', 1),
  singular3rdPerson: Word('вынесется', 1),
  plural1stPerson: Word('вынесемся', 1),
  plural2ndPerson: Word('вынесетесь', 1),
  plural3rdPerson: Word('вынесутся', 1),
  masculinePast: Word('вынесся', 1),
  femininePast: Word('вынеслась', 1),
  neuterPast: Word('вынеслось', 1),
  pluralPast: Word('вынеслись', 1),
  imperativeInformal: Word('вынесись', 1),
  imperativeFormal: Word('вынеситесь', 1),
  imperfect: [],
};

perfectVerbs.set(вынестись.name.text, вынестись);

export { вынестись };