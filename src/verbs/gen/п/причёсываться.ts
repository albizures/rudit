import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причёсываться: PerfectVerb = {
  name: Word('причёсываться', 4),
  singular1stPerson: Word('причёсываюсь', 4),
  singular2ndPerson: Word('причёсываешься', 4),
  singular3rdPerson: Word('причёсывается', 4),
  plural1stPerson: Word('причёсываемся', 4),
  plural2ndPerson: Word('причёсываетесь', 4),
  plural3rdPerson: Word('причёсываются', 4),
  masculinePast: Word('причёсывался', 4),
  femininePast: Word('причёсывалась', 4),
  neuterPast: Word('причёсывалось', 4),
  pluralPast: Word('причёсывались', 4),
  imperativeInformal: Word('причёсывайся', 4),
  imperativeFormal: Word('причёсывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(причёсываться.name.text, причёсываться);

export { причёсываться };