import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отламываться: PerfectVerb = {
  name: Word('отламываться', 3),
  singular1stPerson: Word('отламываюсь', 3),
  singular2ndPerson: Word('отламываешься', 3),
  singular3rdPerson: Word('отламывается', 3),
  plural1stPerson: Word('отламываемся', 3),
  plural2ndPerson: Word('отламываетесь', 3),
  plural3rdPerson: Word('отламываются', 3),
  masculinePast: Word('отламывался', 3),
  femininePast: Word('отламывалась', 3),
  neuterPast: Word('отламывалось', 3),
  pluralPast: Word('отламывались', 3),
  imperativeInformal: Word('отламывайся', 3),
  imperativeFormal: Word('отламывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отламываться.name.text, отламываться);

export { отламываться };