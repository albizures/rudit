import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрываться: PerfectVerb = {
  name: Word('изрываться', 5),
  singular1stPerson: Word('изрываюсь', 5),
  singular2ndPerson: Word('изрываешься', 5),
  singular3rdPerson: Word('изрывается', 5),
  plural1stPerson: Word('изрываемся', 5),
  plural2ndPerson: Word('изрываетесь', 5),
  plural3rdPerson: Word('изрываются', 5),
  masculinePast: Word('изрывался', 5),
  femininePast: Word('изрывалась', 5),
  neuterPast: Word('изрывалось', 5),
  pluralPast: Word('изрывались', 5),
  imperativeInformal: Word('изрывайся', 5),
  imperativeFormal: Word('изрывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изрываться.name.text, изрываться);

export { изрываться };