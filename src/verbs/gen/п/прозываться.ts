import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозываться: PerfectVerb = {
  name: Word('прозываться', 6),
  singular1stPerson: Word('прозываюсь', 6),
  singular2ndPerson: Word('прозываешься', 6),
  singular3rdPerson: Word('прозывается', 6),
  plural1stPerson: Word('прозываемся', 6),
  plural2ndPerson: Word('прозываетесь', 6),
  plural3rdPerson: Word('прозываются', 6),
  masculinePast: Word('прозывался', 6),
  femininePast: Word('прозывалась', 6),
  neuterPast: Word('прозывалось', 6),
  pluralPast: Word('прозывались', 6),
  imperativeInformal: Word('прозывайся', 6),
  imperativeFormal: Word('прозывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прозываться.name.text, прозываться);

export { прозываться };