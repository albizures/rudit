import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смазаться: PerfectVerb = {
  name: Word('смазаться', 2),
  singular1stPerson: Word('смажусь', 2),
  singular2ndPerson: Word('смажешься', 2),
  singular3rdPerson: Word('смажется', 2),
  plural1stPerson: Word('смажемся', 2),
  plural2ndPerson: Word('смажетесь', 2),
  plural3rdPerson: Word('смажутся', 2),
  masculinePast: Word('смазался', 2),
  femininePast: Word('смазалась', 2),
  neuterPast: Word('смазалось', 2),
  pluralPast: Word('смазались', 2),
  imperativeInformal: Word('смажься', 2),
  imperativeFormal: Word('смажьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(смазаться.name.text, смазаться);

export { смазаться };