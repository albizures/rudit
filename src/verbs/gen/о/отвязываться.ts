import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвязываться: PerfectVerb = {
  name: Word('отвязываться', 3),
  singular1stPerson: Word('отвязываюсь', 3),
  singular2ndPerson: Word('отвязываешься', 3),
  singular3rdPerson: Word('отвязывается', 3),
  plural1stPerson: Word('отвязываемся', 3),
  plural2ndPerson: Word('отвязываетесь', 3),
  plural3rdPerson: Word('отвязываются', 3),
  masculinePast: Word('отвязывался', 3),
  femininePast: Word('отвязывалась', 3),
  neuterPast: Word('отвязывалось', 3),
  pluralPast: Word('отвязывались', 3),
  imperativeInformal: Word('отвязывайся', 3),
  imperativeFormal: Word('отвязывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отвязываться.name.text, отвязываться);

export { отвязываться };