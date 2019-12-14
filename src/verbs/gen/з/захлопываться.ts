import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлопываться: PerfectVerb = {
  name: Word('захлопываться', 4),
  singular1stPerson: Word('захлопываюсь', 4),
  singular2ndPerson: Word('захлопываешься', 4),
  singular3rdPerson: Word('захлопывается', 4),
  plural1stPerson: Word('захлопываемся', 4),
  plural2ndPerson: Word('захлопываетесь', 4),
  plural3rdPerson: Word('захлопываются', 4),
  masculinePast: Word('захлопывался', 4),
  femininePast: Word('захлопывалась', 4),
  neuterPast: Word('захлопывалось', 4),
  pluralPast: Word('захлопывались', 4),
  imperativeInformal: Word('захлопывайся', 4),
  imperativeFormal: Word('захлопывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(захлопываться.name.text, захлопываться);

export { захлопываться };