import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причёсываться: PerfectVerb = {
  name: Word('причёсываться', 8),
  singular1stPerson: Word('причёсываюсь', 8),
  singular2ndPerson: Word('причёсываешься', 8),
  singular3rdPerson: Word('причёсывается', 8),
  plural1stPerson: Word('причёсываемся', 8),
  plural2ndPerson: Word('причёсываетесь', 8),
  plural3rdPerson: Word('причёсываются', 8),
  masculinePast: Word('причёсывался', 8),
  femininePast: Word('причёсывалась', 8),
  neuterPast: Word('причёсывалось', 8),
  pluralPast: Word('причёсывались', 8),
  imperativeInformal: Word('причёсывайся', 8),
  imperativeFormal: Word('причёсывайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(причёсываться.name.text, причёсываться);

export { причёсываться };