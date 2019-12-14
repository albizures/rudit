import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приодеться: PerfectVerb = {
  name: Word('приодеться', 5),
  singular1stPerson: Word('приоденусь', 5),
  singular2ndPerson: Word('приоденешься', 5),
  singular3rdPerson: Word('приоденется', 5),
  plural1stPerson: Word('приоденемся', 5),
  plural2ndPerson: Word('приоденетесь', 5),
  plural3rdPerson: Word('приоденутся', 5),
  masculinePast: Word('приоделся', 5),
  femininePast: Word('приоделась', 5),
  neuterPast: Word('приоделось', 5),
  pluralPast: Word('приоделись', 5),
  imperativeInformal: Word('приоденься', 5),
  imperativeFormal: Word('приоденьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(приодеться.name.text, приодеться);

export { приодеться };