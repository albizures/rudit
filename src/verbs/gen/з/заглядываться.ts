import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглядываться: PerfectVerb = {
  name: Word('заглядываться', 4),
  singular1stPerson: Word('заглядываюсь', 4),
  singular2ndPerson: Word('заглядываешься', 4),
  singular3rdPerson: Word('заглядывается', 4),
  plural1stPerson: Word('заглядываемся', 4),
  plural2ndPerson: Word('заглядываетесь', 4),
  plural3rdPerson: Word('заглядываются', 4),
  masculinePast: Word('заглядывался', 4),
  femininePast: Word('заглядывалась', 4),
  neuterPast: Word('заглядывалось', 4),
  pluralPast: Word('заглядывались', 4),
  imperativeInformal: Word('заглядывайся', 4),
  imperativeFormal: Word('заглядывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заглядываться.name.text, заглядываться);

export { заглядываться };